// app/page.js
import Main from "@/components/Layout/Main";
import Hero from "@/components/HomePage/Hero";
import Features from "@/components/HomePage/Features";
import Testimonials from "@/components/HomePage/Testimonials";
import WhySaveMoney from "@/components/HomePage/WhySaveMoney";
import CTASection from "@/components/HomePage/CTASection";
import HowToSave from "@/components/HomePage/HowToSave";

export default function Home() {
  return (
    <Main>
      <Hero />
      <Features />
      <WhySaveMoney />
      <Testimonials />
      <CTASection />
      {/* <HowToSave /> */}
    </Main>
  );
}
