// app/dashboard/yearly/page.js
'use client';

import Head from 'next/head';
import YearlyContent from "../../components/Dashboard/YearlyContent";

export default function Yearly() {
  const currentYear = new Date().getFullYear();
  
  return (
    <>
      <Head>
        {/* Basic SEO - NO INDEX for yearly dashboard (private user data) */}
        <title>Yearly Report {currentYear} | My Savings Dashboard</title>
        <meta name="description" content={`View your ${currentYear} yearly savings report, track annual spending trends, analyze long-term financial progress, and review your yearly financial goals.`} />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
        
        {/* No archive or caching */}
        <meta name="robots" content="noarchive, nosnippet, noimageindex" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://yoursite.com/dashboard/yearly" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:title" content={`My ${currentYear} Yearly Savings Report | Save Money Faster`} />
        <meta property="og:description" content={`Track my ${currentYear} annual savings progress, year-over-year growth, and long-term financial achievements.`} />
        <meta property="og:url" content="https://yoursite.com/dashboard/yearly" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Save Money Faster" />
        <meta property="og:image" content="https://yoursite.com/yearly-report-preview.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={`${currentYear} Yearly Savings Report - Annual Financial Summary`} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Yearly Savings Report ${currentYear}`} />
        <meta name="twitter:description" content={`Annual financial summary and year-over-year savings progress for ${currentYear}.`} />
        <meta name="twitter:image" content="https://yoursite.com/yearly-report-twitter.jpg" />
        <meta name="twitter:creator" content="@savemoneyfaster" />
        
        {/* Security and cache headers for sensitive data */}
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        
        {/* Dashboard viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=yes" />
        <meta name="theme-color" content="#4F46E5" />
        
        {/* JSON-LD for Yearly Report */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Report",
              "name": `${currentYear} Yearly Financial Report`,
              "description": `Personal annual financial report for ${currentYear} including savings, expenses, and investment growth`,
              "category": "Annual Financial Report",
              "reportNumber": currentYear.toString(),
              "dateCreated": `${currentYear}-12-31`,
              "datePublished": new Date().toISOString().split('T')[0],
              "creator": {
                "@type": "Organization",
                "name": "Save Money Faster",
                "url": "https://yoursite.com"
              },
              "temporalCoverage": `Year ${currentYear}`,
              "keywords": "yearly savings, annual report, financial summary, year in review"
            })
          }}
        />
        
        {/* JSON-LD for Yearly Financial Summary */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialProduct",
              "name": "Yearly Savings Summary",
              "description": "Annual overview of savings progress and financial health",
              "category": "Annual Financial Review",
              "annualPercentageRate": "Variable",
              "feesAndCommissionsSpecification": "No fees for standard accounts"
            })
          }}
        />
        
        {/* JSON-LD for Year Comparison */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "DataCatalog",
              "name": "Year-over-Year Financial Data",
              "description": "Multi-year financial comparison and trend analysis",
              "dataset": [
                {
                  "@type": "Dataset",
                  "name": `${currentYear - 1} Financial Data`,
                  "description": `Previous year (${currentYear - 1}) financial records`
                },
                {
                  "@type": "Dataset",
                  "name": `${currentYear} Financial Data`,
                  "description": `Current year (${currentYear}) financial records`
                }
              ]
            })
          }}
        />
      </Head>
      
      <YearlyContent />
    </>
  );
}