import React from "react";
import Header from "../components/Header";
import PageHero from "../components/PageHero";
import Footer from "../components/Footer";
import "./AboutUs.css";
import {
  FaShieldAlt,
  FaStar,
  FaLightbulb,
  FaUsers,
  FaHandshake,
} from "react-icons/fa";

const AboutUs = () => {
  const values = [
    {
      icon: <FaShieldAlt />,
      title: "Integrity",
      description:
        "We operate with honesty and transparency, ensuring that our clients can trust our services and solutions.",
    },
    {
      icon: <FaStar />,
      title: "Quality",
      description:
        "We are committed to delivering the highest quality in all our services and products, adhering to international standards.",
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      description:
        "We embrace creativity and innovation, continually seeking new ways to improve and adapt to industry changes.",
    },
    {
      icon: <FaUsers />,
      title: "Customer-Centric Approach",
      description:
        "Our clients are at the heart of everything we do. We listen to their needs and tailor our services to meet their expectations.",
    },
    {
      icon: <FaHandshake />,
      title: "Collaboration",
      description:
        "We believe in the power of teamwork and collaboration, both within our team and with our clients, to achieve shared goals.",
    },
  ];

  const growthStages = [
    {
      stage: "Stage One",
      title: "Foundation & Consultation",
      description:
        "Focus on providing consultation services and project management specifically for the pharmaceutical industry.",
    },
    {
      stage: "Stage Two",
      title: "Turnkey Solutions",
      description:
        "Expand our offerings to specialize in supply and execution of turnkey solutions, encompassing all related utilities. Establish ourselves as the exclusive agent for leading pharmaceutical machinery and utility providers.",
    },
    {
      stage: "Stage Three",
      title: "Certification Excellence",
      description:
        "Achieve certification in ISO 9001 and ISO 17025 to conduct testing, commissioning, and qualification processes. Obtain NEBB certification to ensure compliance with rigorous standards and procedures.",
    },
  ];

  return (
    <>
      <Header />
      <PageHero
        title="About UniJO"
        subtitle="Advancing the Pharmaceutical Industry through Innovation and Expertise"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "About Us" },
        ]}
      />

      {/* Company Profile Section */}
      <section className="company-profile">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="profile-image-placeholder">
                <img
                  src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800"
                  alt="Pharmaceutical Lab"
                  className="img-fluid rounded"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="section-title">Our Profile</h2>
              <p className="profile-text">
                At UniJO, we are passionate about advancing the pharmaceutical
                industry through innovation and expertise. Founded in{" "}
                <strong>2021</strong>, our team of dedicated professionals
                specializes in providing comprehensive consulting services,
                sourcing high-quality medical and pharmaceutical supplies, and
                designing projects that comply with international standards.
              </p>
              <p className="profile-text">
                We pride ourselves on our customer-centric approach, working
                closely with our clients to deliver tailored solutions that
                drive success. Whether you're looking for expert guidance or
                reliable products, we are here to support your goals and enhance
                your operational efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="core-values">
        <div className="container">
          <h2 className="section-title text-center mb-5">Our Core Values</h2>
          <div className="row g-4">
            {values.map((value, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="value-card">
                  <div className="value-icon">{value.icon}</div>
                  <h4 className="value-title">{value.title}</h4>
                  <p className="value-description">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Coverage Section */}
      <section className="market-coverage">
        <div className="container">
          <h2 className="section-title text-center mb-5">Market Coverage</h2>
          <div className="coverage-content">
            <p className="text-center mb-4">
              At UniJO, we proudly serve a diverse range of markets across
              multiple regions. Our business operations extend throughout the
              Middle East, where we have established a strong presence catering
              to the unique needs of pharmaceutical industries in this region.
            </p>
            <div className="coverage-map-placeholder">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1200"
                alt="Global Coverage Map"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Business Growth Plan */}
      <section className="growth-plan">
        <div className="container">
          <h2 className="section-title text-center mb-5">
            Business Growth Plan
          </h2>
          <p className="text-center mb-5 subtitle">
            Our business growth plan is strategically aligned with our vision
            for sustainable development. We focus on operational excellence and
            delivering long-term value to our stakeholders.
          </p>
          <div className="row g-4">
            {growthStages.map((stage, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="growth-stage-card">
                  <div className="stage-number">{index + 1}</div>
                  <h3 className="stage-name">{stage.stage}</h3>
                  <h4 className="stage-title">{stage.title}</h4>
                  <p className="stage-description">{stage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us CTA */}
      <section className="why-choose-cta">
        <div className="container text-center">
          <h2 className="cta-title">Why Choose UniJO?</h2>
          <p className="cta-text">
            With a trusted partner like UniJO, you gain an experienced team
            committed to your success. We are committed to be your partner in
            success, delivering projects that uphold the highest standards of
            quality and regulatory compliance.
          </p>
          <a href="/contact" className="btn btn-cta">
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutUs;
