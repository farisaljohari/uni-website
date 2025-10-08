import { useEffect, useRef, useState } from "react";
import {
  FaAward,
  FaCalendarAlt,
  FaCertificate,
  FaHandshake,
  FaLightbulb,
  FaProjectDiagram,
  FaShieldAlt,
  FaStar,
  FaUsers,
} from "react-icons/fa";
import "./ValueProposition.css";

const ValueProposition = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="uba-value-section" id="about" ref={sectionRef}>
      <div className="container text-center">
        <div className={`section-header ${isVisible ? "fade-in" : ""}`}>
          <h2 className="value-main-title">WHY CHOOSE UNIVAL?</h2>
          <p className="value-desc">
            <strong>At Unival</strong>, we advance the pharmaceutical industry
            through integrity, quality, innovation, and a customer-centric
            approach. Our team of experts delivers world-class solutions
            tailored to your operational needs.
          </p>
        </div>

        <div className="value-grid">
          <div
            className={`box blue-box span-2 ${isVisible ? "animate-box" : ""}`}
            style={{ animationDelay: "0.1s" }}
          >
            <div className="box-icon">
              <FaCalendarAlt />
            </div>
            <h3 className="box-number">2020</h3>
            <p className="box-text">Year Established</p>
          </div>

          <div
            className={`box white-box ${isVisible ? "animate-box" : ""}`}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="box-icon icon-primary">
              <FaShieldAlt />
            </div>
            <h6 className="box-title">Integrity</h6>
            <p className="box-text">
              Operating with transparency, honesty, and trustworthiness.
            </p>
          </div>

          <div
            className={`box dark-box ${isVisible ? "animate-box" : ""}`}
            style={{ animationDelay: "0.3s" }}
          >
            <div className="box-icon icon-gold">
              <FaStar />
            </div>
            <h6 className="box-title">Quality Commitment</h6>
            <p className="box-text">
              Delivering services and products that meet global standards.
            </p>
          </div>

          <div
            className={`box white-box ${isVisible ? "animate-box" : ""}`}
            style={{ animationDelay: "0.4s" }}
          >
            <div className="box-icon icon-primary">
              <FaLightbulb />
            </div>
            <h6 className="box-title">Innovation</h6>
            <p className="box-text">
              Continuously evolving solutions to meet industry changes.
            </p>
          </div>

          <div
            className={`box dark-box tall ${isVisible ? "animate-box" : ""}`}
            style={{ animationDelay: "0.5s" }}
          >
            <div className="box-icon icon-gold">
              <FaUsers />
            </div>
            <h6 className="box-title">Customer-Centric</h6>
            <p className="box-text">
              Tailoring solutions based on deep understanding of client needs.
            </p>
          </div>

          <div
            className={`box white-box ${isVisible ? "animate-box" : ""}`}
            style={{ animationDelay: "0.6s" }}
          >
            <div className="box-icon icon-primary">
              <FaAward />
            </div>
            <h3 className="box-number">+15</h3>
            <p className="box-text">Years of Industry Expertise</p>
          </div>

          <div
            className={`box gray-box ${isVisible ? "animate-box" : ""}`}
            style={{ animationDelay: "0.7s" }}
          >
            <div className="box-icon icon-gold">
              <FaHandshake />
            </div>
            <h6 className="box-title">Global Collaboration</h6>
            <p className="box-text">
              Partnering with leading international manufacturers.
            </p>
          </div>

          <div
            className={`box bright-blue ${isVisible ? "animate-box" : ""}`}
            style={{ animationDelay: "0.8s" }}
          >
            <div className="box-icon">
              <FaCertificate />
            </div>
            <h4 className="box-number">ISO</h4>
            <p className="box-text">
              9001 & 17025
              <br />
              Certified / Candidate
            </p>
          </div>

          <div
            className={`box full-blue span-3 ${isVisible ? "animate-box" : ""}`}
            style={{ animationDelay: "0.9s" }}
          >
            <div className="box-icon icon-gold">
              <FaProjectDiagram />
            </div>
            <h6 className="box-title">End-to-End Solutions</h6>
            <p className="box-text">
              From consultation and design to cleanroom project execution,
              validation, and turnkey support — trusted by the pharmaceutical
              industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
