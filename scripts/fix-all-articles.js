const fs = require('fs');
const path = require('path');

const filepath = path.join(__dirname, '../src/data/static.js');
const raw = fs.readFileSync(filepath, 'utf8');

// Normalize line endings so we can reliably split
const content = raw.replace(/\r\n/g, '\n');
const lines = content.split('\n');

// Find start of articles array and start of faqs array
let articlesLine = -1;
let faqsLine = -1;
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('export const articles = [') && articlesLine === -1) articlesLine = i;
    if (lines[i].includes('export const faqs') && faqsLine === -1) faqsLine = i;
}

if (articlesLine === -1 || faqsLine === -1) {
    console.error(`Could not locate articles (${articlesLine}) or faqs (${faqsLine})`);
    process.exit(1);
}

console.log(`Articles array: line ${articlesLine + 1} → ${faqsLine} (exclusive)`);

// The new articles content (replaces from articlesLine up to but not including faqsLine)
const newArticlesBlock = `export const articles = [
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
        title: "SEBI's Special Windows: Transfer of Shares & Demat",
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
`;

// Splice: keep lines before articlesLine, insert newArticlesBlock, then keep lines from faqsLine onward
const beforeLines = lines.slice(0, articlesLine);
const afterLines = lines.slice(faqsLine);

const newContent = beforeLines.join('\n') + '\n' + newArticlesBlock + '\n' + afterLines.join('\n');

// Write with \r\n to match original Windows endings
fs.writeFileSync(filepath, newContent.replace(/\n/g, '\r\n'), 'utf8');

const finalLines = newContent.split('\n').length;
console.log(`SUCCESS: All 5 articles updated.`);
console.log(`Articles were at lines ${articlesLine + 1} to ${faqsLine}.`);
console.log(`New file has approximately ${finalLines} lines.`);
