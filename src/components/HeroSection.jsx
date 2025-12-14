import { useEffect, useState } from "react";
import { BsClipboardCheck } from "react-icons/bs";
import { FaIndustry } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";
import "./HeroSection.css";
import WorldMap from "./WorldMap";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero-section" id="home">
      <div className="hero-background-overlay"></div>
      <div className="container hero-content">
        <div className={`hero-text ${isVisible ? "fade-in" : ""}`}>
          <h1 className="hero-title">
            Engineering Solution for
            <br />
            Pharmaceutical Industry
          </h1>
          <p className="hero-description">
            At UniJO, we deliver cleanroom and turnkey solutions tailored to
            pharmaceutical standards.
          </p>
          <div className="hero-highlights">
            <div className="highlight-card">
              <div className="highlight-icon-wrapper">
                <HiOutlineLightBulb />
              </div>
              <div className="highlight-content">
                <span className="highlight-title">Innovation</span>
                <span className="highlight-subtitle">Creative Solutions</span>
              </div>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon-wrapper">
                <FaIndustry />
              </div>
              <div className="highlight-content">
                <span className="highlight-title">GMP Design</span>
                <span className="highlight-subtitle">Industry Standards</span>
              </div>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon-wrapper">
                <BsClipboardCheck />
              </div>
              <div className="highlight-content">
                <span className="highlight-title">Compliance</span>
                <span className="highlight-subtitle">Quality Assured</span>
              </div>
            </div>
          </div>
        </div>
        <div className={`hero-image ${isVisible ? "fade-in-right" : ""}`}>
          <div className="map-wrapper">
            <WorldMap />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
