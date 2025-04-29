import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/test_lgo2-removebg-preview.png"; // Adjust the path as necessary';
export default function Footer() {
  return (
    <footer className="uba-footer" id="contact">
      <div className="footer-content">
        {/* Left Section */}
        <div className="footer-column logo-column">
          <img src={logo} alt="Unival" className="footer-logo" />
          <p className="footer-text">
            At UNIVAL, we advance the pharmaceutical industry through innovative
            solutions, cleanroom turnkey projects, and specialized engineering
            services, ensuring quality, compliance, and operational excellence.
          </p>
          <div className="footer-socials">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="footer-column">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Our Services</a>
            </li>
            <li>
              <a href="#">Turnkey Projects</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
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
          <strong> UNIVAL </strong>
        </p>
      </div>
    </footer>
  );
}
