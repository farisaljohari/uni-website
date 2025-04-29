import React from "react";
import "./HeroSection.css";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaIndustry } from "react-icons/fa";
import { BsClipboardCheck } from "react-icons/bs";
import mapImage from "../assets/map.png";
const HeroSection = () => {
  return (
    <section className="hero-section" id="home">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>
            Advancing the <span>Pharmaceutical Industry</span>
            <br /> through Innovation & Expertise
          </h1>
          <p>
            At UNIVAL, we deliver cleanroom and engineering solutions tailored
            to pharmaceutical standards. From consulting and project design to
            turnkey implementation, we are your partner in success.
          </p>
          <div className="hero-highlights">
            <div className="highlight">
              <HiOutlineLightBulb /> Innovation
            </div>
            <div className="highlight">
              <FaIndustry /> GMP Design
            </div>
            <div className="highlight">
              <BsClipboardCheck /> Compliance
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src={mapImage} alt="UNIVAL Hero" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
