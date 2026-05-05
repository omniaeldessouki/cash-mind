// app/privacy/page.js
"use client";

import Head from "next/head";
import Main from "@/components/Layout/Main";
import styles from "./privacy.module.css";

const privacyData = {
  lastUpdated: "January 1, 2024",
  sections: [
    {
      id: "information",
      title: "1. Information We Collect",
      description: "We collect information that you provide directly to us:",
      items: [
        {
          strong: "Account Information:",
          text: "Name, email address, phone number, and password",
        },
        {
          strong: "Financial Information:",
          text: "Bank account details, transaction history, spending patterns, and savings goals",
        },
        {
          strong: "Profile Information:",
          text: "Profile picture, preferences, and settings",
        },
        {
          strong: "Communication Data:",
          text: "Messages, feedback, and support requests",
        },
        {
          strong: "Usage Data:",
          text: "How you interact with our platform, features used, and time spent",
        },
      ],
    },
    {
      id: "usage",
      title: "2. How We Use Your Information",
      description: "We use your information to:",
      items: [
        "Provide, maintain, and improve our services",
        "Process transactions and track your savings progress",
        "Send you important updates about your account",
        "Analyze usage patterns to enhance user experience",
        "Detect and prevent fraud or security issues",
        "Comply with legal obligations",
        "Personalize your financial insights and recommendations",
      ],
    },
    {
      id: "sharing",
      title: "3. Information Sharing",
      description:
        "We do not sell your personal information. We may share your information in these limited circumstances:",
      items: [
        {
          strong: "Service Providers:",
          text: "Third-party vendors who help us operate our platform",
        },
        {
          strong: "Legal Requirements:",
          text: "When required by law or to protect our rights",
        },
        {
          strong: "Business Transfers:",
          text: "During mergers, acquisitions, or asset sales",
        },
        {
          strong: "With Your Consent:",
          text: "When you explicitly approve sharing",
        },
      ],
      extraText:
        "We use bank-level encryption and never store your banking credentials directly.",
    },
    {
      id: "security",
      title: "4. Data Security",
      description:
        "We implement robust security measures to protect your data:",
      items: [
        "256-bit SSL/TLS encryption for all data transmission",
        "Regular security audits and penetration testing",
        "Multi-factor authentication support",
        "Automated backup systems",
        "Role-based access controls",
        "Real-time threat monitoring",
      ],
    },
    {
      id: "rights",
      title: "5. Your Rights",
      description: "Depending on your location, you may have the right to:",
      items: [
        "Access your personal data",
        "Correct inaccurate information",
        "Delete your account and associated data",
        "Export your data in a portable format",
        "Opt-out of marketing communications",
        "Restrict certain data processing",
      ],
      contactText:
        "To exercise these rights, contact us at privacy@savemoneyfaster.com",
    },
    {
      id: "cookies",
      title: "6. Cookies & Tracking",
      description: "We use cookies and similar technologies to:",
      items: [
        "Remember your login preferences",
        "Analyze site traffic and usage",
        "Personalize your experience",
        "Improve platform performance",
      ],
      extraText:
        "You can control cookies through your browser settings. Disabling cookies may affect some features.",
    },
    {
      id: "children",
      title: "7. Children's Privacy",
      content:
        "Our services are not directed to children under 13. We do not knowingly collect information from children under 13. If you believe a child has provided us with personal information, please contact us.",
    },
    {
      id: "international",
      title: "8. International Data Transfers",
      content:
        "Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers.",
    },
    {
      id: "changes",
      title: "9. Changes to This Policy",
      content:
        "We may update this privacy policy periodically. We will notify you of any material changes via email or platform notification. Continued use of our services constitutes acceptance of updated terms.",
    },
  ],
};

export default function Privacy() {
  const { lastUpdated, sections } = privacyData;

  return (
    <>
      <Head>
        {/* Basic SEO */}
        <title>Privacy Policy | Save Money Faster - Your Data Security</title>
        <meta
          name="description"
          content="Read our privacy policy to understand how Save Money Faster collects, uses, and protects your personal and financial data. Your privacy and security are our top priority."
        />
        <meta
          name="keywords"
          content="privacy policy, data protection, financial data security, privacy, terms of service, data collection"
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://yoursite.com/privacy" />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="Privacy Policy | Save Money Faster"
        />
        <meta
          property="og:description"
          content="Learn how we protect your financial data and respect your privacy."
        />
        <meta property="og:url" content="https://yoursite.com/privacy" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Save Money Faster" />
        <meta
          property="og:image"
          content="https://yoursite.com/privacy-og-image.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Privacy Policy - Save Money Faster"
        />
        <meta
          name="twitter:description"
          content="Your data security and privacy are our priority. Read our full privacy policy."
        />
        <meta
          name="twitter:image"
          content="https://yoursite.com/privacy-twitter-image.jpg"
        />

        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#059669" />

        {/* JSON-LD for Legal Page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              name: "Privacy Policy",
              description:
                "Privacy policy and data protection information for Save Money Faster",
              url: "https://yoursite.com/privacy",
              termsOfService: "https://yoursite.com/terms",
              jurisdiction: "Global",
              legislation: ["GDPR", "CCPA"],
              hasPolicy: {
                "@type": "PrivacyPolicy",
                name: "Save Money Faster Privacy Policy",
                datePublished: "2024-01-01",
                dateModified: "2024-01-01",
              },
            }),
          }}
        />
      </Head>

      <Main>
        <div className={styles.container}>
          <div className={styles.content}>
            {/* Header */}
            <div className={styles.header}>
              <h1 className={styles.title}>Privacy Policy</h1>
              <p className={styles.date}>Last Updated: {lastUpdated}</p>
            </div>

            <div className={styles.body}>
              {sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className={styles.section}
                >
                  <h2 className={styles.sectionTitle}>{section.title}</h2>

                  {section.content && (
                    <p className={styles.sectionText}>{section.content}</p>
                  )}

                  {section.description && (
                    <p className={styles.sectionText}>{section.description}</p>
                  )}

                  {section.items && (
                    <ul className={styles.list}>
                      {section.items.map((item, index) => (
                        <li key={index} className={styles.listItem}>
                          {typeof item === "string" ? (
                            item
                          ) : (
                            <>
                              <strong className={styles.listItemStrong}>
                                {item.strong}
                              </strong>{" "}
                              {item.text}
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.extraText && (
                    <p className={styles.sectionText}>{section.extraText}</p>
                  )}
                </section>
              ))}
            </div>
          </div>
        </div>
      </Main>
    </>
  );
}
