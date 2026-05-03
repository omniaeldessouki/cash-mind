// app/page.js
import Main from "@/components/Layout/Main";
import Hero from "@/components/HomePage/Hero";
import Features from "@/components/HomePage/Features";
import Testimonials from "@/components/HomePage/Testimonials";
import Preview from "@/components/HomePage/Preview";
import WhySaveMoney from "@/components/HomePage/WhySaveMoney";
import HowToSave from "@/components/HomePage/HowToSave";

export default function Home() {
  return (
    <Main>
      <Hero />
      <Features />
      <Preview />
      <WhySaveMoney />
      <Testimonials />
      {/* <HowToSave /> */}
    </Main>
  );
}
