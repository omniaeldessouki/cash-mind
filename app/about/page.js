// app/about.js
'use client';

import Head from 'next/head';
import Main from "@/components/Layout/Main";
import AboutHero from "@/components/About/AboutHero";
import AboutMission from "@/components/About/AboutMission";
import AboutStory from "@/components/About/AboutStory";
import AboutValues from "@/components/About/AboutValues";
import AboutTeam from "@/components/About/AboutTeam";
import AboutStats from "@/components/About/AboutStats";
import CTASection from "@/components/HomePage/CTASection";

export default function About() {
  return (
    <>
      <Head>
        {/* Basic SEO */}
        <title>About Us | Save Money Faster - Our Story & Mission</title>
        <meta name="description" content="Learn about Save Money Faster's mission to help people achieve financial freedom through smart saving tools and proven strategies." />
        <meta name="keywords" content="about us, financial freedom mission, money saving team, financial literacy, our story" />
        <meta name="author" content="Save Money Faster" />
        <meta name="robots" content="index, follow" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://yoursite.com/about" />
        
        {/* Open Graph / Facebook & WhatsApp */}
        <meta property="og:title" content="About Save Money Faster - Our Mission for Your Financial Freedom" />
        <meta property="og:description" content="We're on a mission to help millions save money smarter and achieve financial independence. Meet our team and learn our story." />
        <meta property="og:url" content="https://yoursite.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Save Money Faster" />
        <meta property="og:image" content="https://yoursite.com/about-og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Save Money Faster Team - Helping You Save Money" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Save Money Faster - Our Mission" />
        <meta name="twitter:description" content="Learn about our mission to help people save money and achieve financial freedom." />
        <meta name="twitter:image" content="https://yoursite.com/about-twitter-image.jpg" />
        <meta name="twitter:creator" content="@savemoneyfaster" />
        
        {/* Alternate language versions */}
        <link rel="alternate" href="https://yoursite.com/about" hrefLang="en" />
        <link rel="alternate" href="https://yoursite.com/ar/about" hrefLang="ar" />
        
        {/* JSON-LD Structured Data for About Page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "name": "About Save Money Faster",
              "description": "Learn about our mission to help people achieve financial freedom through smart saving tools.",
              "url": "https://yoursite.com/about",
              "mainEntity": {
                "@type": "Organization",
                "name": "Save Money Faster",
                "foundingDate": "2020",
                "foundingLocation": "United States",
                "mission": "To help millions achieve financial freedom through accessible saving tools and education",
                "numberOfEmployees": {
                  "@type": "QuantitativeValue",
                  "value": "25"
                }
              }
            })
          }}
        />
        
        {/* JSON-LD for Company/Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Save Money Faster",
              "url": "https://yoursite.com",
              "logo": "https://yoursite.com/logo.png",
              "sameAs": [
                "https://www.facebook.com/savemoneyfaster",
                "https://twitter.com/savemoneyfaster",
                "https://www.instagram.com/savemoneyfaster",
                "https://www.linkedin.com/company/savemoneyfaster"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "hello@savemoneyfaster.com",
                "contactType": "customer service",
                "availableLanguage": ["English", "Arabic"]
              }
            })
          }}
        />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      
      <Main>
        <AboutHero />
        <AboutStats />
        <AboutMission />
        <AboutStory />
        <AboutValues />
        <AboutTeam />
        <CTASection />
      </Main>
    </>
  );
}