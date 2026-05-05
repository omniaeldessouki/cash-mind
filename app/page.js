  'use client';

  import Head from 'next/head';
  import Main from "@/components/Layout/Main";
  import Hero from "@/components/HomePage/Hero";
  import Features from "@/components/HomePage/Features";
  import Testimonials from "@/components/HomePage/Testimonials";
  import WhySaveMoney from "@/components/HomePage/WhySaveMoney";
  import CTASection from "@/components/HomePage/CTASection";

  export default function Home() {
    return (
      <>
        <Head>
          {/* Everything in one place */}
          <title>Save Money Faster | Smart Financial Tools & Tips</title>
          <meta name="description" content="Discover proven strategies to save money..." />
          <meta property="og:title" content="Save Money Faster" />
          <meta property="og:description" content="Join thousands who've transformed their finances..." />
          <meta name="twitter:card" content="summary_large_image" />
          <link rel="canonical" href="https://yoursite.com" />
          <script src="https://third-party-script.js" />
        </Head>
        
        <Main>
          <Hero />
          <Features />
          <WhySaveMoney />
          <Testimonials />
          <CTASection />
        </Main>
      </>
    );
  }