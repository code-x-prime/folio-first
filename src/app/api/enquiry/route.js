import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, mobile, email, service, message, source } = body;

    // Validate fields
    if (!name || !mobile || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false, // use TLS
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Common Styles for Emails
    const emailStyles = `
            body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; margin: 0; padding: 0; background-color: #FAFAFA; color: #232323; }
            .container { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 20px 50px rgba(0,0,0,0.05); border: 1px solid #f0f0f0; }
            .header { background: #1A1A1A; padding: 50px 40px; text-align: center; border-bottom: 5px solid #d5ad5c; }
            .logo { color: #d5ad5c; font-size: 28px; font-weight: 900; letter-spacing: -1px; text-transform: uppercase; }
            .badge { display: inline-block; padding: 6px 14px; background: rgba(213,173,92,0.1); color: #d5ad5c; font-size: 11px; font-weight: 800; border-radius: 50px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 15px; }
            .content { padding: 45px 40px; }
            .title { font-size: 24px; font-weight: 800; color: #1A1A1A; margin-bottom: 10px; line-height: 1.2; }
            .subtitle { font-size: 16px; color: #666; margin-bottom: 35px; line-height: 1.6; }
            .data-grid { display: block; width: 100%; border-radius: 16px; background: #F8F9FA; padding: 25px; margin-bottom: 30px; }
            .data-item { margin-bottom: 20px; }
            .data-item:last-child { margin-bottom: 0; }
            .label { font-size: 10px; font-weight: 900; color: #d5ad5c; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 6px; }
            .value { font-size: 16px; font-weight: 600; color: #1A1A1A; line-height: 1.4; }
            .message-box { padding: 25px; background: #ffffff; border: 1px solid #EDEDED; border-radius: 16px; color: #444; font-size: 15px; line-height: 1.7; font-style: italic; }
            .footer { background: #1A1A1A; padding: 35px 40px; text-align: center; color: #888; font-size: 13px; }
            .footer a { color: #d5ad5c; text-decoration: none; font-weight: 600; }
            .btn { display: inline-block; padding: 16px 36px; background: #d5ad5c; color: #ffffff !important; font-weight: 800; border-radius: 12px; text-decoration: none; margin-top: 20px; transition: all 0.3s; }
        `;

    // 1. Template for Admin (The Lead)
    const adminHtml = `
            <!DOCTYPE html>
            <html>
            <head><style>${emailStyles}</style></head>
            <body>
                <div class="container">
                    <div class="header">
                        <div class="logo">Folio First</div>
                    </div>
                    <div class="content">
                        <span class="badge">New Lead Notification</span>
                        <h1 class="title">New Enquiry Received</h1>
                        <p class="subtitle">A new potential client has submitted an enquiry through the ${source || 'Website'}. Details are provided below.</p>
                        
                        <div class="data-grid">
                            <div class="data-item">
                                <div class="label">Full Name</div>
                                <div class="value">${name}</div>
                            </div>
                            <div class="data-item">
                                <div class="label">Mobile Number</div>
                                <div class="value">${mobile}</div>
                            </div>
                            <div class="data-item">
                                <div class="label">Email Address</div>
                                <div class="value">${email}</div>
                            </div>
                            <div class="data-item">
                                <div class="label">Service Required</div>
                                <div class="value">${service || 'General Query'}</div>
                            </div>
                            <div class="data-item">
                                <div class="label">Enquiry Source</div>
                                <div class="value">${source || 'Direct Website Submission'}</div>
                            </div>
                        </div>

                        <div class="label" style="margin-left: 5px;">Client Message</div>
                        <div class="message-box">
                            "${message || 'No additional details provided.'}"
                        </div>
                    </div>
                    <div class="footer">
                        &copy; ${new Date().getFullYear()} Folio First Lead Management. All Rights Reserved.<br/>
                        <a href="https://foliofirst.in">foliofirst.in</a>
                    </div>
                </div>
            </body>
            </html>
        `;

    // 2. Template for User (The Acknowledgment)
    const userHtml = `
            <!DOCTYPE html>
            <html>
            <head><style>${emailStyles}</style></head>
            <body>
                <div class="container">
                    <div class="header">
                        <div class="logo">Folio First</div>
                    </div>
                    <div class="content" style="text-align: center;">
                        <span class="badge">Enquiry Acknowledged</span>
                        <h1 class="title">Thank You, ${name.split(' ')[0]}!</h1>
                        <p class="subtitle">We have successfully received your enquiry regarding <strong>${service || 'our services'}</strong>. Our specialized recovery architects are already reviewing your case details.</p>
                        
                        <div style="background: #F8F9FA; border-radius: 20px; padding: 30px; margin: 30px 0; text-align: left;">
                            <h3 style="font-size: 16px; margin-top: 0; color: #1A1A1A;">What happens next?</h3>
                            <ul style="color: #666; font-size: 14px; padding-left: 20px; line-height: 1.8;">
                                <li><strong>Expert Evaluation:</strong> Our senior consultants will evaluate your case requirements.</li>
                                <li><strong>Consultation Call:</strong> You will receive a call or WhatsApp on <strong>${mobile}</strong> within 24 business hours.</li>
                                <li><strong>Strategy Roadmap:</strong> We will provide a step-by-step roadmap for your asset recovery.</li>
                            </ul>
                        </div>

                        <p style="font-size: 15px; color: #444; margin-bottom: 25px;">Need immediate assistance? You can reach us directly on WhatsApp.</p>
                        <a href="https://wa.me/919910908064" class="btn">Connect via WhatsApp</a>
                    </div>
                    <div class="footer">
                        <strong>Folio First Consulting</strong><br/>
                        Expert Solutions for IEPF Recovery & Share Transmission<br/><br/>
                        <a href="https://foliofirst.in">Visit Website</a> | <a href="mailto:support@foliofirst.in">Contact Support</a><br/><br/>
                        &copy; ${new Date().getFullYear()} Folio First Consulting. All Rights Reserved.
                    </div>
                </div>
            </body>
            </html>
        `;

    // Create Promise Array for Concurrent Sending
    const emailPromises = [
      // Send to Admin
      transporter.sendMail({
        from: `"Folio First Enquiries" <${process.env.FROM_EMAIL}>`,
        to: process.env.ADMIN_EMAIL,
        subject: `New Lead: ${name} (${source || 'Website'})`,
        html: adminHtml,
      }),
      // Send to User
      transporter.sendMail({
        from: `"Folio First Consulting" <${process.env.FROM_EMAIL}>`,
        to: email,
        subject: `Enquiry Received: ${name}, we're reviewing your request`,
        html: userHtml,
      })
    ];

    // Wait for both emails to be sent
    await Promise.all(emailPromises);

    return NextResponse.json({ success: true, message: 'Enquiry processed and emails sent successfully' });

  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Failed to process enquiry', details: error.message },
      { status: 500 }
    );
  }
}
