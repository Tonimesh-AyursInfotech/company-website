import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GetInTouch from "./components/GetInTouch";
import CareerSection from "./components/CareerSection";
function App() {
  return (
    <Router>
      <div className="mx-auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contactUs" element={<GetInTouch />} />
          <Route path="/careers" element={<CareerSection />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
