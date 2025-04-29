import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css"; // Your updated CSS
import {
  FaSearch,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Header = () => {
  return (
    <>
      {/* Top Mini Bar */}
      <div className="bg-dark-blue text-white py-2 small">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="text-end">ADVANCING THE PHARMACEUTICAL INDUSTRY</div>

          <div className="d-flex gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <Navbar expand="lg" collapseOnSelect className="custom-navbar">
        <Container>
          {/* Logo */}
          <Navbar.Brand href="#home" className="custom-brand">
            <div className="logo"></div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Centered Nav Links */}
            <Nav className="mx-auto custom-nav-links">
              <Nav.Link href="#home" className="custom-nav-link">
                Home
              </Nav.Link>
              <Nav.Link href="#about" className="custom-nav-link">
                About Us
              </Nav.Link>
              <Nav.Link href="#services" className="custom-nav-link">
                Services
              </Nav.Link>
              <Nav.Link href="#journey" className="custom-nav-link">
                Journey
              </Nav.Link>
              <Nav.Link href="#contact" className="custom-nav-link">
                Contact
              </Nav.Link>
            </Nav>

            {/* Right side search icon */}
            <Nav className="custom-search-icon">
              <div className="search-icon">
                <FaSearch size={20} />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
