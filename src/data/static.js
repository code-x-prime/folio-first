import { FileText, BarChart, ShieldCheck, RefreshCw, UserCheck, Share2, UserSearch } from "lucide-react";

export const siteConfig = {
    name: "Folio First Consulting",
    url: "https://foliofirstconsulting.com",
    description: "India's leading consultancy for IEPF recovery, share transmission, and dematerialisation services.",
    email: "foliofirstconsulting@gmail.com",
    phone: "+91 9910908064",
    address: "Gurgaon, India",
    socials: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
    },
};

export const services = [
    {
        id: "dematerialisation",
        slug: "dematerialisation-of-shares",
        icon: BarChart,
        title: "Dematerialisation of Shares",
        shortDescription: "We convert your physical shares to Demat with a 99% success rate. Fast, secure, and fully compliant with SEBI & NSDL/CDSL regulations.",
        heroImage: "/images/Dematerialisation.jpg",
        overview: "Dematerialisation of shares is the process of converting physical share certificates into electronic form, facilitating seamless share trading and transfer. In India, this is managed through depositories like NSDL and CDSL. Holding physical shares poses risks of loss, theft, and fraud. Dematerialisation eliminates these risks, ensuring ease of buying and selling while boosting market efficiency. At Folio First Consulting, we assist you in converting your physical shares to Demat form seamlessly, ensuring compliance and speed.",
        challenges: [
            { title: "Lack of Awareness", description: "Many investors are unaware of the process and benefits, leading to confusion and delays." },
            { title: "Documentation Errors", description: "Incomplete details or mismatched signatures on the DRF often cause rejections." },
            { title: "Technical Glitches", description: "System failures or connectivity issues with DPs can disrupt the conversion process." },
            { title: "Regulatory Compliance", description: "Complex guidelines from SEBI and MCA require strict adherence to avoid application rejection." },
            { title: "Delays in Processing", description: "High volume of requests and ineffective handling can prolong the conversion time." }
        ],
        whoNeeds: [
            "Individual Investors (Residents & NRIs)",
            "Companies holding physical shares",
            "HUFs & Trusts",
            "Banks & Financial Institutions",
            "Foreign Portfolio Investors (FPIs)"
        ],
        prerequisites: [
            { title: "Active Demat Account", description: "You must have a registered Demat account with a Depository Participant (DP)." },
            { title: "DRF Submission", description: "Submission of a filled Dematerialisation Request Form (DRF) is mandatory." },
            { title: "Original Certificates", description: "Physical share certificates must be surrendered for conversion." },
            { title: "Signature Verification", description: "Signatures on certificates must match company records." }
        ],
        benefits: [
            "Easy and Convenient: Access holdings anywhere, anytime.",
            "Secure and Risk-Free: Eliminates loss, theft, or damage risks.",
            "Effortless Fund Transfers: Quick electronic transfers via linked bank accounts.",
            "Paperless and Eco-Friendly: Reduces administrative burden and paper usage.",
            "Loan Against Securities: Use Demat holdings as collateral for loans.",
            "Quick Corporate Benefits: Automatic credit of dividends and bonus shares.",
            "Easy Portfolio Monitoring: Track performance and holdings in real-time.",
            "Versatile Investment Options: Hold equities, mutual funds, and bonds in one place."
        ],
        documents: [
            "Dematerialisation Request Form (DRF)",
            "Original Physical Share Certificates",
            "Self-attested PAN Card",
            "Aadhar Card or Address Proof",
            "Client Master List (CML)",
            "Two Passport-sized Photographs",
            "Registered Nominee Details",
            "Death Certificate & Succession Certificate (For Inherited Shares)"
        ],
        process: [
            { title: "Selection of DP", description: "Choosing a Depository Participant (DP) to open your Demat account.", duration: "1-2 Days" },
            { title: "Filling Demat Account Form", description: "Submitting the application form with required KYC documents.", duration: "1-2 Days" },
            { title: "Document Verification", description: "Validating address, identity proof, and bank details.", duration: "3-5 Days" },
            { title: "Processing Request", description: "Verification of physical certificates and DRF by the RTA.", duration: "5-7 Days" },
            { title: "Completion & Credit", description: "Shares are converted to electronic form and credited to your account.", duration: "7-10 Days" }
        ],
        guidelines: [
            "Mandatory for Private Companies (except Small Companies).",
            "Required for any share transfers or capital structure alterations.",
            "Companies must obtain an ISIN for electronic transactions.",
            "NSDL and CDSL handle the process as SEBI-registered depositories."
        ],
        penalties: [
            "Monetary Penalty on Company: Up to ₹2,00,000.",
            "Penalty on Officers: Up to ₹50,000.",
            "Loss of Shareholder Rights (Dividend & Voting).",
            "Restriction on Share Issuance and Transfer."
        ],
        whyChooseUs: [
            "10+ Years of Industry Experience",
            "Helped Over 5000+ Investors",
            "99% Accuracy Rate with Minimal Errors",
            "30% Quicker Turnaround Time",
            "End-to-End SEBI Compliant Process",
            "Transparent & Zero Hidden Charges"
        ],
        faq: [
            { question: "What is dematerialisation of shares?", answer: "It is the process of converting physical share certificates into electronic form to facilitate seamless trading and security." },
            { question: "Is dematerialisation mandatory?", answer: "Yes, for transferring shares and for most private companies, dematerialisation is now mandatory under MCA and SEBI rules." },
            { question: "What is a DRF?", answer: "Dematerialisation Request Form (DRF) is the document submitted to your DP to initiate the conversion of physical shares." },
            { question: "How long does the process take?", answer: "Typically 15-30 days, but with our assistance, we aim to expedite verification and processing." }
        ]
    },
    {
        id: "iepf-recovery",
        slug: "recovery-of-unclaimed-dividend-iepf",
        icon: UserSearch,
        title: "Recovery of Unclaimed Dividends from IEPF",
        shortDescription: "Experience an easy, timely, and hassle-free recovery of unclaimed dividends from IEPF. Claim your unclaimed dividends from IEPF with Folio First experts.",
        heroImage: "/images/recovery-unclaimed-dividend.jpg",
        overview: "The recovery of unclaimed dividends from IEPF (Investor Education and Protection Fund) is the process of reclaiming dividends. The process involves reclaiming dividends that remain unclaimed for seven straight years, after which they get transferred to the IEPF.\n\nHowever, to claim dividends from IEPF, shareholders or their legal heirs must fill out Form IEPF-5 and submit it along with the required documents. It is important to follow the mandated process for seamless recovery, including company and IEPF Authority verification before refunding the amount. The process of IEPF unclaimed dividend is complex, but professional consultants at Folio First can ensure a hassle-free recovery by simplifying the overall process for you.",
        importance: "The recovery of unclaimed dividends from IEPF is important as it ensures the rightful ownership of the original shareholders. Besides, the process to recover dividends from IEPF helps prevent financial loss and restores the investment value. If the unclaimed dividends are not claimed, the shareholders may lose the amount accrued permanently. The shareholder can utilize the accrued dividend amount for reinvestment or to increase their savings.\n\nLegal heirs of deceased shareholders can claim the unclaimed dividends as a part of the assets inherited. While the recovery process ensures the amount reaches its rightful owners, it is complicated and mandates adherence to legal and regulatory requirements. However, if shareholders can take timely actions to claim their dividends, they can prevent the complexity and enjoy a seamless and hassle-free claim process.",
        challenges: [
            { title: "Extensive Documentation", description: "The process mandates submitting various documents including PAN, Aadhar, and legal heir certificates. Discrepancies can lead to delays or rejections." },
            { title: "Lengthy Verification Process", description: "Multi-step verification by companies and IEPF Authority scrutinizes the claim thoroughly, extending processing time." },
            { title: "Legal Complexities", description: "Providing succession certificates, affidavits, or probate is time-consuming and expensive for legal heirs." },
            { title: "Rejections", description: "Incorrectly filled forms, missing documents, and signature mismatches often lead to claim rejection." },
            { title: "Lack of Awareness", description: "Many shareholders are unaware of their unclaimed dividends or the recovery process, leading to delays and risk of fund loss." }
        ],
        procedure: "detailed", // Indicator for internal logic if needed
        process: [
            { title: "IEPF-5 Form Submission", description: "We assist in filling out and submitting the IEPF-5 form online via the MCA portal along with required details.", duration: "1-2 Days" },
            { title: "Physical Document Submission", description: "Sending the signed documents to the company’s Nodal Officer for verification.", duration: "7-15 Days" },
            { title: "Company Verification & Report Filing", description: "Nodal Officer reviews the submitted form/documents and submits an E-Verification Report to IEPF Authority.", duration: "15-30 Days" },
            { title: "IEPF Authority Review & Approval", description: "The IEPF Authority examines the documents and may request additional proofs if needed.", duration: "60-90 Days" },
            { title: "Fund Transfer to Claimant", description: "Once approved, the reclaimed amount is transferred directly to the claimant's bank account.", duration: "15-30 Days" }
        ],
        documents: [
            "Copy of PAN Card",
            "Copy of Aadhar Card / Address Proof",
            "Client Master List (CML) from the Depository",
            "Shareholding Proof - Demat/Physical Share Certificate",
            "Dividend Warrants (If available)",
            "Bank Account Proof - Cancelled Cheque/Passbook",
            "Death Certificate (For legal heirs)",
            "Succession Certificate/Will/Probate (If applicable)",
            "Indemnity Bond & Affidavit (As per IEPF requirements)"
        ],
        whoNeeds: [
            { title: "Original Shareholders", description: "People who did not claim dividends for seven years, causing the transfer to IEPF." },
            { title: "Legal Heirs", description: "Successors of deceased shareholders after validating identity and submitting succession proofs." },
            { title: "Nominees", description: "Nominees registered by original shareholders eligible after submitting valid proof." },
            { title: "Joint Shareholders", description: "Co-holders eligible if the primary shareholder has not claimed the same." },
            { title: "Authorized Representatives", description: "Guardians or power of attorney holders can claim on behalf of applicants." }
        ],
        benefits: [
            { title: "Reclaims Ownership", description: "Ensures dividend is transferred to rightful owners, preventing permanent loss." },
            { title: "Enhances Financial Security", description: "Boosts personal finances, adding to savings or reinvestment opportunities." },
            { title: "Prevents Fund Lapse", description: "Prevents permanent loss of funds transferred to IEPF if not reclaimed in time." },
            { title: "Restores Investment Value", description: "Helps recover unclaimed investment returns, leveraging financial benefits." },
            { title: "Simplifies Estate Settlement", description: "Eases asset distribution for legal heirs of deceased shareholders." },
            { title: "Avoids Inconvenience", description: "Professional help reduces paperwork and procedural delays of the complex process." }
        ],
        prerequisites: [
            { title: "IEPF-5 Form", description: "Completing and submitting the IEPF-5 form to initiate the claim online." },
            { title: "Identity Proof", description: "Submitting PAN card, Aadhaar card, and proof of address." },
            { title: "Shareholding Proof", description: "Submitting Demat account details or physical share certificates." },
            { title: "Bank & Entitlement Proof", description: "Attaching a cancelled cheque and entitlement letter." },
            { title: "Legal Documents", description: "Furnishing affidavits, indemnity bonds, or succession certificates if applicable." }
        ],
        servicesOffered: [
            "IEPF Unclaimed Dividend Recovery Assistance",
            "Expert Guidance Throughout the Dividend Claims Recovery Process",
            "Helping you Fill Out the Form IEPF-5 Accurately",
            "Paperwork Assistance for Streamlined Dividend Recovery Claim",
            "Liaising with Officials to Expedite the Verification Process",
            "Legal Guidance and Support for Complicated Cases",
            "Tracking Claims Progress and Sharing Updates",
            "On-time Follow-ups to Avert Unwarranted Delays",
            "Comprehensive Services to Streamline the Recovery of Dividends"
        ],
        whyChooseUs: [
            "10+ Years of Industry Experience",
            "Recovered Dividend Value worth ₹100 Crore+",
            "Resolved 10,000+ Dividend Claims",
            "98% Success Rate in Handling Recovery",
            "Quick Turnaround Time of 30%",
            "Dedicated IEPF Recovery Agents",
            "Comprehensive Assistance",
            "Support for Error Rectification"
        ],
        faq: [
            { question: "How can I claim dividend from IEPF?", answer: "You can claim by filling out the IEPF-5 form on the IEPF portal, attaching documents, and submitting online. Physical copies must also be sent to the company’s Nodal Officer." },
            { question: "What happens if the dividend is not claimed for seven years?", answer: "Dividends unclaimed for seven straight years are transferred to the Investor Education and Protection Fund (IEPF)." },
            { question: "What documents do I need to submit?", answer: "Required documents include IEPF-5 form, PAN, Aadhar, share certificate/CML, cancelled cheque, and legal documents like indemnity bond/affidavit." },
            { question: "How long does the process take?", answer: "The entire process typically takes 3-6 months, involving verification by the company (15-30 days) and approval by IEPF Authority (60-90 days)." },
            { question: "What should I do if my IEPF-5 claim is rejected?", answer: "If rejected, you can rectify the errors (like missing docs or signature mismatch) and refile the form. Our experts can assist in error rectification." }
        ]
    },
    {
        id: "transmission",
        slug: "transmission-of-shares",
        icon: UserCheck,
        title: "Transmission of Shares",
        shortDescription: "Seamless transfer of shares to legal heirs in case of the shareholder's demise.",
        heroImage: "/images/transmission-shares.jpg",
        overview: "Transmission of shares is the legal process of transferring ownership of securities to legal heirs upon the death of the original holder. This process can be daunting due to documentation requirements like Succession Certificates. We provide compassionate and expert legal assistance to ensure a smooth transition of wealth to the rightful beneficiaries.",
        whoNeeds: [
            "Legal heirs of specific deceased shareholders.",
            "Joint holders wishing to remove a deceased holder's name.",
            "Claimants with or without a registered nominee.",
            "Families struggling with complex succession laws."
        ],
        benefits: [
            "Legal clarity on ownership.",
            "Prevention of future disputes among heirs.",
            "Ability to dematerialise and monetize inherited assets.",
            "Compliance with SEBI's simplified transmission norms."
        ],
        documents: [
            "Death Certificate (Original or Notarized)",
            "PAN and Aadhar of Claimant",
            "Client Master List (CML)",
            "Probate / Succession Certificate / Letter of Administration (if value > limit)",
            "No Objection Certificate (NOC) from other heirs"
        ],
        process: [
            "Documentation Audit: We determine if you need a range of legal documents based on asset value.",
            "Application Filing: Preparing transmission request forms for the RTA.",
            "Legal Compliance: Assisting in obtaining Legal Heir Certificates or Succession Certificates if needed.",
            "Follow-up: Coordinating with the company/RTA for approval.",
            "Transfer: Shares are transmitted to the claimant's Demat account."
        ],
        faq: [
            { question: "Is a Succession Certificate mandatory?", answer: "It depends on the value of shares and whether a nominee was registered. We advise based on specific cases." },
            { question: "How long does transmission take?", answer: "Simple cases take 3-4 weeks; complex legal cases may take longer." }
        ]
    },
    {
        id: "duplicate",
        slug: "duplicate-share-certificate",
        icon: FileText,
        title: "Duplicate Share Certificate",
        shortDescription: "Reissuance of lost, misplaced, or destroyed physical share certificates.",
        heroImage: "/images/duplicate-share-certificate.jpg",
        overview: "Lost your original share certificates? Don't panic. Obtaining a duplicate share certificate is a statutory right of every shareholder. The process has been significantly simplified under SEBI's latest circulars. Folio First Consulting guides you through the entire procedure to restore your proof of ownership swiftly and compliantly.",
        whoNeeds: [
            "Shareholders who have misplaced original certificates.",
            "Individuals whose certificates were destroyed in floods, fire, or transit.",
            "Investors holding torn or mutilated certificates.",
            "Heirs who cannot find the deceased's original papers."
        ],
        benefits: [
            "Restoration of asset value.",
            "Prerequisite for dematerialisation.",
            "Regularization of records with the company.",
            "Peace of mind regarding ownership proof."
        ],
        documents: [
            "Affidavit and Indemnity Bond",
            "KYC Documents of the holder (PAN & Aadhaar)",
            "Signature verification from Bank",
            "Self-attested copy of share certificate (if partial records exist)"
        ],
        process: [
            "Company Intimation: Informing the RTA/Company about the loss immediately to stop any transfer.",
            "Documentation: Drafting affidavits and indemnity bonds as required by the company.",
            "Application Submission: Filing the duplicate certificate request form with the RTA.",
            "Verification: The RTA verifies the holder's identity and shareholding records.",
            "Issuance: The company issues a 'Letter of Confirmation' for direct demat credit."
        ],
        faq: [
            { question: "Can I get physical certificates again?", answer: "As per SEBI's new circular, companies now issue a 'Letter of Confirmation' to credit shares directly to Demat, not physical certificates." },
            { question: "Is an FIR or newspaper publication required?", answer: "No. Under SEBI's simplified process, FIR filing and newspaper publication are no longer mandatory for most lost/misplaced certificate cases. An affidavit and indemnity bond are sufficient." }
        ]
    },
    {
        id: "kyc",
        slug: "kyc-update",
        icon: ShieldCheck,
        title: "KYC & Details Update",
        shortDescription: "Update your signature, address, and bank details to prevent freezing of folios.",
        heroImage: "/images/kyc-detail-update.jpg",
        overview: "SEBI has made it mandatory to update PAN, KYC, and Nomination details for all physical shareholders. Failure to do so leads to freezing of folios, preventing you from receiving dividends or lodging grievances. We ensure your records are up-to-date and compliant with the latest regulatory norms.",
        whoNeeds: [
            "Shareholders with outdated address or bank records.",
            "Individuals with signature mismatches.",
            "Investors whose folios have been frozen (KYC non-compliant).",
            "Anyone needing to add or change a nominee."
        ],
        benefits: [
            "Unfreezing of blocked folios.",
            "Receipt of pending dividends directly to bank.",
            "Smooth processing of future requests.",
            "Compliance with SEBI regulations."
        ],
        documents: [
            "ISR-1 (Request for registering PAN/KYC)",
            "ISR-2 (Signature Verification)",
            "SH-13 (Nomination Form)",
            "Self-attested PAN and Aadhar",
            "Original Cancelled Cheque"
        ],
        process: [
            "Record Analysis: checking the current status of your folio.",
            "Form Filling: Accurate filling of ISR-1, ISR-2, and SH-13 forms.",
            "Banker Attestation: Getting signature verification if signature has changed.",
            "Submission: Sending documents to the RTA.",
            "Confirmation: Ensuring the RTA updates the records in their system."
        ],
        faq: [
            { question: "What is a frozen folio?", answer: "A folio where the RTA stops processing requests due to missing KYC documents." },
            { question: "How do I change my address?", answer: "By submitting Form ISR-1 along with self-attested address proof." }
        ]
    }
];

export const articles = [
    {
        id: 1,
        slug: "nomination-financial-legacy-safety-net",
        title: "Nomination: Your Financial Legacy's Safety Net",
        date: "February 18, 2026",
        excerpt: "Nomination ensures your hard-earned wealth passes smoothly to your beneficiaries without legal red tape. Learn about the new 2025 nomination rules.",
        featuredImage: "/images/nomination-article.jpg",
        content: (
            <>
                <h2>What Is Nomination?</h2>
                <p>
                    Nomination means officially designating a person (or persons) who will receive your financial assets such as bank balances, shares, demat holdings, or dividends, in the event of your death. It ensures continuity of ownership and allows your hard-earned wealth to pass smoothly to your chosen beneficiaries without getting trapped in legal red tape.
                </p>

                <h2>Why Nomination Is Non-Negotiable</h2>
                <p>
                    Many investors focus on building wealth but overlook the &quot;exit gate.&quot; When no nominee is registered, family members must navigate a maze of succession certificates, affidavits, and court indemnities. During this time:
                </p>
                <ul>
                    <li>Bank accounts and lockers may be frozen.</li>
                    <li>Shares cannot be traded or sold.</li>
                    <li>Dividends remain unclaimed and are eventually transferred to government authorities like the IEPF.</li>
                </ul>
                <p>
                    With a nominee in place, the &quot;transmission&quot; of assets becomes far simpler, often requiring only basic documentation like a death certificate and identity proof.
                </p>

                <h2>New Nomination Rules (2025)</h2>
                <p>The landscape of nomination has changed significantly with the Banking Laws (Amendment) Act, 2025. Here is how you can now better protect your family:</p>

                <h3>1. For Bank Accounts (Effective November 1, 2025)</h3>
                <p>The new law introduces a dual-framework:</p>
                <ul>
                    <li><strong>Simultaneous Nomination:</strong> You can now name up to four nominees for Savings Accounts and FDs. You assign a specific percentage to each (e.g., Spouse-50%, Child A- 25%, Child B- 25%).</li>
                    <li><strong>Successive Nomination:</strong> Primarily for Lockers and Safe Custody, you can list nominees in a ranked order. If the first nominee is unable to claim the assets, the right automatically passes to the second, ensuring a &quot;backup&quot; is always in place.</li>
                </ul>

                <h3>2. For Demat &amp; Trading Accounts</h3>
                <ul>
                    <li><strong>Increased Limits:</strong> While previously limited to three, investors can now register up to ten nominees per folio (effective from late 2025).</li>
                    <li><strong>Allocation:</strong> You must specify the percentage share for each nominee, totaling exactly 100%.</li>
                </ul>

                <h2>Nomination Prevents Family Disputes</h2>
                <p>
                    A clear nomination reduces ambiguity. It provides a legal &quot;trustee&quot; who can receive the funds or shares immediately. While a nominee is technically a custodian for the ultimate legal heirs (as per a Will or Succession Act), having a registered name prevents the bank or DP from withholding assets during family disagreements.
                </p>

                <h2>How to Add or Update Nominees</h2>
                <p>Updating your details is now easier and more digital:</p>
                <ul>
                    <li>Online, through your broker&apos;s platform using Aadhaar e-Sign, or</li>
                    <li>Offline, by submitting the prescribed nomination form to your Depository Participant (DP).</li>
                </ul>
                <p>This flexibility makes it easier than ever to keep nomination details current and aligned with your wishes.</p>

                <h2>Link Between Missing Nomination and Unclaimed Shares</h2>
                <p>
                    A significant number of demat accounts in India still do not have nominees. This is one of the key reasons shares and dividends eventually get transferred to authorities like IEPF. Many such cases could be avoided with timely nomination.
                </p>

                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-8">
                    <h4 className="font-bold text-blue-900 mb-2">A Small Action with Long-Term Impact</h4>
                    <p className="text-blue-800 text-sm m-0">
                        Adding or updating a nominee in your demat account takes only a few minutes, but it can save your family years of administrative and legal effort. Nomination is not just a formality, it is an essential part of responsible financial planning.
                    </p>
                </div>

                <p>
                    Lastly, review your nominations annually. Life changes, be it marriages, births, or deaths, but it should be reflected in your financial records. True financial wisdom lies not just in earning returns, but in ensuring those returns reach the right hands at the right time. Nomination keeps your wealth moving forward instead of getting trapped in paperwork.
                </p>
            </>
        )
    },
    {
        id: 2,
        slug: "kyc-backbone-of-asset-recovery",
        title: "KYC - The Backbone of Asset Recovery",
        date: "February 16, 2026",
        excerpt: "KYC is no longer just a formality; it's the foundation of asset recovery. Learn why outdated records can lead to frozen folios and lost dividends.",
        featuredImage: "/images/kyc-article.jpg",
        content: (
            <>
                <p>
                    Unclaimed shares and dividends often remain untouched for years due to outdated records, address changes, or lack of awareness. However, as financial systems have evolved, identity verification has become central to reclaiming these assets. <strong>Know Your Customer (KYC)</strong> is no longer a procedural formality. It is the foundation upon which successful asset recovery stands.
                </p>

                <h2>The Role of KYC in Establishing Ownership</h2>
                <p>
                    KYC links an individual&apos;s verified identity, through PAN, Aadhaar, and bank details, to their financial holdings. When old physical share certificates resurface after decades, companies must confirm that the person claiming ownership today is the same individual who originally invested. Updated KYC records serve as legally recognized proof of that continuity.
                </p>
                <blockquote>
                    Without compliant KYC, companies and registrars cannot process dividend payments, dematerialization requests, or recovery claims.
                </blockquote>

                <h2>Eligible Applicants for Recovery of Unclaimed Shares</h2>
                <p>Recovery of unclaimed shares and dividends is permitted only to individuals who can legally establish entitlement. Eligible applicants include:</p>
                <ol>
                    <li>The original shareholder whose shares/dividends were transferred to IEPF.</li>
                    <li>Joint holders listed in the share folio.</li>
                    <li>A registered nominee.</li>
                    <li>Legal heirs or successors of a deceased shareholder.</li>
                    <li>An authorized representative holding a valid power of attorney or legal authorization.</li>
                </ol>
                <p>Eligibility depends on submission of proper documentation, including identity proof, proof of shareholding, nomination or succession documents (where applicable), and updated Demat account details.</p>

                <h2>Protection Against Fraud and Identity Misuse</h2>
                <p>
                    Unclaimed shares are vulnerable to fraud and impersonation. Regulatory authorities such as the Securities and Exchange Board of India (SEBI) and the Reserve Bank of India (RBI) mandate strict KYC compliance to prevent financial misconduct and money laundering.
                </p>
                <p>
                    Biometric authentication, document verification, and bank validation significantly reduce the risk of unauthorized claims. This safeguards both investors and institutions from potential identity theft.
                </p>

                <h2>Essential for Dematerialization</h2>
                <p>
                    Physical share certificates must now be converted into electronic form through a Demat account. This process, known as dematerialization, cannot be completed without an active, KYC-compliant account. In effect, KYC acts as the bridge between legacy paper holdings and the modern digital securities system.
                </p>

                <h2>Regulatory Compliance and IEPF Transfers</h2>
                <p>
                    Under Indian law, if dividends remain unclaimed for seven consecutive years, both the dividends and the underlying shares are transferred to the Investor Education and Protection Fund (IEPF). Once transferred, recovery becomes more document-intensive and time-consuming.
                </p>

                <h2>Risks of Non-Compliance with KYC</h2>
                <p>Failure to maintain updated KYC details can result in serious financial and procedural consequences:</p>
                <ul>
                    <li><strong>Frozen Dividend Payments:</strong> Companies may withhold dividends if PAN, bank details, or contact information are outdated.</li>
                    <li><strong>Transfer to IEPF:</strong> Shares and dividends unclaimed for seven years are transferred to the government-managed IEPF.</li>
                    <li><strong>Higher Tax Deduction (TDS):</strong> If PAN is not properly linked, dividends may attract 20% TDS instead of the standard 10%.</li>
                    <li><strong>Rejection of Recovery Applications:</strong> Even minor mismatches in name, address, or signature can lead to immediate rejection of claims.</li>
                </ul>

                <h2>Conclusion</h2>
                <p>
                    In today&apos;s regulatory environment, KYC is not optional, it is essential. It ensures legal ownership, prevents fraud, enables seamless dematerialization, and safeguards investors&apos; rights.
                </p>
                <p>
                    For anyone holding old physical shares or seeking recovery of unclaimed dividends, updating KYC is the first and most critical step toward reclaiming and securing their financial assets for the future.
                </p>
            </>
        )
    },
    {
        id: 3,
        slug: "recovering-shares-after-shareholder-death",
        title: "A Guide to Recovering Shares after a Shareholder's Death",
        date: "February 12, 2026",
        excerpt: "Losing a loved one is difficult, and managing financial legacy can be complex. Here is a comprehensive guide to share transmission and recovery after death.",
        featuredImage: "/images/recovery-after-death.jpg",
        content: (
            <>
                <p>
                    Losing a loved one is an emotional journey, but it also brings the critical responsibility of managing their financial legacy. Among the most valuable yet complex assets to handle are stock market investments. In India, crores of rupees in shares and dividends lie unclaimed because families are often unaware of the recovery process or find it too daunting.
                </p>
                <p>
                    Recent regulatory updates from SEBI and practical insights from recovery experts now make this transition smoother. Here is a comprehensive guide on how to navigate the recovery of shares after the death of the original shareholder.
                </p>

                <h2>Understanding &quot;Transmission&quot; vs. &quot;Transfer&quot;</h2>
                <p>
                    In the world of finance, moving shares from a deceased person to their successor is known as <strong>Transmission</strong>. Unlike a regular &quot;Transfer,&quot; which is a voluntary sale between living people, transmission is an involuntary legal process triggered by death, bankruptcy, or insolvency.
                </p>

                <h3>The Nominee: A Trustee, Not an Owner</h3>
                <p>
                    A common misconception is that the nominee automatically becomes the owner of the shares. Under Indian law, a nominee acts merely as a trustee or custodian. Their role is to facilitate the transfer of assets to the rightful legal heirs as per the deceased&apos;s will or succession laws. While the company may transmit shares to the nominee first, they are legally bound to hold them for the benefit of the final heirs.
                </p>

                <h2>The IEPF &quot;Recovery&quot; Process for physical shares</h2>
                <p>If dividends on physical shares have remained unclaimed for seven consecutive years, both the shares and the accumulated money are legally transferred to the Investor Education and Protection Fund (IEPF).</p>
                <ol>
                    <li><strong>The Claim (Form IEPF-5):</strong> Once assets are with the IEPF, you can no longer claim them from the company. You must file a formal legal claim (using Form IEPF-5) directly with the IEPF Authority. It is better to update your KYC details, before filing the online web form on the MCA portal.</li>
                    <li><strong>Verification:</strong> Once form is filled, you must send a physical set of documents (including an &quot;Entitlement Letter&quot; from the company) to the company&apos;s Nodal Officer for verification.</li>
                    <li><strong>Outcome:</strong> Once approved, the IEPF Authority credits the shares directly to your Demat account and the dividends to your Aadhaar-linked bank account.</li>
                    <li><strong>Dematerialization, the Final Step:</strong> Even if the shares are not in the IEPF, you must convert them into digital form to realize their value. You can often file for &quot;Transmission-cum-Demat.&quot; This allows the RTA to process the death claim and credit the resulting digital shares directly into the heir&apos;s Demat account in one go.</li>
                </ol>

                <h2>Transmission Pathways for Nominee and Non-Nominee Cases</h2>
                <p>The complexity of the claim depends on how the shares were held:</p>

                <h3>With a Nominee</h3>
                <p>
                    If there is a registered nominee, the process is comparatively streamlined. The nominee must submit a Transmission Request Form along with a self-attested copy of the death certificate and updated KYC documents (PAN, Aadhaar, bank details) to the Depository Participant (DP).
                </p>
                <p>
                    In demat cases, once documentation is complete and verified, transmission is usually processed within a short regulatory timeline. Recent SEBI standardization has reduced unnecessary document demands from intermediaries, especially in nominee cases. The nominee becomes the legal holder, though ultimate ownership rights may still follow succession law.
                </p>

                <h3>Without a Nominee (commonly up to &#8377;5 Lakhs)</h3>
                <p>
                    If there is no nominee and the holding value is relatively modest (commonly up to &#8377;5 lakh per listed entity, depending on DP internal policy and SEBI thresholds), intermediaries may accept simplified documentation. This typically includes:
                </p>
                <ul>
                    <li>An indemnity bond,</li>
                    <li>An affidavit,</li>
                    <li>A No Objection Certificate (NOC) from other legal heirs,</li>
                    <li>Legal heir certificate or family member certificate issued by competent authority.</li>
                </ul>
                <p>
                    These relaxed documentation norms exist to avoid forcing families into court for smaller portfolios. However, documentation must be precise. Even minor inconsistencies in name spelling, signatures, or PAN details can delay the process.
                </p>

                <h3>Without a Nominee (Above &#8377;5 Lakhs)</h3>
                <p>
                    If there is no nominee and the portfolio value is higher (generally above &#8377;5 lakh per listed entity), the legal heirs are typically required to produce stronger proof of entitlement. This usually means:
                </p>
                <ul>
                    <li>A succession certificate issued by a civil court, or</li>
                    <li>A probated will (if a will exists and probate is mandatory in that jurisdiction), or</li>
                    <li>Letters of administration in absence of a will.</li>
                </ul>
                <p>Courts issue these documents after verifying legal heirship, which is why higher-value cases demand judicial confirmation. It protects against competing claims.</p>

                <h2>SEBI&apos;s 2026 Rule: No More Unfair Capital Gains Tax</h2>
                <p>
                    A significant hurdle in the past was the taxation of these transfers. Previously, the transfer from a nominee to a legal heir was sometimes misclassified as a &quot;sale,&quot; triggering unwanted Capital Gains Tax.
                </p>
                <p>
                    To resolve this, SEBI has introduced a new framework effective from January 1, 2026 (SEBI&apos;s Circular on Ease of Doing Investment - Smooth transmission of securities from Nominee to Legal Heir):
                </p>
                <ul>
                    <li><strong>The &quot;TLH&quot; Code:</strong> Reporting entities (RTAs and Depository Participants) must now use a standard reason code TLH (Transmission to Legal Heirs), when reporting to the tax department (CBDT).</li>
                    <li><strong>Tax Exemption:</strong> This code signals that the transaction is a non-taxable transmission under Section 47(iii) of the Income Tax Act. It ensures that families are not penalized for simply inheriting what is rightfully theirs.</li>
                </ul>

                <h2>Power of Attorney: A Common Misconception</h2>
                <p>
                    Power of Attorney (PoA) ends upon death. It cannot be used to recover shares after the principal&apos;s demise. SEBI has also clarified that PoA holders cannot appoint nominees. After death, only legal heirs or executors can initiate transmission.
                </p>

                <h2>What If the Company Merged or No Longer Exists?</h2>
                <p>
                    Shares do not evaporate in mergers. They convert. If the original company merged or reorganized, entitlement shifts to the successor entity. If unclaimed long enough, they may sit in IEPF. Corporate actions like splits, bonuses, or amalgamations often multiply the value of old certificates. A dusty 1990s certificate may now represent a much larger holding due to decades of restructuring.
                </p>

                <h2>Conclusion</h2>
                <p>
                    Recovering &quot;lost&quot; or inherited shares is no longer the administrative nightmare it once was. With SEBI&apos;s new &quot;TLH&quot; code eliminating tax hurdles and standardized procedures for all holdings, the process is increasingly user-friendly. However, because legal disputes and paperwork errors can still lead to rejections, seeking professional guidance from recovery experts can ensure that your family&apos;s hard-earned wealth is protected and passed down efficiently.
                </p>
            </>
        )
    },
    {
        id: 4,
        slug: "difference-transfer-transmission-transposition",
        title: "Difference between Transfer, Transmission & Transposition",
        date: "February 08, 2026",
        excerpt: "Understand the legal differences between Transfer, Transmission, and Transposition of shares, and how the new 2026 SEBI updates affect taxation.",
        featuredImage: "/images/transmission-transposition.jpg",
        content: (
            <>
                <p>
                    In the world of corporate finance and stock market investments, the movement of shares from one individual to another is governed by specific legal procedures. While the terms Transfer, Transmission, and Transposition are often used interchangeably by casual investors, they represent distinct legal actions under the Companies Act and SEBI regulations.
                </p>
                <p>
                    Understanding these differences is crucial for effective estate planning, managing joint holdings, and ensuring tax compliance &mdash; especially with the recent 2026 SEBI updates regarding tax-neutral reporting.
                </p>

                <h2>1. Transfer of Shares: The Voluntary Sale</h2>
                <p>A Transfer is a voluntary act where a shareholder (the transferor) intentionally passes their ownership to another person (the transferee) for a consideration (price) or as a gift.</p>
                <ul>
                    <li><strong>Nature of Act:</strong> Voluntary and contract-based.</li>
                    <li><strong>Execution:</strong> Requires a formal instrument of transfer (Form SH-4 for physical shares) and the payment of Stamp Duty.</li>
                    <li><strong>Taxation:</strong> Usually triggers Capital Gains Tax for the transferor based on the holding period and market value.</li>
                    <li><strong>Key Requirement:</strong> Both the buyer and seller must be alive and consenting to the transaction.</li>
                </ul>

                <h2>2. Transmission of Shares: The Legal Succession</h2>
                <p>Transmission occurs by operation of law. It happens when the ownership of shares shifts automatically due to the death, lunacy, or insolvency of the original shareholder.</p>
                <ul>
                    <li><strong>Nature of Act:</strong> Involuntary and legal.</li>
                    <li><strong>Execution:</strong> Does not require a transfer deed or stamp duty. Instead, it is processed based on a Death Certificate, Succession Certificate, or a Probated Will.</li>
                    <li><strong>Nominee vs. Heir:</strong> Shares are often transmitted to a nominee first (as a trustee), who then facilitates the move to the ultimate legal heirs.</li>
                    <li><strong>2026 Update (TLH Code):</strong> Under the latest SEBI norms, Depository Participants must use the &quot;TLH&quot; (Transmission to Legal Heirs) reason code to ensure the move is flagged as a non-taxable inheritance, preventing wrongful capital gains tax notices.</li>
                </ul>

                <h2>3. Transposition of Shares: Reorganizing Joint Holders</h2>
                <p>Transposition is the simplest of the three. It refers to a change in the order of names of joint shareholders. No new person is added, and no existing person is removed from the share certificate or account.</p>
                <ul>
                    <li><strong>Nature of Act:</strong> Administrative rearrangement.</li>
                    <li><strong>Typical Scenario:</strong> If a father and son hold shares jointly as (1) Father and (2) Son, they may choose to transpose the names to (1) Son and (2) Father for convenience or bank-linking purposes.</li>
                    <li><strong>Execution:</strong> Requires a request letter signed by all joint holders. No stamp duty is applicable because the &quot;ownership group&quot; remains identical.</li>
                    <li><strong>Taxation:</strong> There is no tax implication as there is no change in beneficial ownership.</li>
                </ul>

                <h2>Quick Comparison Table</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Feature</th>
                            <th>Transfer</th>
                            <th>Transmission</th>
                            <th>Transposition</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Trigger</td>
                            <td>Voluntary sale or gift</td>
                            <td>Death, Insolvency, or Lunacy</td>
                            <td>Change in order of joint names</td>
                        </tr>
                        <tr>
                            <td>Consideration</td>
                            <td>Usually involves payment</td>
                            <td>No consideration</td>
                            <td>No consideration</td>
                        </tr>
                        <tr>
                            <td>Stamp Duty</td>
                            <td>Applicable</td>
                            <td>Not Applicable</td>
                            <td>Not Applicable</td>
                        </tr>
                        <tr>
                            <td>Instrument</td>
                            <td>Transfer Deed (SH-4)</td>
                            <td>Transmission Request Form (TRF)</td>
                            <td>Transposition Request Form</td>
                        </tr>
                        <tr>
                            <td>Tax Impact</td>
                            <td>Capital Gains Tax applies</td>
                            <td>Tax-Exempt (Inheritance)</td>
                            <td>No Tax Impact</td>
                        </tr>
                        <tr>
                            <td>Parties</td>
                            <td>Transferor &amp; Transferee</td>
                            <td>Legal Heir/Nominee</td>
                            <td>Same Joint Holders</td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    },
    {
        id: 5,
        slug: "sebi-special-windows-share-transfer",
        title: "SEBI's Special Windows: Transfer of Shares & Demat (February 5, 2026 to February 4, 2027)",
        date: "February 01, 2026",
        excerpt: "SEBI has introduced special windows between 2025-2027 for the transfer and dematerialisation of legacy physical securities. Don't miss this opportunity.",
        featuredImage: "/images/sebi-window.jpg",
        content: (
            <>
                <p>
                    India&apos;s securities market has undergone a fundamental transformation over the past decade, shifting from paper-based ownership to a fully electronic ecosystem. At the centre of this transition lies dematerialisation &mdash; the process of converting physical share certificates into electronic form held in demat accounts.
                </p>
                <p>
                    While this reform has dramatically improved transparency, efficiency, and investor protection, it also created transitional challenges for investors holding legacy physical shares, particularly those involved in transfers initiated before the demat regime became mandatory. This article explains the legal evolution of physical share transfers, the concept of transfer-cum-dematerialisation, and SEBI&apos;s special windows designed to resolve long-pending legacy cases.
                </p>

                <h2>Background: Discontinuation of Physical Share Transfers (April 1, 2019)</h2>
                <p>
                    With effect from April 1, 2019, SEBI discontinued the transfer of securities in physical form. From this date onward, any transfer of listed shares could take place only in dematerialised mode. The objective was clear:
                </p>
                <ul>
                    <li>Eliminate risks associated with physical certificates such as loss, forgery, and duplication.</li>
                    <li>Streamline settlement cycles and enhance transparency.</li>
                    <li>Protect investors through electronic recordkeeping.</li>
                </ul>
                <p>
                    However, SEBI carved out a limited exception for cases where transfer deeds had already been lodged prior to April 1, 2019. Investors whose transfer requests were submitted before this cut-off but later rejected or returned due to deficiencies &mdash; such as documentation errors, signature mismatches, or procedural issues &mdash; were permitted to re-lodge their requests with corrected documents. To bring finality to this arrangement, SEBI fixed <strong>March 31, 2021</strong> as the last date for such re-lodgement.
                </p>

                <h2>The March 31, 2021 Deadline and Its Aftermath</h2>
                <p>
                    In theory, the March 31, 2021 deadline was intended to close the chapter on physical transfers. In practice, many investors were unable to complete the process within this timeframe. The reasons were familiar:
                </p>
                <ul>
                    <li>Lack of awareness of regulatory timelines.</li>
                    <li>Old family holdings with incomplete records.</li>
                    <li>Death of original shareholders leading to succession complexities.</li>
                    <li>Signature mismatches in decades-old certificates.</li>
                    <li>General procedural hurdles in dealing with registrars and transfer agents (RTAs).</li>
                </ul>
                <p>
                    Following the lapse of the 2021 deadline, SEBI received numerous representations from investors, RTAs, and listed companies highlighting that a significant number of genuine investors were left stranded despite having valid historical transfer transactions. Recognising the gravity of the issue, SEBI convened a Panel of Experts, comprising representatives from RTAs, listed companies, and a legal expert. After examining the problem, the panel concluded that denying such investors a remedy would effectively extinguish legitimate ownership rights merely on procedural grounds. The panel therefore recommended that one final opportunity be provided to affected investors. This recommendation became the foundation for SEBI&apos;s special transfer-cum-dematerialisation windows.
                </p>

                <h2>Special Windows for Transfer-cum-Dematerialisation (2025&ndash;2027)</h2>
                <p>Acting on the panel&apos;s advice and in the interest of investor protection, SEBI introduced dedicated special windows to resolve these legacy cases.</p>

                <h3>Special Window: July 7, 2025 to January 6, 2026</h3>
                <p>
                    SEBI first opened a six-month window from July 7, 2025 to January 6, 2026, exclusively for transfer deeds that were lodged prior to April 1, 2019, and subsequently rejected, returned, or left unattended due to deficiencies. During this period:
                </p>
                <ul>
                    <li>Investors could re-lodge eligible transfer requests.</li>
                    <li>All approved securities were to be issued only in demat form.</li>
                    <li>RTAs and listed companies were directed to follow full due process for transfer-cum-dematerialisation.</li>
                </ul>
                <p>
                    To ensure effective implementation, SEBI required listed companies and RTAs to publicise the window through print and social media, deploy focused processing teams, and submit monthly reports detailing applications received, processed, approved, rejected, and average turnaround time.
                </p>

                <h3>Extended Window: February 5, 2026 to February 4, 2027</h3>
                <p>
                    Recognising that even the initial six months might not cover all deserving cases, SEBI subsequently announced another extended window from February 5, 2026 to February 4, 2027, continuing the same transfer-cum-demat facility for eligible physical securities. Together, these windows represent SEBI&apos;s most comprehensive effort to provide closure to India&apos;s long-standing backlog of physical-share transfer disputes.
                </p>

                <h2>Who Can Use These Special Windows?</h2>
                <p>These facilities are strictly limited to a narrow category:</p>
                <ul>
                    <li>Transfer requests originally lodged prior to April 1, 2019.</li>
                    <li>Rejected, returned, or pending due to deficiencies.</li>
                </ul>
                <p>They <strong>do not apply</strong> to:</p>
                <ul>
                    <li>Fresh transfers executed after 2019.</li>
                    <li>Investors who never lodged transfer deeds.</li>
                    <li>Ordinary dematerialisation of shares already standing in the holder&apos;s own name.</li>
                </ul>
                <p>For shareholders whose certificates are already in their own name, normal dematerialisation through a Depository Participant remains available at any time.</p>

                <h2>What Is Transfer-cum-Dematerialisation?</h2>
                <p>
                    Under the special windows, SEBI permits transfer and dematerialisation to be completed as a single integrated process. Instead of first transferring physical shares and then dematerialising them, both steps occur simultaneously. In practical terms:
                </p>
                <ol>
                    <li>The applicant submits original physical certificates, old transfer deeds (lodged before April 1, 2019), KYC documents, and demat account details to the RTA.</li>
                    <li>The RTA verifies the authenticity of certificates, transfer documentation, and investor identity.</li>
                    <li>Upon approval, ownership is updated in the company&apos;s records and the shares are directly credited to the transferee&apos;s demat account.</li>
                </ol>
                <p>No fresh physical certificates are issued. The securities enter the system in electronic form. This mechanism bridges the gap between the legacy paper era and the modern demat ecosystem.</p>

                <h2>Current Legal Position in Simple Terms</h2>
                <ul>
                    <li><strong>Transfer of shares in physical form:</strong> Not permitted since April 1, 2019.</li>
                    <li><strong>Dematerialisation of shares held in one&apos;s own name:</strong> Permitted anytime.</li>
                    <li><strong>Transfer of physical shares:</strong> Permitted only for pre-April 1, 2019 lodged cases and only during SEBI-notified special windows, through transfer-cum-demat.</li>
                </ul>
                <p>Outside these windows, such legacy transfer claims remain inoperative.</p>

                <h2>Conclusion</h2>
                <p>
                    SEBI&apos;s phased transition from physical certificates to dematerialised securities reflects a careful balance between market efficiency and investor justice. While April 1, 2019 marked the end of physical transfers, SEBI acknowledged that rigid timelines can unintentionally harm genuine investors. The March 31, 2021 re-lodgement deadline, followed by widespread representations and expert review, ultimately led to the creation of special transfer-cum-demat windows between 2025 and 2027.
                </p>
                <p>
                    For investors holding unresolved physical shares from the pre-2019 era, these windows offer a rare and possibly final opportunity to convert dormant paper certificates into active electronic assets. Timely action, complete documentation, and procedural compliance are now essential. In today&apos;s securities market, dematerialisation is not merely a convenience &mdash; it is the gateway to enforceable ownership.
                </p>
            </>
        )
    }
];

export const faqs = [
    {
        question: "What is the fee structure for your services?",
        answer: "We believe in transparency. Our fees are generally success-based or fixed depending on the service (e.g., consultation vs. recovery). Contact us for a detailed quote tailored to your case."
    },
    {
        question: "Do you handle cases from all over India?",
        answer: "Yes, we serve clients globally who have investments in Indian companies. The entire process is managed remotely with minimal physical presence required."
    },
    {
        question: "Is my data safe with Folio First?",
        answer: "Absolutely. We adhere to strict data privacy policies. Your financial documents are handled with complete confidentiality and used solely for the purpose of the service engagement."
    },
    {
        question: "How do I check if my shares are in IEPF?",
        answer: "You can check on the official IEPF website or share your folio details with us, and we will generate a free status report for you."
    }
];
