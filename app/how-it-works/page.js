import HeroSection from "@/components/how-it-works/HeroSection";
import ProblemSection from "@/components/how-it-works/ProblemSection";
import SolutionSection from "@/components/how-it-works/SolutionSection";
import StepsSection from "@/components/how-it-works/StepsSection";
import BenefitsSection from "@/components/how-it-works/BenefitsSection";
import CTASection from "@/components/HomePage/CTASection";
import Main from "@/components/Layout/Main";

export default function HowItWorksPage() {
  return (
    <>
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
