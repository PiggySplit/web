import type { Translations } from "./types";

const PRIVACY_EMAIL = "privacy@piggysplit.app";
const LEGAL_EMAIL = "legal@piggysplit.app";

const a = (email: string) =>
  `<a href="mailto:${email}">${email}</a>`;

export const en: Translations = {
  nav: {
    features: "Features",
    howItWorks: "How it works",
    download: "Download",
    getApp: "Get the app",
    iosLabel: "Download for iOS",
    androidLabel: "Download for Android",
  },
  footer: {
    tagline:
      "The simplest way to split expenses with friends and groups. No awkward money conversations. Just clear records and clean settlements.",
    product: "Product",
    legal: "Legal",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    support: "Support",
    madeWith: "Made with 🐷 for everyone who splits bills",
    allRights: "All rights reserved.",
  },
  hero: {
    badge: "Now available on iOS & Android",
    headline: "Split the bill.",
    headlineGradient: "Not the friendship.",
    subheadline: "Shared wallets, smart splits, payment proof. No more chasing people for money or awkward \"who paid last time\" moments.",
    iosButton: "Download for iOS",
    androidButton: "Download for Android",
    socialProof: "Join friends already splitting smarter",
    card1Text: "Payment confirmed!",
    card1Sub: "Sarah paid $24",
    card2Text: "New split request",
    card2Sub: "Dinner — $15.50",
  },
  features: {
    badge: "Everything you need",
    headline: "Built for how people",
    headlineGradient: "actually",
    headlineSuffix: "spend",
    subtitle: "Every feature exists to remove friction from shared money. No bloat, no confusion.",
    items: [
      {
        title: "Shared Wallets",
        headline: "One wallet, everyone in sync.",
        description: "Create group wallets for trips, rent, or anything with multiple people. Every member sees every transaction in real time.",
      },
      {
        title: "Smart Splits",
        headline: "Even splits or go custom. You decide.",
        description: "Split any expense equally or by custom amounts. Assign splits to specific people. No mental math.",
      },
      {
        title: "Payment Proof",
        headline: "No more 'I thought you paid'.",
        description: "Submit a screenshot or photo as payment proof. The payer confirms, the record is locked. No disputes.",
      },
      {
        title: "Friends System",
        headline: "Your squad, connected.",
        description: "Add friends by username, email, or share your profile link. Send split requests instantly to people you trust.",
      },
      {
        title: "Spending Analytics",
        headline: "See where it all goes.",
        description: "Category breakdowns, monthly trends, and balance summaries. Know your numbers without opening a spreadsheet.",
      },
      {
        title: "Recurring Transactions",
        headline: "Set it. Forget it. Track it.",
        description: "Rent, subscriptions, weekly dinners. Set a frequency and PiggySplit logs it automatically on schedule.",
      },
    ],
  },
  howItWorks: {
    badge: "Simple as 1-2-3",
    headline: "From \"who paid?\" to",
    headlineGradient: "\"all settled\"",
    subtitle: "Three steps. No spreadsheets. No confusion.",
    ctaButton: "Start splitting smarter",
    steps: [
      {
        title: "Create a shared wallet",
        description: "Start a wallet for any occasion — a trip, shared rent, team lunch. Invite members by username or share a link.",
      },
      {
        title: "Log expenses & split",
        description: "Add any expense and split it evenly or by custom amounts. Assign who pays what with zero mental math.",
      },
      {
        title: "Settle up with proof",
        description: "Upload payment proof. The other person confirms. The transaction is locked. Everyone moves on.",
      },
    ],
  },
  screenshots: {
    badge: "Real app, real screens",
    headline: "Designed to feel",
    headlineGradient: "effortless",
    subtitle: "Clean, warm, and fast. Every screen built around getting you in and out without friction.",
    screens: [
      {
        tag: "Analytics",
        headline: "See where it all goes.",
        description: "Balance, income, expenses — all on the home screen. Category charts and monthly trends built in.",
        bullets: ["Category pie chart", "Monthly trend line", "Income vs expense view"],
      },
      {
        tag: "Shared Wallets",
        headline: "One wallet, everyone in sync.",
        description: "Every member sees every transaction. Filter by status, pull to refresh, settle in one tap.",
        bullets: ["Filter by pending/settled", "Real-time member updates", "CSV export anytime"],
      },
      {
        tag: "Friends",
        headline: "Your squad, connected.",
        description: "Add by username or share your link. Requests, accepted friends, and quick profile sharing.",
        bullets: ["Search by email or username", "Share your profile link", "Accept or decline requests"],
      },
    ],
  },
  downloadCta: {
    badge: "Free to download",
    headline: "Ready to stop chasing",
    headlineGradient: "people for money?",
    subtitle: "Download PiggySplit and start your first shared wallet in under a minute.",
    iosLabel1: "Download on the",
    iosLabel2: "App Store",
    androidLabel1: "Get it on",
    androidLabel2: "Google Play",
    stats: [
      { value: "Free", label: "Always free to use" },
      { value: "iOS + Android", label: "Both platforms" },
      { value: "EN + 中文", label: "Bilingual support" },
    ],
  },
  privacyPolicy: {
    badge: "Legal",
    title: "Privacy Policy",
    lastUpdated: "Last updated: April 12, 2026",
    sections: [
      {
        title: "1. Introduction",
        blocks: [
          {
            type: "p",
            html: `PiggySplit ("we", "our", or "us") operates the PiggySplit mobile application (the "Service"). This Privacy Policy explains what personal information we collect, how we use and protect it, and the choices you have regarding your data.`,
          },
          {
            type: "p",
            html: `By creating an account or using the Service, you acknowledge that you have read and agree to this Privacy Policy. If you do not agree, please do not use the Service.`,
          },
        ],
      },
      {
        title: "2. Information We Collect",
        blocks: [
          { type: "h4", text: "2.1 Account Information" },
          {
            type: "p",
            html: `When you register, we collect your username, email address, and a password. Your password is stored in a protected form and is never accessible in plaintext by anyone, including our team.`,
          },
          { type: "h4", text: "2.2 Financial Activity Data" },
          {
            type: "p",
            html: `To deliver the core expense-splitting functionality, we collect and store the financial records you create, including transaction amounts, currencies, descriptions, categories, dates, and any split arrangements you configure with other users. We also store settlement records and any payment notes associated with those transactions.`,
          },
          { type: "h4", text: "2.3 User-Uploaded Media" },
          {
            type: "p",
            html: `You may choose to attach photos or other media files to transactions (as receipts), to settlement records (as payment confirmation), or to support messages. These files are uploaded to and stored on our behalf by a third-party cloud storage provider. We do not collect this content passively — it is submitted only through your deliberate action.`,
          },
          {
            type: "p",
            html: `To enable file selection, the app requests access to your device's <strong>photo library</strong>. The app does not access your camera. Permission is requested only at the time you choose to attach a file, and you may revoke it at any time through your device settings.`,
          },
          { type: "h4", text: "2.4 Social and Relationship Data" },
          {
            type: "p",
            html: `We store the connections you form within the Service: friend relationships, wallet memberships, and invitation history. This information is necessary to enable shared wallets and collaborative expense tracking.`,
          },
          { type: "h4", text: "2.5 Support Communications" },
          {
            type: "p",
            html: `When you contact our support team through the app, we retain the content of your support tickets, any files you attach, and our replies. This record is kept to ensure continuity of support and to resolve any ongoing issues.`,
          },
          { type: "h4", text: "2.6 Technical and Usage Data" },
          {
            type: "p",
            html: `We collect limited operational data — such as request logs and error events — for the purpose of maintaining service reliability and diagnosing issues. This data is used internally and does not include the content of your transactions or personal communications.`,
          },
          {
            type: "p",
            html: `Your device's language setting is read locally to display the app in your preferred language. This information is not transmitted to our servers.`,
          },
        ],
      },
      {
        title: "3. How We Use Your Information",
        blocks: [
          { type: "p", html: "We use the information we collect to:" },
          {
            type: "ul",
            items: [
              "Create and manage your account, and authenticate your identity",
              "Provide and operate the expense-tracking and split-settlement features of the Service",
              "Enable shared wallets and collaboration between users you choose to connect with",
              "Deliver in-app notifications about activity relevant to you, such as friend requests, wallet invitations, and transaction updates",
              "Send transactional emails, specifically password reset communications initiated by you",
              "Respond to your support requests",
              "Detect, investigate, and prevent fraudulent activity, abuse, or violations of our Terms of Service",
              "Maintain and improve the reliability of the Service",
            ],
          },
          {
            type: "p",
            html: `We do not sell your personal information to any third party. We do not use your data for advertising purposes. We do not share your data with analytics providers or use behavioural tracking tools.`,
          },
        ],
      },
      {
        title: "4. Information Shared With Other Users",
        blocks: [
          {
            type: "p",
            html: "Certain information is visible to other users as part of how the Service works. Specifically:",
          },
          {
            type: "ul",
            items: [
              "<strong>Friends</strong> — users you have connected with can see your username and email address. No financial information is shared at the friendship level.",
              "<strong>Shared wallet members</strong> — all members of a shared wallet can see the transactions recorded in that wallet, including amounts, descriptions, and the identity of the member who logged each entry. This visibility is fundamental to the shared expense-tracking purpose of the Service.",
              "<strong>Payment confirmation</strong> — when you submit a media file as payment proof, the other party in that transaction can view it to confirm the settlement.",
            ],
          },
          {
            type: "p",
            html: `No financial data, transaction history, or private wallet content is ever visible to users who are not members of the relevant wallet. Your support ticket communications are visible only to you and to authorised PiggySplit staff.`,
          },
        ],
      },
      {
        title: "5. Third-Party Service Providers",
        blocks: [
          {
            type: "p",
            html: `We engage trusted third-party service providers to help us operate the Service. These providers act on our instructions and are permitted to use your data only to the extent necessary to provide their services to us. They include:`,
          },
          {
            type: "ul",
            items: [
              "<strong>Cloud storage</strong> — for secure storage of media files you upload, including receipts, payment proofs, and support attachments",
              "<strong>Email delivery</strong> — for sending password reset communications to your registered email address",
              "<strong>Infrastructure providers</strong> — for hosting our database and related services in a secure environment",
            ],
          },
          {
            type: "p",
            html: `We do not use advertising networks, behavioural analytics services, or crash-reporting tools that transmit your personal data to third parties. We do not use push notification services; all notifications within the Service are delivered in-app.`,
          },
        ],
      },
      {
        title: "6. Data Retention",
        blocks: [
          {
            type: "p",
            html: `We retain your personal information for as long as your account is active and for a reasonable period thereafter as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.`,
          },
          {
            type: "p",
            html: `When you delete your account, your profile is deactivated and you will no longer be able to access the Service. However, certain records — in particular, transaction histories and wallet data that are shared with and relied upon by other users — may be retained to preserve the integrity of those users' records. Where your identity is visible within retained records, we will seek to anonymise it where practicable.`,
          },
          {
            type: "p",
            html: `If you wish to request full erasure of your personal data, please contact us at ${a(PRIVACY_EMAIL)}. We will assess each request in accordance with applicable privacy law. We may be unable to delete certain records where doing so would deprive other users of their own financial history.`,
          },
          {
            type: "p",
            html: `Media files you have uploaded are retained for the lifetime of the associated record. Temporary data generated by account security features, such as password reset codes, is deleted automatically upon use or expiry.`,
          },
        ],
      },
      {
        title: "7. Security",
        blocks: [
          {
            type: "p",
            html: `We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, loss, or misuse. These measures include encrypted storage of credentials, encrypted transmission of data in transit, secure storage of authentication credentials on your device, and access controls that restrict data visibility to users with a legitimate need.`,
          },
          {
            type: "p",
            html: `No method of electronic transmission or storage is completely secure. While we strive to protect your data, we cannot guarantee absolute security. If you believe your account has been compromised, please contact us immediately at ${a(PRIVACY_EMAIL)}.`,
          },
        ],
      },
      {
        title: "8. Your Rights and Choices",
        blocks: [
          { type: "p", html: "Subject to applicable law, you may have the right to:" },
          {
            type: "ul",
            items: [
              "<strong>Access</strong> — request information about the personal data we hold about you",
              "<strong>Correction</strong> — update your account information through the app",
              `<strong>Deletion</strong> — request removal of your account and associated personal data (see Section 6)`,
              "<strong>Portability</strong> — export your wallet transaction history in CSV format using the in-app export feature",
              "<strong>Objection</strong> — object to certain uses of your personal data",
            ],
          },
          {
            type: "p",
            html: `To exercise any right that is not available directly within the app, please contact us at ${a(PRIVACY_EMAIL)}. We will respond within 30 days.`,
          },
        ],
      },
      {
        title: "9. Children's Privacy",
        blocks: [
          {
            type: "p",
            html: `The Service is not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13. If you become aware that a child under 13 has registered an account, please contact us at ${a(PRIVACY_EMAIL)} and we will take steps to remove that account and its associated data promptly.`,
          },
        ],
      },
      {
        title: "10. Changes to This Policy",
        blocks: [
          {
            type: "p",
            html: `We may revise this Privacy Policy from time to time to reflect changes in our practices or applicable law. We will indicate the date of the most recent update at the top of this page. Where changes are material, we will provide additional notice within the app. Your continued use of the Service following any update constitutes your acceptance of the revised Policy.`,
          },
        ],
      },
      {
        title: "11. Contact Us",
        blocks: [
          {
            type: "p",
            html: `For any questions, concerns, or requests relating to this Privacy Policy or the handling of your personal information, please contact us at:`,
          },
          { type: "p", html: `<strong>Email:</strong> ${a(PRIVACY_EMAIL)}` },
        ],
      },
    ],
  },
  terms: {
    badge: "Legal",
    title: "Terms of Service",
    lastUpdated: "Last updated: April 12, 2026",
    sections: [
      {
        title: "1. Acceptance of Terms",
        blocks: [
          {
            type: "p",
            html: `These Terms of Service ("Terms") govern your access to and use of the PiggySplit mobile application and any associated services (collectively, the "Service") provided by PiggySplit ("we", "our", or "us").`,
          },
          {
            type: "p",
            html: `By downloading, installing, or using the Service, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you must not use the Service.`,
          },
          {
            type: "p",
            html: `We reserve the right to modify these Terms at any time. We will indicate the date of the most recent revision at the top of this page. Your continued use of the Service following any modification constitutes acceptance of the revised Terms.`,
          },
        ],
      },
      {
        title: "2. The Service",
        blocks: [
          {
            type: "p",
            html: `PiggySplit is a personal finance and expense-coordination application. It enables individuals to record personal income and expenditure, create shared wallets with other users, split expenses between group members, and manage the settlement of shared costs. The Service includes an in-app support channel for communicating with our team.`,
          },
          {
            type: "p",
            html: `<strong>PiggySplit is a record-keeping and coordination tool. It is not a bank, payment institution, money transmitter, or regulated financial service.</strong> We do not hold, transfer, process, or guarantee any funds on your behalf. Any transfer of money between users takes place entirely outside the Service through channels of their own choosing. We are not a party to, and accept no responsibility for, any financial transaction that occurs between users.`,
          },
        ],
      },
      {
        title: "3. Eligibility and Account Registration",
        blocks: [
          { type: "p", html: "To use the Service, you must:" },
          {
            type: "ul",
            items: [
              "Be at least 13 years of age, or the minimum age required by the laws of your jurisdiction, whichever is greater",
              "Register with a valid email address and create a username",
              "Provide accurate, current, and complete registration information",
            ],
          },
          {
            type: "p",
            html: `You are solely responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. You must notify us promptly at ${a(LEGAL_EMAIL)} if you suspect any unauthorised use of your account. We will not be liable for any loss arising from your failure to safeguard your credentials.`,
          },
          {
            type: "p",
            html: `You may not register on behalf of another person or create accounts for automated or non-human use without our prior written consent.`,
          },
        ],
      },
      {
        title: "4. Acceptable Use",
        blocks: [
          {
            type: "p",
            html: `You agree to use the Service only for lawful purposes and in a manner that does not infringe the rights of others or restrict their use and enjoyment of the Service. Without limitation, you must not:`,
          },
          {
            type: "ul",
            items: [
              "Submit false, fabricated, or misleading transaction records or financial information",
              "Use the Service to harass, threaten, defame, or otherwise harm any other user",
              "Attempt to gain unauthorised access to any account, system, or network associated with the Service",
              "Circumvent, disable, or interfere with security or access-control features of the Service",
              "Use automated means to access or interact with the Service without our express written permission",
              "Upload or transmit malicious code, viruses, or any content intended to cause harm or disruption",
              "Impersonate any person or misrepresent your affiliation with any entity",
              "Use the Service in any jurisdiction where doing so is prohibited by applicable law",
            ],
          },
          {
            type: "p",
            html: `We reserve the right to investigate suspected violations of these Terms and to suspend or terminate accounts involved in such conduct, with or without prior notice.`,
          },
        ],
      },
      {
        title: "5. Wallets and Shared Expenses",
        blocks: [
          {
            type: "p",
            html: `The Service allows you to create personal wallets for individual expense tracking and shared wallets for collaborative expense management with other users.`,
          },
          {
            type: "p",
            html: `<strong>Personal wallets</strong> are private to your account. No other user can view the contents of your personal wallet.`,
          },
          {
            type: "p",
            html: `<strong>Shared wallets</strong> are visible to all members you invite and who accept membership. By creating a shared wallet and inviting other users, or by accepting an invitation to join one, you acknowledge and agree that all members of that wallet will have visibility into the transactions recorded within it, including amounts, descriptions, categories, and the identity of the member who created each entry.`,
          },
          {
            type: "p",
            html: `The Service includes mechanisms for members to acknowledge, dispute, and settle shared expense records. Where a dispute arises between users, PiggySplit does not adjudicate, mediate, or resolve such disputes. Any financial resolution is a matter exclusively between the parties involved.`,
          },
          {
            type: "p",
            html: `Wallet owners and administrators may manage membership, including inviting, removing, and adjusting the roles of other members. You are responsible for maintaining the accuracy of the records you enter and for reviewing any recurring transactions you have configured.`,
          },
        ],
      },
      {
        title: "6. User Content",
        blocks: [
          {
            type: "p",
            html: `The Service allows you to submit content, including transaction descriptions, notes, and media files such as receipts and payment confirmations ("User Content").`,
          },
          {
            type: "p",
            html: `You retain ownership of your User Content. By submitting User Content, you grant PiggySplit a limited, non-exclusive, royalty-free licence to store, process, and display that content solely to the extent necessary to operate the Service and make it available to users who are authorised to see it.`,
          },
          {
            type: "p",
            html: `You are solely responsible for the User Content you submit. You represent and warrant that: (a) you have the right to submit the content; (b) the content does not infringe any third-party intellectual property, privacy, or other rights; and (c) the content does not violate any applicable law or these Terms.`,
          },
          {
            type: "p",
            html: `You must not upload content that is illegal, obscene, defamatory, abusive, or otherwise objectionable. We reserve the right to remove any User Content that violates these Terms.`,
          },
          {
            type: "p",
            html: `To enable file attachments, the app may request permission to access your device's photo library. This permission is optional — its refusal will limit the media attachment feature but will not affect core Service functionality. The app does not access your camera.`,
          },
        ],
      },
      {
        title: "7. Financial Disclaimer",
        blocks: [
          {
            type: "p",
            html: `All balances, amounts owed, and financial summaries displayed within the Service are derived solely from data you and other users enter manually. PiggySplit does not verify, audit, or guarantee the accuracy of any such information.`,
          },
          {
            type: "p",
            html: `Figures displayed within the Service do not constitute legally binding financial records, evidence of debt, or proof of payment for any purpose under any applicable law. PiggySplit accepts no liability for financial loss, disputes between users, or decisions made in reliance on information displayed within the Service.`,
          },
        ],
      },
      {
        title: "8. Account Suspension and Termination",
        blocks: [
          {
            type: "p",
            html: `You may deactivate your account at any time through the app. Upon deactivation, your access to the Service will cease. As described in our Privacy Policy, certain records associated with your account may be retained to preserve the integrity of shared data that other users rely upon.`,
          },
          {
            type: "p",
            html: `We may suspend or terminate your access to the Service at any time, with or without notice, if we reasonably believe you have violated these Terms, engaged in fraudulent or unlawful activity, or if continued access would pose a risk to the Service or other users. We may also discontinue inactive accounts following reasonable notice.`,
          },
          {
            type: "p",
            html: `Upon termination for any reason, provisions of these Terms that by their nature should survive will continue to apply, including but not limited to Sections 4, 6, 7, 9, 10, and 11.`,
          },
        ],
      },
      {
        title: "9. Intellectual Property",
        blocks: [
          {
            type: "p",
            html: `The Service, including its name, logo, design, software, and all content not submitted by users, is the proprietary property of PiggySplit and is protected by applicable intellectual property laws. Nothing in these Terms grants you any right, title, or interest in the Service beyond the limited licence to use it in accordance with these Terms.`,
          },
          {
            type: "p",
            html: `You may not copy, reproduce, modify, distribute, publicly display, reverse-engineer, or create derivative works of any part of the Service without our prior written consent.`,
          },
        ],
      },
      {
        title: "10. Disclaimers",
        blocks: [
          {
            type: "p",
            html: `THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTY OF ANY KIND. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, ACCURACY, AND NON-INFRINGEMENT.`,
          },
          {
            type: "p",
            html: `WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE FROM HARMFUL COMPONENTS, OR THAT ANY DEFECTS WILL BE CORRECTED. YOUR USE OF THE SERVICE IS AT YOUR OWN RISK.`,
          },
        ],
      },
      {
        title: "11. Limitation of Liability",
        blocks: [
          {
            type: "p",
            html: `TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, PIGGYSPLIT AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES OF ANY KIND, INCLUDING LOSS OF DATA, LOSS OF REVENUE, FINANCIAL DISPUTES BETWEEN USERS, OR LOSS OF GOODWILL, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF OR INABILITY TO USE THE SERVICE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.`,
          },
          {
            type: "p",
            html: `TO THE EXTENT THAT LIABILITY CANNOT BE EXCLUDED, OUR TOTAL AGGREGATE LIABILITY TO YOU FOR ANY CLAIM ARISING UNDER OR IN CONNECTION WITH THESE TERMS SHALL NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU HAVE PAID US IN THE TWELVE MONTHS PRECEDING THE CLAIM, OR (B) ONE HUNDRED DOLLARS (USD $100).`,
          },
        ],
      },
      {
        title: "12. Governing Law and Disputes",
        blocks: [
          {
            type: "p",
            html: `These Terms are governed by and construed in accordance with applicable law. Any dispute arising out of or relating to these Terms or the Service that cannot be resolved by informal negotiation between the parties shall be subject to the exclusive jurisdiction of the courts or arbitration bodies competent to hear such matters under applicable law.`,
          },
          {
            type: "p",
            html: `We encourage you to contact us in the first instance at ${a(LEGAL_EMAIL)} to seek an informal resolution before initiating any formal proceedings.`,
          },
        ],
      },
      {
        title: "13. General Provisions",
        blocks: [
          {
            type: "p",
            html: `<strong>Entire agreement.</strong> These Terms, together with our Privacy Policy, constitute the entire agreement between you and PiggySplit with respect to the Service and supersede all prior agreements and understandings.`,
          },
          {
            type: "p",
            html: `<strong>Severability.</strong> If any provision of these Terms is found to be invalid or unenforceable, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will continue in full force and effect.`,
          },
          {
            type: "p",
            html: `<strong>No waiver.</strong> Our failure to enforce any right or provision of these Terms will not be deemed a waiver of that right or provision.`,
          },
          {
            type: "p",
            html: `<strong>Assignment.</strong> You may not assign or transfer your rights or obligations under these Terms without our prior written consent. We may assign our rights and obligations without restriction.`,
          },
        ],
      },
      {
        title: "14. Contact",
        blocks: [
          {
            type: "p",
            html: `For questions or concerns regarding these Terms, please contact us at:`,
          },
          { type: "p", html: `<strong>Email:</strong> ${a(LEGAL_EMAIL)}` },
        ],
      },
    ],
  },
};
