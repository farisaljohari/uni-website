import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaArrowUp, FaPhone, FaEnvelope } from "react-icons/fa";
import logo from "../assets/logo_UNIVAL.png";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer className="uba-footer" id="contact">
      <div className="footer-content">
        {/* Left Section */}
        <div className="footer-column logo-column">
          <img src={logo} alt="Unival" className="footer-logo" />
          <p className="footer-text">
            At Unival, we advance the pharmaceutical industry through innovative
            solutions, cleanroom turnkey projects, and specialized engineering
            services, ensuring quality, compliance, and operational excellence.
          </p>
         
          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="footer-column">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/services">Our Services</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/team">Our Team</Link>
            </li>
            <li>
              <Link to="/quality">Quality</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Right Section - Contact Form */}
        <div className="footer-column form-column">
          <h4 className="footer-heading">Have any query?</h4>
          <form className="footer-form">
            <div className="form-row">
              <input type="text" placeholder="First Name *" required />
              <input type="text" placeholder="Last Name *" required />
              <input type="text" placeholder="Company *" required />
            </div>
            <div className="form-row">
              <input type="email" placeholder="Email *" required />
              <input type="text" placeholder="Phone/Mobile *" required />
            </div>
            <textarea placeholder="Your Message *" required></textarea>
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="footer-bottom">
        <p>
          Copyright © {new Date().getFullYear()} All Rights Reserved |
          <strong> UniJO </strong>
        </p>
      </div>
    </footer>

    {/* Scroll to Top Button */}
    <div
      className={`scroll-to-top ${showScrollTop ? "visible" : ""}`}
      onClick={scrollToTop}
      role="button"
      aria-label="Scroll to top"
    >
      <FaArrowUp />
    </div>
    </>
  );
}
