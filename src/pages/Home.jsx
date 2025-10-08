import { useEffect } from "react";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import TimelineSlider from "../components/TimelineSlider";
import ValueProposition from "../components/ValueProposition";
import "./Home.css";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const partners = [
    {
      name: "Veck (Tianjin) Co. Ltd.",
      category: "HVAC Systems",
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400",
    },
    {
      name: "SHINVA Pharmaceutical",
      category: "Pharmaceutical Machinery",
      image:
        "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400",
    },
    {
      name: "Unival China",
      category: "Cleanroom Solutions",
      image:
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400",
    },
    {
      name: "STC",
      category: "Mixing & Granulation",
      image: "https://images.unsplash.com/photo-1583911860-73bffc9e6b81?w=400",
    },
  ];

  const whyChooseUs = [
    "ISO 9001 & 17025 Certified / Candidate",
    "15+ Years of Combined Team Experience",
    "Global Partnerships with Leading Manufacturers",
    "Full GMP & FDA Compliance",
    "End-to-End Turnkey Solutions",
    "Professional Engineering & Design Services",
  ];

  return (
    <>
      <Header />
      <HeroSection />

      {/* Company Profile Section */}
      <section className="home-profile">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="section-title">About Unival</h2>
              <p className="profile-text">
                At Unival, we are passionate about advancing the pharmaceutical
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
              <Link to="/about" className="btn-learn-more">
                Learn More About Us <FaArrowRight />
              </Link>
            </div>
            <div className="col-lg-6">
              <div className="profile-image">
                <img
                  src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800"
                  alt="Pharmaceutical Laboratory"
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ValueProposition />
      <Services />

      {/* Why Choose Us Section */}
      <section className="home-why-choose">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="why-choose-image">
                <img
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800"
                  alt="Quality Assurance"
                  className="img-fluid rounded"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="section-title">Why Choose Unival?</h2>
              <p className="why-choose-intro">
                With a trusted partner like Unival, you gain an experienced team
                committed to your success. We deliver projects that uphold the
                highest standards of quality and regulatory compliance.
              </p>
              <ul className="why-choose-list">
                {whyChooseUs.map((item, index) => (
                  <li key={index}>
                    <FaCheckCircle className="check-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/quality" className="btn-learn-more">
                Explore Our Certifications <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships Highlight */}
      <section className="home-partnerships">
        <div className="container">
          <h2 className="section-title text-center mb-5">
            Our Global Partnerships
          </h2>
          <p className="text-center mb-5 partnerships-intro">
            Through strategic partnerships with leading global manufacturers, we
            deliver world-class solutions tailored to the pharmaceutical
            industry's unique needs.
          </p>
          <div className="row g-4">
            {partners.map((partner, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="partner-card">
                  <div className="partner-image">
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="img-fluid"
                    />
                  </div>
                  <div className="partner-info">
                    <h5 className="partner-name">{partner.name}</h5>
                    <p className="partner-category">{partner.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <Link to="/products" className="btn-view-all">
              View All Partnerships <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <TimelineSlider />

      {/* Final CTA Section */}
      <section className="home-cta">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="cta-title">Ready to Transform Your Operations?</h2>
              <p className="cta-text">
                Partner with Unival for comprehensive pharmaceutical engineering
                solutions, turnkey projects, and expert consultation services.
                Let's create excellence together.
              </p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn-cta-primary">
                  Get Started
                </Link>
                <Link to="/projects" className="btn-cta-secondary">
                  View Our Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
