import React from "react";
import Header from "../components/Header";
import PageHero from "../components/PageHero";
import Footer from "../components/Footer";
import "./Projects.css";
import {
  FaClipboardList,
  FaBoxes,
  FaCogs,
  FaCheckCircle,
  FaFlask,
  FaFileAlt,
} from "react-icons/fa";

const Projects = () => {
  const workflowSteps = [
    {
      number: "01",
      title: "Project Management, Planning, and Feasibility Study",
      description:
        "Comprehensive project planning, management, and feasibility analysis to ensure project viability and success from the start.",
      icon: <FaClipboardList />,
    },
    {
      number: "02",
      title: "Product Supply and Installation",
      description:
        "Complete supply and installation of pharmaceutical equipment, machinery, and systems with expert technical support.",
      icon: <FaBoxes />,
    },
    {
      number: "03",
      title: "Utilities (HVAC, Boiler, Chiller, Compressor)",
      description:
        "Design, supply, and installation of critical utility systems including HVAC, boilers, chillers, and compressed air systems.",
      icon: <FaCogs />,
    },
    {
      number: "04",
      title: "Testing, Commissioning, and Qualification",
      description:
        "Comprehensive testing, commissioning, and qualification services ensuring all systems meet regulatory requirements and performance standards.",
      icon: <FaCheckCircle />,
    },
  ];

  const qualificationServices = [
    {
      title: "User Requirement Specifications (URS)",
      description:
        "Detailed documentation of user requirements ensuring systems meet operational needs.",
    },
    {
      title: "Protocol Development and Execution",
      description:
        "Development and execution of comprehensive test protocols for all systems.",
    },
    {
      title: "Quality Risk Management",
      description:
        "Systematic approach to risk assessment and mitigation throughout the project lifecycle.",
    },
    {
      title: "Calibration Services",
      description:
        "Professional calibration of all instruments and equipment to maintain accuracy and compliance.",
    },
    {
      title: "Commissioning Plans",
      description:
        "Detailed commissioning plans ensuring smooth system startup and operation.",
    },
    {
      title: "Temperature Mapping Services",
      description:
        "Comprehensive temperature mapping for controlled environments and storage areas.",
    },
    {
      title: "Cleanroom Qualification",
      description:
        "Complete qualification of cleanroom systems including DQ, IQ, OQ, and PQ.",
    },
    {
      title: "FAT & SAT",
      description:
        "Factory Acceptance Testing and Site Acceptance Testing for all equipment and systems.",
    },
    {
      title: "Complete Qualification Services",
      description:
        "DQ (Design Qualification), IQ (Installation Qualification), OQ (Operational Qualification), and PQ (Performance Qualification).",
    },
  ];

  const turnkeyFeatures = [
    "Fully documented system with confidential protocols",
    "Compliance with GMP, GLP, and FDA guidelines",
    "Professional GMP design and unique design solutions",
    "Cleanroom design and construction",
    "Electro-mechanical design and installation",
    "Utility piping systems",
    "Fire protection systems",
    "HVAC systems design and implementation",
    "Process equipment solutions",
    "Packaging equipment and materials",
  ];

  return (
    <>
      <Header />
      <PageHero
        title="Projects & Workflow"
        subtitle="End-to-End Pharmaceutical Project Solutions"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Projects" },
        ]}
      />

      {/* Introduction */}
      <section className="projects-intro">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="section-title">Our Workflow</h2>
              <p className="intro-text">
                We deliver comprehensive pharmaceutical manufacturing solutions
                through a systematic approach that ensures quality, compliance,
                and operational excellence at every stage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Steps */}
      <section className="workflow-section">
        <div className="container">
          <div className="workflow-timeline">
            {workflowSteps.map((step, index) => (
              <div key={index} className="workflow-step">
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <div className="step-icon">{step.icon}</div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Turnkey Projects */}
      <section className="turnkey-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="section-title">
                Pharmaceutical Factory Turnkey Project
              </h2>
              <p className="turnkey-description">
                We provide comprehensive, fully documented systems for the
                pharmaceutical industry, ensuring strict adherence to
                confidential protocols and regulatory standards across all
                phases of production and facility operations.
              </p>
              <ul className="turnkey-features-list">
                {turnkeyFeatures.map((feature, index) => (
                  <li key={index}>
                    <FaCheckCircle className="feature-icon" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="turnkey-image-placeholder">
                <img
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800"
                  alt="Pharmaceutical Factory"
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualification Services */}
      <section className="qualification-section">
        <div className="container">
          <h2 className="section-title text-center mb-5">
            Qualification Services
          </h2>
          <p className="text-center mb-5 subtitle">
            Our company provides end-to-end calibration, testing, commissioning,
            qualification, and validation services tailored for the
            pharmaceutical sector, ensuring full compliance with regulatory
            standards.
          </p>
          <div className="row g-4">
            {qualificationServices.map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="qualification-card">
                  <div className="qualification-icon">
                    <FaFileAlt />
                  </div>
                  <h4 className="qualification-title">{service.title}</h4>
                  <p className="qualification-description">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="mission-section">
        <div className="container text-center">
          <div className="mission-icon">
            <FaFlask />
          </div>
          <h2 className="mission-title">Our Mission</h2>
          <p className="mission-text">
            Our mission is to deliver clean room solutions that meet regulatory
            standards and ensure optimal environmental control for manufacturing
            processes. With years of experience and a commitment to innovation,
            we support the pharmaceutical industry in maintaining the highest
            standards of cleanliness, safety, and efficiency.
          </p>
          <p className="mission-subtitle">
            With Trusted Union for Industrial Consultation as your trusted
            partner in clean room solutions, you gain an experienced team
            committed to your success. Together, we'll create a cleaner, safer,
            and highly efficient manufacturing environment.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="projects-cta">
        <div className="container text-center">
          <h2 className="cta-title">Ready to Start Your Project?</h2>
          <p className="cta-text">
            Let us help you bring your pharmaceutical manufacturing facility to
            life with our comprehensive project management and turnkey solutions.
          </p>
          <a href="/contact" className="btn btn-cta-projects">
            Discuss Your Project
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Projects;
