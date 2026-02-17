import { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
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
      image: require("../assets/veck.jpeg"),
    },
    {
      name: "UniJO China",
      category: "Cleanroom Solutions",
      image: require("../assets/Unival China.png"),
    },
    {
      name: "SHINVA Pharmaceutical Technology Group",
      category: "Pharmaceutical Machinery",
      image: require("../assets/shinva.png"),
    },
    {
      name: "STC",
      category: "Mixing & Granulation",
      image: require("../assets/stc.png"),
    },
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
              <h2 className="section-title">About UniJO</h2>
              <p className="profile-text">
                Since 2019, UniJO has been providing pharmaceutical industries
                with innovative engineering, consulting, and cleanroom solutions
                to meet global standards and to support full regulatory
                compliance. Our customer-focused approach allows us to provide
                tailored solutions that enhance their pharmaceutical operations
                by combining deep industry expertise, high-quality sourcing
                capabilities, and reliable turnkey project execution.
              </p>
              <Link to="/about" className="btn-learn-more">
                Learn More About Us <FaArrowRight />
              </Link>
            </div>
            <div className="col-lg-6">
              <div className="profile-image">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
                  alt="Pharmaceutical Consulting and Engineering"
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ValueProposition />
      <Services />

      {/* Partnerships Highlight */}
      <section className="home-partnerships">
        <div className="container">
          <h2 className="section-title text-center mb-5">
            Our Global Partnerships
          </h2>
          <p className="text-center mb-5 partnerships-intro">
            Through strategic collaborations with leading international manufacturers, we
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
                Partner with UniJO for comprehensive pharmaceutical engineering
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
