import React from "react";
import Header from "../components/Header";
import PageHero from "../components/PageHero";
import Footer from "../components/Footer";
import "./ServicesPage.css";
import {
  FaUserTie,
  FaTasks,
  FaFlask,
  FaCogs,
  FaCheckCircle,
  FaBox,
  FaTools,
  FaProjectDiagram,
} from "react-icons/fa";

const ServicesPage = () => {
  const services = [
    {
      icon: <FaUserTie />,
      title: "Consultation",
      description:
        "Our expert consultants offer tailored advice to help you navigate challenges and optimize your operations for better efficiency and effectiveness.",
      features: [
        "Strategic planning and feasibility studies",
        "Regulatory compliance guidance",
        "Process optimization",
        "GMP & GLP consultation",
      ],
    },
    {
      icon: <FaTasks />,
      title: "Project Management",
      description:
        "We specialize in managing projects from inception to completion, ensuring timely delivery and adherence to budgetary constraints while meeting client specifications.",
      features: [
        "End-to-end project coordination",
        "Budget and timeline management",
        "Risk assessment and mitigation",
        "Quality assurance throughout",
      ],
    },
    {
      icon: <FaFlask />,
      title: "Cleanroom System Calibration",
      description:
        "We offer calibration services for cleanroom systems, including facilities, utilities, machines, equipment, and instruments, to maintain operational integrity and compliance.",
      features: [
        "HEPA filter integrity testing",
        "Airflow and pressure differential testing",
        "Particle counting",
        "Temperature and humidity mapping",
      ],
    },
    {
      icon: <FaCogs />,
      title: "Trading of Machineries, Equipment & Tools",
      description:
        "We supply a comprehensive range of machinery and tools suitable for all industrial applications, ensuring top quality and performance.",
      features: [
        "Pharmaceutical manufacturing equipment",
        "Cleanroom machinery",
        "Quality control instruments",
        "Packaging equipment",
      ],
    },
    {
      icon: <FaCheckCircle />,
      title: "Validation and Qualification",
      description:
        "Our validation and qualification services ensure that systems and processes meet regulatory requirements and industry best practices.",
      features: [
        "Design Qualification (DQ)",
        "Installation Qualification (IQ)",
        "Operational Qualification (OQ)",
        "Performance Qualification (PQ)",
      ],
    },
    {
      icon: <FaBox />,
      title: "Raw & Packaging Material",
      description:
        "We provide high-quality raw materials and packaging solutions to support your production processes and ensure compliance with industry standards.",
      features: [
        "Pharmaceutical-grade raw materials",
        "PVC hard sheets for packaging",
        "Glass packaging solutions",
        "Quality assurance documentation",
      ],
    },
    {
      icon: <FaTools />,
      title: "Maintenance and Sanitization Services",
      description:
        "We provide comprehensive maintenance and sanitization services to keep equipment and facilities operating at peak performance and in adherence to hygiene standards.",
      features: [
        "Preventive maintenance programs",
        "Equipment sanitization",
        "Facility cleaning and sterilization",
        "Compliance with hygiene standards",
      ],
    },
    {
      icon: <FaProjectDiagram />,
      title: "Turnkey Project Solutions",
      description:
        "Complete pharmaceutical factory turnkey projects with fully documented systems adhering to confidential protocols and regulatory standards.",
      features: [
        "Complete facility design and construction",
        "HVAC and utility systems",
        "Commissioning and qualification",
        "Full regulatory compliance",
      ],
    },
  ];

  return (
    <>
      <Header />
      <PageHero
        title="Our Services"
        subtitle="Comprehensive Solutions for the Pharmaceutical Industry"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Services" },
        ]}
      />

      {/* Services Introduction */}
      <section className="services-intro">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="intro-title">Business Scope</h2>
              <p className="intro-text">
                At Unival, our expertise spans a wide range of services tailored
                to meet the diverse needs of various industrial sectors. We
                provide end-to-end solutions that ensure quality, compliance,
                and operational excellence in the pharmaceutical industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section">
        <div className="container">
          <div className="row g-4">
            {services.map((service, index) => (
              <div key={index} className="col-lg-6">
                <div className="service-detail-card">
                  <div className="service-card-header">
                    <div className="service-icon-large">{service.icon}</div>
                    <h3 className="service-card-title">{service.title}</h3>
                  </div>
                  <p className="service-card-description">
                    {service.description}
                  </p>
                  <ul className="service-features-list">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>
                        <FaCheckCircle className="check-icon" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container text-center">
          <h2 className="cta-title">Ready to Get Started?</h2>
          <p className="cta-text">
            Let us help you achieve your pharmaceutical manufacturing goals with
            our comprehensive services and industry expertise.
          </p>
          <a href="/contact" className="btn btn-cta-services">
            Contact Us Today
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ServicesPage;
