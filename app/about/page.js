// app/about.js
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
    <Main>
      <AboutHero />
      <AboutStats />
      <AboutMission />
      <AboutStory />
      <AboutValues />
      <AboutTeam />
      <CTASection />
    </Main>
  );
}
