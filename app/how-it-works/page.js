// app/how-it-works/page.js
'use client';

import Head from 'next/head';
import Main from "@/components/Layout/Main";
import HeroSection from "@/components/how-it-works/HeroSection";
import ProblemSection from "@/components/how-it-works/ProblemSection";
import SolutionSection from "@/components/how-it-works/SolutionSection";
import StepsSection from "@/components/how-it-works/StepsSection";
import BenefitsSection from "@/components/how-it-works/BenefitsSection";
import CTASection from "@/components/HomePage/CTASection";

export default function HowItWorksPage() {
  return (
    <>
      <Head>
        {/* Basic SEO */}
        <title>How It Works | Save Money Faster - Simple 3-Step Process</title>
        <meta name="description" content="Learn how Save Money Faster works in 3 simple steps. Start saving money automatically, track your expenses, and achieve your financial goals today." />
        <meta name="keywords" content="how it works, saving money steps, automatic savings, expense tracking, budget planner, financial goals, save money fast" />
        <meta name="author" content="Save Money Faster" />
        <meta name="robots" content="index, follow" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://yoursite.com/how-it-works" />
        
        {/* Open Graph / Facebook & WhatsApp */}
        <meta property="og:title" content="How Save Money Faster Works - Simple 3-Step Process to Financial Freedom" />
        <meta property="og:description" content="Discover our simple 3-step system to save money automatically. Join thousands who've transformed their finances with our proven method." />
        <meta property="og:url" content="https://yoursite.com/how-it-works" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Save Money Faster" />
        <meta property="og:image" content="https://yoursite.com/how-it-works-og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="How Save Money Faster Works - 3 Simple Steps to Start Saving" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How It Works - Save Money Faster in 3 Simple Steps" />
        <meta name="twitter:description" content="See how easy it is to start saving money automatically with our proven 3-step system." />
        <meta name="twitter:image" content="https://yoursite.com/how-it-works-twitter-image.jpg" />
        <meta name="twitter:creator" content="@savemoneyfaster" />
        
        {/* Alternate language versions */}
        <link rel="alternate" href="https://yoursite.com/how-it-works" hrefLang="en" />
        <link rel="alternate" href="https://yoursite.com/ar/how-it-works" hrefLang="ar" />
        
        {/* JSON-LD Structured Data for How-To Page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              "name": "How to Save Money Faster in 3 Simple Steps",
              "description": "A simple step-by-step guide to automatically save money and achieve financial freedom.",
              "step": [
                {
                  "@type": "HowToStep",
                  "name": "Create Your Account",
                  "text": "Sign up for free in less than 2 minutes. No credit card required.",
                  "url": "https://yoursite.com/how-it-works#step1"
                },
                {
                  "@type": "HowToStep",
                  "name": "Connect Your Bank Account",
                  "text": "Securely link your bank account with bank-level encryption.",
                  "url": "https://yoursite.com/how-it-works#step2"
                },
                {
                  "@type": "HowToStep",
                  "name": "Set Your Savings Goals",
                  "text": "Choose how much to save and watch your money grow automatically.",
                  "url": "https://yoursite.com/how-it-works#step3"
                }
              ],
              "totalTime": "P5M",
              "estimatedCost": {
                "@type": "MonetaryAmount",
                "currency": "USD",
                "value": "0"
              }
            })
          }}
        />
        
        {/* JSON-LD for WebApplication with Step-by-Step Guide */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Save Money Faster Platform",
              "description": "Automated savings platform that helps you save money without thinking about it",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web, iOS, Android",
              "featureList": [
                "Automated Savings",
                "Expense Tracking",
                "Budget Planning",
                "Goal Setting",
                "Financial Reports"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "2156"
              }
            })
          }}
        />
        
        {/* JSON-LD for FAQ (if you have questions on this page) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How long does it take to set up?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Setting up your Save Money Faster account takes less than 5 minutes. You can start saving immediately after connecting your bank account."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is my bank information secure?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! We use 256-bit bank-level encryption and never store your banking credentials. Your data is always safe with us."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I withdraw my savings anytime?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely! Your money is always accessible. You can withdraw or transfer your savings at any time with no fees."
                  }
                }
              ]
            })
          }}
        />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Viewport settings */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#4F46E5" />
      </Head>
      
      <Main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <StepsSection />
        <BenefitsSection />
        <CTASection />
      </Main>
    </>
  );
}