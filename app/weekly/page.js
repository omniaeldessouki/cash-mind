// app/dashboard/weekly/page.js
'use client';

import Head from 'next/head';
import WeeklyContent from "../../components/Dashboard/WeeklyContent";

export default function Weekly() {
  return (
    <>
      <Head>
        {/* Basic SEO - NO INDEX for weekly dashboard (private user data) */}
        <title>Weekly Report | My Savings Dashboard</title>
        <meta name="description" content="View your weekly savings report, track weekly expenses, and monitor your short-term financial goals. Analyze your spending habits week by week." />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
        
        {/* No archive or caching */}
        <meta name="robots" content="noarchive, nosnippet, noimageindex" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://yoursite.com/dashboard/weekly" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:title" content="My Weekly Savings Report | Save Money Faster" />
        <meta property="og:description" content="Track my weekly savings progress and daily spending habits." />
        <meta property="og:url" content="https://yoursite.com/dashboard/weekly" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Save Money Faster" />
        <meta property="og:image" content="https://yoursite.com/weekly-report-preview.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Weekly Savings Report - Day by Day Tracking" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Weekly Savings Progress" />
        <meta name="twitter:description" content="Track my weekly savings and daily expenses." />
        <meta name="twitter:image" content="https://yoursite.com/weekly-report-twitter.jpg" />
        
        {/* Security and cache headers for sensitive data */}
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        
        {/* Dashboard viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=yes" />
        <meta name="theme-color" content="#4F46E5" />
        
        {/* JSON-LD for Weekly Report */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Report",
              "name": "Weekly Financial Report",
              "description": "Personal weekly savings and expense report",
              "category": "Weekly Financial Report",
              "reportNumber": `Week ${getCurrentWeekNumber()}`,
              "dateCreated": new Date().toISOString().split('T')[0],
              "creator": {
                "@type": "Organization",
                "name": "Save Money Faster"
              },
              "temporalCoverage": "This week"
            })
          }}
        />
        
        {/* JSON-LD for Daily Spending Tracker */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Weekly Expense Tracker",
              "description": "Track daily expenses and weekly spending patterns",
              "applicationCategory": "FinanceApplication",
              "featureList": [
                "Daily Expense Tracking",
                "Weekly Budget Overview",
                "Day-by-Day Spending Analysis",
                "Weekly Savings Goals"
              ]
            })
          }}
        />
      </Head>
      
      <WeeklyContent />
    </>
  );
}

// Helper function to get current week number
function getCurrentWeekNumber() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 1);
  const days = Math.floor((now - start) / (24 * 60 * 60 * 1000));
  return Math.ceil((days + start.getDay() + 1) / 7);
}