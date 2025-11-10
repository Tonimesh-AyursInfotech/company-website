import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TestimonialsSection from "./components/Testomonials";
// import Navbar from "./components/NavbarOther";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" mx-auto">
      <Navbar />
      <HeroSection />
      <TestimonialsSection />
    </div>
  );
}

export default App;
