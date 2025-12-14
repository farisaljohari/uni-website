import { useEffect, useRef, useState } from "react";
import {
  FaAward,
  FaCalendarAlt,
  FaCertificate,
  FaHandshake,
  FaLightbulb,
  FaShieldAlt,
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
          <h2 className="value-main-title">WHY CHOOSE UniJO?</h2>
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
            <h6 className="box-title">Integrity & Quality</h6>
            <p className="box-text">
              Transparency, honesty, and global-standard quality assurance.
            </p>
          </div>

          <div
            className={`box dark-box ${isVisible ? "animate-box" : ""}`}
            style={{ animationDelay: "0.3s" }}
          >
            <div className="box-icon icon-gold">
              <FaLightbulb />
            </div>
            <h6 className="box-title">Innovation & Customer Focus</h6>
            <p className="box-text">
              Tailoring modern solutions to enhance your operational goals.
            </p>
          </div>

          <div
            className={`box white-box tall ${isVisible ? "animate-box" : ""}`}
            style={{ animationDelay: "0.4s" }}
          >
            <div className="box-icon icon-primary">
              <FaAward />
            </div>
            <h3 className="box-number">+15</h3>
            <p className="box-text-subtitle">Years Expertise</p>
            <p className="box-text">
              Experienced team with deep industry and engineering knowledge.
            </p>
          </div>

          <div
            className={`box gray-box ${isVisible ? "animate-box" : ""}`}
            style={{ animationDelay: "0.5s" }}
          >
            <div className="box-icon icon-gold">
              <FaHandshake />
            </div>
            <h6 className="box-title">Global Partnerships</h6>
            <p className="box-text">
              Collaborations with leading international manufacturers.
            </p>
          </div>

          <div
            className={`box full-blue span-2 ${isVisible ? "animate-box" : ""}`}
            style={{ animationDelay: "0.6s" }}
          >
            <div className="box-icon">
              <FaCertificate />
            </div>
            <h6 className="box-title">ISO Certified & End-to-End Solution</h6>
            <p className="box-text">
              Aligned with ISO 9001 & 17025, delivering full turnkey services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
