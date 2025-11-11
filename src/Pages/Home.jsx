import React from "react";
import HeroSection from "../components/HeroSection";
import CloudIdentityHero from "../components/CloudIdentityHero";
import OurServices from "../components/OurServices";
import TechIntroSection from "../components/TechIntroSection";
import TechStackCarousel from "../components/TechStackCarousel";
import TestimonialsSection from "../components/Testomonials";
import CareerSection from "../components/CareerSection";
import { GetInTouch } from "../components/GetInTouch";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <CloudIdentityHero />
      <OurServices />
      <TechIntroSection />
      <TechStackCarousel />
      <TestimonialsSection />
      {/* <CareerSection /> */}
      <GetInTouch />
    </>
  );
};

export default HomePage;
