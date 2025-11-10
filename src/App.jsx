import "./App.css";

import HomePage from "./Pages/Home";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TestimonialsSection from "./components/Testomonials";
import { GetInTouch } from "./components/GetInTouch";
import Footer from "./components/Footer";
import CareerSection from "./components/CareerSection";
import OurServices from "./components/OurServices";
import TechStackCarousel from "./components/TechStackCarousel";
import CloudIdentityHero from "./components/CloudIdentityHero";
import TechIntroSection from "./components/TechIntroSection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className=" mx-auto">
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
