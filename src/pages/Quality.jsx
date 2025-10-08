import React from "react";
import Header from "../components/Header";
import PageHero from "../components/PageHero";
import Footer from "../components/Footer";
import "./Quality.css";
import {
  FaCertificate,
  FaCheckCircle,
  FaFileAlt,
  FaUserGraduate,
  FaClipboardCheck,
  FaSearchPlus,
} from "react-icons/fa";

const Quality = () => {
  const certifications = [
    {
      name: "ISO 9001",
      status: "Certified / Candidate",
      description: "Quality Management Systems",
      icon: <FaCertificate />,
    },
    {
      name: "ISO 17025",
      status: "Certified / Candidate",
      description: "Testing and Calibration Laboratories",
      icon: <FaCertificate />,
    },
    {
      name: "ISO 45001",
      status: "Certified",
      description: "Occupational Health and Safety Management",
      icon: <FaCertificate />,
    },
    {
      name: "ISO 13485",
      status: "Trained",
      description: "Medical Devices Quality Management",
      icon: <FaCertificate />,
    },
    {
      name: "ISO 14001",
      status: "Familiar",
      description: "Environmental Management Systems",
      icon: <FaCertificate />,
    },
    {
      name: "NEBB",
      status: "Candidate",
      description: "Building Performance Standards",
      icon: <FaCertificate />,
    },
  ];

  const qualityCulture = [
    {
      title: "Standards",
      description:
        "Adherence to international standards including GMP, GLP, and FDA guidelines ensuring the highest quality in all operations.",
      icon: <FaCheckCircle />,
    },
    {
      title: "Quality",
      description:
        "Commitment to delivering excellence in all services and products, maintaining stringent quality controls throughout.",
      icon: <FaCheckCircle />,
    },
    {
      title: "Compliance",
      description:
        "Ensuring full regulatory compliance with pharmaceutical industry standards and local/international regulations.",
      icon: <FaCheckCircle />,
    },
    {
      title: "Documentation",
      description:
        "Comprehensive documentation systems maintaining complete records of all processes, tests, and validations.",
      icon: <FaFileAlt />,
    },
    {
      title: "Training",
      description:
        "Continuous professional development and training programs ensuring team expertise in latest industry practices.",
      icon: <FaUserGraduate />,
    },
    {
      title: "Validation",
      description:
        "Rigorous validation processes ensuring all systems and procedures meet specified requirements and standards.",
      icon: <FaClipboardCheck />,
    },
    {
      title: "Audit",
      description:
        "Regular internal and external audits to ensure continuous improvement and compliance with quality standards.",
      icon: <FaSearchPlus />,
    },
  ];

  const complianceStandards = [
    {
      name: "Good Manufacturing Practices",
      abbr: "GMP",
      description:
        "Professional GMP design and implementation ensuring pharmaceutical manufacturing meets regulatory requirements.",
    },
    {
      name: "Good Laboratory Practices",
      abbr: "GLP",
      description:
        "Adherence to GLP standards for all testing and laboratory operations.",
    },
    {
      name: "FDA Guidelines",
      abbr: "FDA",
      description:
        "Compliance with FDA regulations for pharmaceutical manufacturing and quality control.",
    },
    {
      name: "Good Engineering Practice",
      abbr: "GEP",
      description:
        "Application of GEP principles in all engineering and design activities.",
    },
  ];

  const instruments = [
    "Particle Counters",
    "Airflow Meters/Anemometers",
    "Capture Hood",
    "HEPA Filter Integrity Testers",
    "Differential Pressure Meters",
    "Temperature and Humidity Data Loggers",
    "Smoke Generators",
    "Light Meters (Lux Meters)",
    "Vibration Meters",
    "Sound Level Meters",
  ];

  return (
    <>
      <Header />
      <PageHero
        title="Quality & Certifications"
        subtitle="Committed to Excellence Through Rigorous Standards"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Quality" },
        ]}
      />

      {/* Introduction */}
      <section className="quality-intro">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="section-title">Quality Culture</h2>
              <p className="intro-text">
                At Unival, we believe that a strong quality culture is the
                foundation of our success. Our commitment to quality is embedded
                in every aspect of our operations and is reflected in our core
                values and certifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="certifications-section">
        <div className="container">
          <h2 className="section-title text-center mb-5">
            Our Certifications
          </h2>
          <div className="row g-4">
            {certifications.map((cert, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="certification-card">
                  <div className="cert-icon">{cert.icon}</div>
                  <h3 className="cert-name">{cert.name}</h3>
                  <p className="cert-description">{cert.description}</p>
                  <span className="cert-status">{cert.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Culture Pillars */}
      <section className="quality-pillars">
        <div className="container">
          <h2 className="section-title text-center mb-5">
            Quality Culture Pillars
          </h2>
          <div className="row g-4">
            {qualityCulture.map((pillar, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="pillar-card">
                  <div className="pillar-icon">{pillar.icon}</div>
                  <h4 className="pillar-title">{pillar.title}</h4>
                  <p className="pillar-description">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="compliance-section">
        <div className="container">
          <h2 className="section-title text-center mb-5">
            Compliance Standards
          </h2>
          <div className="row g-4">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="col-lg-6">
                <div className="compliance-card">
                  <div className="compliance-abbr">{standard.abbr}</div>
                  <h4 className="compliance-name">{standard.name}</h4>
                  <p className="compliance-description">
                    {standard.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualification Instruments */}
      <section className="instruments-section">
        <div className="container">
          <h2 className="section-title text-center mb-4">
            Qualification Instruments
          </h2>
          <p className="text-center mb-5 subtitle">
            Our comprehensive range of instruments enables thorough cleanroom
            testing, ensuring environments adhere to regulatory standards for
            contamination control and provide stable, compliant atmospheres for
            sensitive pharmaceutical processes.
          </p>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="instruments-grid">
                {instruments.map((instrument, index) => (
                  <div key={index} className="instrument-item">
                    <FaCheckCircle className="instrument-icon" />
                    <span>{instrument}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="quality-cta">
        <div className="container text-center">
          <h2 className="cta-title">Quality Assurance You Can Trust</h2>
          <p className="cta-text">
            Partner with us for comprehensive quality management and
            certification support that meets the highest pharmaceutical industry
            standards.
          </p>
          <a href="/contact" className="btn btn-cta-quality">
            Learn More
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Quality;
