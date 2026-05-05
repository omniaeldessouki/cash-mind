// app/dashboard/monthly/page.js
'use client';

import Head from 'next/head';
import MonthlyContent from "../../components/Dashboard/MonthlyContent";

export default function Monthly() {
  return (
    <>
      <Head>
        {/* Basic SEO - NO INDEX for monthly dashboard (private user data) */}
        <title>Monthly Report | My Savings Dashboard</title>
        <meta name="description" content="View your monthly savings report, track expenses, and analyze your spending habits. See your progress toward financial goals." />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
        
        {/* No archive or caching */}
        <meta name="robots" content="noarchive, nosnippet, noimageindex" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://yoursite.com/dashboard/monthly" />
        
        {/* Open Graph / Facebook (if user wants to share their progress) */}
        <meta property="og:title" content="My Monthly Savings Report | Save Money Faster" />
        <meta property="og:description" content="Track my monthly savings progress and financial goals." />
        <meta property="og:url" content="https://yoursite.com/dashboard/monthly" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Save Money Faster" />
        <meta property="og:image" content="https://yoursite.com/monthly-report-preview.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Monthly Savings Report Chart" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Monthly Savings Progress" />
        <meta name="twitter:description" content="View my monthly savings report and track financial goals." />
        <meta name="twitter:image" content="https://yoursite.com/monthly-report-twitter.jpg" />
        
        {/* Security and cache headers for sensitive data */}
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        
        {/* Dashboard viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=yes" />
        <meta name="theme-color" content="#4F46E5" />
        
        {/* JSON-LD for Monthly Report Page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Report",
              "name": "Monthly Financial Report",
              "description": "Personal monthly savings and expense report",
              "category": "Financial Report",
              "reportNumber": new Date().getMonth() + 1,
              "dateCreated": new Date().toISOString().split('T')[0],
              "creator": {
                "@type": "Organization",
                "name": "Save Money Faster"
              }
            })
          }}
        />
      </Head>
      
      <MonthlyContent />
    </>
  );
}