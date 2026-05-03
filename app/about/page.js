// app/about.js
import Main from "@/components/Layout/Main";
import AboutHero from "@/components/About/AboutHero";
import AboutMission from "@/components/About/AboutMission";
import AboutStory from "@/components/About/AboutStory";
import AboutValues from "@/components/About/AboutValues";
import AboutTeam from "@/components/About/AboutTeam";
import AboutStats from "@/components/About/AboutStats";
import AboutCTA from "@/components/About/AboutCTA";

export default function About() {
  return (
    <Main>
      <AboutHero />
      <AboutStats />
      <AboutMission />
      <AboutStory />
      <AboutValues />
      <AboutTeam />
      <AboutCTA />
    </Main>
  );
}
