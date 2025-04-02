import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Products from "./pages/Products";
import Projects from "./pages/Projects";
import Team from "./pages/Team";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";

const App = () => {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0); // Scroll to top on route change
    }, [pathname]);

    return null; // This component doesn’t render anything
  };

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/team" element={<Team />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
