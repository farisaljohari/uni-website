import React, { useState } from "react";
import Header from "../components/Header";
import PageHero from "../components/PageHero";
import Footer from "../components/Footer";
import "./Contact.css";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We will get back to you soon.");
    setFormData({
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <>
      <Header />
      <PageHero
        title="Contact Us"
        subtitle="Get in Touch with Our Team"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Contact" },
        ]}
      />

      {/* Contact Information Section */}
      <section className="contact-info-section">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="contact-info-card">
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <h4 className="contact-info-title">Phone</h4>
                <p className="contact-info-text">
                  <a href="tel:0797461628">0797461628</a>
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="contact-info-card">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <h4 className="contact-info-title">Email</h4>
                <p className="contact-info-text">
                  <a href="mailto:info@uni-jo.com">info@uni-jo.com</a>
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="contact-info-card">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <h4 className="contact-info-title">Website</h4>
                <p className="contact-info-text">
                  <a
                    href="http://www.uni-jo.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.uni-jo.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="row">
            {/* Contact Form */}
            <div className="col-lg-7">
              <div className="contact-form-wrapper">
                <h2 className="form-title">Send Us a Message</h2>
                <p className="form-subtitle">
                  Have a question or inquiry? Fill out the form below and we'll
                  get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First Name *"
                        required
                        className="form-input"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last Name *"
                        required
                        className="form-input"
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company *"
                        required
                        className="form-input"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email *"
                        required
                        className="form-input"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone/Mobile *"
                        required
                        className="form-input"
                      />
                    </div>
                    <div className="col-12">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message *"
                        required
                        rows="6"
                        className="form-textarea"
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn-submit">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Additional Information */}
            <div className="col-lg-5">
              <div className="additional-info">
                <h3 className="info-title">Why Contact Us?</h3>
                <div className="info-item">
                  <div className="info-icon">
                    <FaPhone />
                  </div>
                  <div className="info-content">
                    <h5>Quick Response</h5>
                    <p>
                      We aim to respond to all inquiries within 24 hours during
                      business days.
                    </p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <FaEnvelope />
                  </div>
                  <div className="info-content">
                    <h5>Expert Consultation</h5>
                    <p>
                      Our team of experts is ready to provide professional
                      guidance on your projects.
                    </p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="info-content">
                    <h5>Regional Coverage</h5>
                    <p>
                      We serve clients across the Middle East with local
                      support and expertise.
                    </p>
                  </div>
                </div>

                <div className="social-connect">
                  <h4>Connect With Us</h4>
                  <div className="social-links">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional - Placeholder) */}
      <section className="map-section">
        <div className="container-fluid p-0">
          <div className="map-placeholder">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3384.8701896825836!2d35.8721!3d31.9539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDU3JzE0LjAiTiAzNcKwNTInMTkuNiJF!5e0!3m2!1sen!2sjo!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
