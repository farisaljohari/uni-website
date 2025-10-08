import { useEffect, useState } from "react";
import { BsClipboardCheck } from "react-icons/bs";
import { FaArrowRight, FaIndustry } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";
import { Link } from "react-router-dom";
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
          <div className="hero-badge">
            <span>Welcome to Unival</span>
          </div>
          <h1 className="hero-title">
            Advancing the{" "}
            <span className="highlight-text">Pharmaceutical Industry</span>
            <br /> through Innovation & Expertise
          </h1>
          <p className="hero-description">
            At Unival, we deliver cleanroom and engineering solutions tailored
            to pharmaceutical standards. From consulting and project design to
            turnkey implementation, we are your partner in success.
          </p>
          <div className="hero-highlights">
            <div className="highlight">
              <div className="highlight-icon">
                <HiOutlineLightBulb />
              </div>
              <span>Innovation</span>
            </div>
            <div className="highlight">
              <div className="highlight-icon">
                <FaIndustry />
              </div>
              <span>GMP Design</span>
            </div>
            <div className="highlight">
              <div className="highlight-icon">
                <BsClipboardCheck />
              </div>
              <span>Compliance</span>
            </div>
          </div>
          <div className="hero-cta-buttons">
            <Link to="/contact" className="btn-hero-primary">
              Get Started <FaArrowRight />
            </Link>
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
