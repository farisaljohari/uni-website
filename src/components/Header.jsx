import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <>
      <Navbar
        expand="lg"
        collapseOnSelect
        className={`custom-navbar ${scrolled ? "navbar-scrolled" : ""}`}
        sticky="top"
      >
        <Container>
          {/* Logo */}
          <Navbar.Brand as={Link} to="/" className="custom-brand">
            <div className="logo"></div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Centered Nav Links */}
            <Nav className="mx-auto custom-nav-links">
              <Nav.Link
                as={Link}
                to="/"
                className={`custom-nav-link ${location.pathname === "/" ? "active" : ""}`}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/about"
                className={`custom-nav-link ${location.pathname === "/about" ? "active" : ""}`}
              >
                About
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/services"
                className={`custom-nav-link ${location.pathname === "/services" ? "active" : ""}`}
              >
                Services
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/products"
                className={`custom-nav-link ${location.pathname === "/products" ? "active" : ""}`}
              >
                Products
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/team"
                className={`custom-nav-link ${location.pathname === "/team" ? "active" : ""}`}
              >
                Team
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/quality"
                className={`custom-nav-link ${location.pathname === "/quality" ? "active" : ""}`}
              >
                Quality
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/projects"
                className={`custom-nav-link ${location.pathname === "/projects" ? "active" : ""}`}
              >
                Projects
              </Nav.Link>
            </Nav>

            {/* Right Side Actions */}
            <Nav className="nav-actions">
              <div className="navbar-social-icons">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="navbar-social-link"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="navbar-social-link"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="navbar-social-link"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </div>
              <Link to="/contact" className="btn-contact">
                Get Quote
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
