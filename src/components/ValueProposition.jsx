import React from "react";
import "./ValueProposition.css";

const ValueProposition = () => {
  return (
    <section className="uba-value-section" id="about">
      <div className="container text-center">
        <h2 className="fw-bold mb-2">WHY CHOOSE UniJO?</h2>
        <p className="mb-4 desc">
          <strong>At UniJO</strong>, we advance the pharmaceutical industry
          through integrity, quality, innovation, and a customer-centric
          approach. Our team of experts delivers world-class solutions tailored
          to your operational needs.
        </p>

        <div className="value-grid">
          <div className="box blue-box span-2">
            <h3>2021</h3>
            <p>Year Established</p>
          </div>

          <div className="box white-box">
            <h6>Integrity</h6>
            <p>Operating with transparency, honesty, and trustworthiness.</p>
          </div>

          <div className="box dark-box">
            <h6>Quality Commitment</h6>
            <p>Delivering services and products that meet global standards.</p>
          </div>

          <div className="box white-box">
            <h6 className="text-primary">Innovation</h6>
            <p>Continuously evolving solutions to meet industry changes.</p>
          </div>

          <div className="box dark-box tall">
            <h6>Customer-Centric</h6>
            <p>
              Tailoring solutions based on deep understanding of client needs.
            </p>
          </div>

          <div className="box white-box">
            <h3>+15</h3>
            <p>Years of Industry Expertise</p>
          </div>

          <div className="box gray-box">
            <h6>Global Collaboration</h6>
            <p>Partnering with leading international manufacturers.</p>
          </div>

          <div className="box bright-blue">
            <h4>ISO</h4>
            <p>
              9001 & 17025
              <br />
              Certified / Candidate
            </p>
          </div>

          <div className="box full-blue span-3">
            <h6>End-to-End Solutions</h6>
            <p>
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
