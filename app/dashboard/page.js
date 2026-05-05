// app/dashboard/page.js
"use client";

import Head from "next/head";
import DashboardContent from "@/components/Dashboard/DashboardContent";

export default function Dashboard() {
  return (
    <>
      <Head>
        {/* Basic SEO - NO INDEX for user dashboard */}
        <title>My Dashboard | Save Money Faster</title>
        <meta
          name="description"
          content="View your savings progress, track expenses, manage budgets, and monitor your financial goals in your personal dashboard."
        />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />

        {/* No indexing for dashboard */}
        <meta name="robots" content="noarchive, nosnippet, noimageindex" />

        {/* Canonical URL - not needed but included */}
        <link rel="canonical" href="https://yoursite.com/dashboard" />

        {/* Open Graph / Facebook (for user sharing their progress) */}
        <meta
          property="og:title"
          content="My Savings Dashboard | Save Money Faster"
        />
        <meta
          property="og:description"
          content="Track my financial goals and savings progress."
        />
        <meta property="og:url" content="https://yoursite.com/dashboard" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Save Money Faster" />
        <meta
          property="og:image"
          content="https://yoursite.com/dashboard-preview.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="My Savings Dashboard" />
        <meta
          name="twitter:description"
          content="Track my financial progress and savings goals."
        />
        <meta
          name="twitter:image"
          content="https://yoursite.com/dashboard-preview.jpg"
        />

        {/* Security headers for dashboard */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'"
        />

        {/* Prevent caching of sensitive data */}
        <meta
          httpEquiv="Cache-Control"
          content="no-cache, no-store, must-revalidate"
        />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />

        {/* Dashboard viewport */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=yes"
        />
        <meta name="theme-color" content="#4F46E5" />

        {/* JSON-LD for user dashboard (only visible to logged-in users) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "User Dashboard",
              description:
                "Personal financial dashboard for tracking savings and expenses",
              applicationCategory: "FinanceApplication",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              isPartOf: {
                "@type": "WebApplication",
                name: "Save Money Faster",
              },
            }),
          }}
        />
      </Head>

      <DashboardContent />
    </>
  );
}
