import { useState } from "react";
import "./index.css";
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from "./pages/Home";
import Services from './pages/Services';
import Loader from "./components/common/Loader";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import ScrollToTop from "./components/common/ScrollToTop";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetail";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  if (isLoading) {
    return <Loader onComplete={() => setIsLoading(false)} />;
  }


  return (
    <>
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Projects />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;