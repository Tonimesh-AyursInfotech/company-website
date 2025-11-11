import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GetInTouch from "./components/GetInTouch";
import CareerSection from "./components/CareerSection";
import WebDevelopment from "./components/servicess/WebDevelopment";
import AppDevelopmentPage from "./components/servicess/AppDevelopmentPage";
import DataAnalyticsPage from "./components/servicess/DataAnalyticsPage";
import ITTalentAcquisitionPage from "./components/servicess/ITTalentAcquisitionPage";
function App() {
  return (
    <Router>
      <div className="mx-auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contactUs" element={<GetInTouch />} />
          <Route path="/careers" element={<CareerSection />} />
          <Route path="/services-web-devlopment" element={<WebDevelopment />} />
          <Route path="/services-app-devlopment" element={<AppDevelopmentPage />} />
          <Route path="/services-data-analytics" element={<DataAnalyticsPage />} />
          <Route path="/services-it-acquisition" element={<ITTalentAcquisitionPage />} />





        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
