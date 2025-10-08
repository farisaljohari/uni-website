import React from "react";
import Header from "../components/Header";
import PageHero from "../components/PageHero";
import Footer from "../components/Footer";
import "./Team.css";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const Team = () => {
  const teamMembers = [
    {
      name: "Mu Kai",
      position: "CEO",
      education: "Bachelor's degree in Pharmaceutical Formulation Process",
      experience:
        "CEO of Trusted Union, based in Amman, specializing in Pharmaceutical Engineering & Technology. Over 30 years dedicated to advancing pharmaceutical process and engineering systems, with expertise in Good Engineering Practice (GEP) and Good Manufacturing Practice (GMP) management. Strong capabilities in Engineering, Procurement, and Construction (EPC) and turnkey solutions. Played a crucial role in planning, design, and execution of numerous major pharmaceutical engineering projects in China, Africa, and the Middle East, including pharmaceutical plants, animal vaccine facilities, and cosmetic manufacturing plants. Under his leadership, Unival has become a one-stop solution provider for the pharmaceutical and vaccine project sectors.",
      certifications: [
        "GEP & GMP Management Expert",
        "EPC & Turnkey Solutions Specialist",
        "International Project Experience (China, Africa, Middle East)",
      ],
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Mutaz Salman",
      position: "Engineering Manager",
      education: "Bachelor's degree in Chemical Industries Engineering – TTU",
      experience:
        "Brings over 15 years of extensive experience in industrial engineering. His background encompasses a wide range of projects and responsibilities, allowing him to develop a deep understanding of engineering principles and practices within the industrial sector. This experience equips him with the ability to effectively manage complex engineering tasks.",
      certifications: [
        "Certified Lead Auditor for Occupational Health and Safety Management Systems (OHSMS) ISO 45001",
        "Familiar with OHSAS 18001 and ISO 14001 standards",
        "PMP Certification Candidate",
        "AutoCAD Mechanical & Revit for MEP Engineering",
        "Specialized training in design of mechanical engineering systems (firefighting, HVAC, plumbing)",
        "Extensive knowledge in safety and hazard management in chemical handling",
      ],
      image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      name: "Marwa Saleem",
      position: "General Manager",
      education:
        "Master of Business Administration (MBA) – Edinburgh Business School, UK & Bachelor's Degree in Chemical Industries Engineering – TTU, Jordan",
      experience:
        "With 15 years of extensive experience in pharmaceutical engineering, developed a robust expertise in quality assurance and strategic planning. The comprehensive background enables her to effectively lead teams, optimize processes, and drive organizational success within the pharmaceutical sector.",
      certifications: [
        "Certified Project Management Professional (PMP) – Project Management Institute (PMI), USA",
        "Certified Business Consultant – London Business College",
        "ISO 17025:2017 Certification",
        "KAIZEN Training – Japan International Cooperation Agency (JICA), Japan",
      ],
      image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      name: "Rasha Abu Naba",
      position: "Compliance Manager",
      education: "Bachelor's degree in Biomedical Engineering – Hashemite University",
      experience:
        "Brings 15 years of extensive experience in medical and pharmaceutical technical support. Her expertise in compliance and quality assurance enables her to effectively navigate regulatory requirements and ensure adherence to industry standards.",
      certifications: [
        "Certified Pharmaceutical GMP Professional Candidate – American Society for Quality",
        "Good Manufacturing Practices (GMP) Training",
      ],
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      name: "Noor Al-Najjar",
      position: "Supply Chain Manager",
      education: "Agriculture Engineering – Balqa Applied University, Salt",
      experience:
        "With 15 years of experience in Purchasing and Supplies Management, ensuring efficient procurement and supply chain operations.",
      certifications: [
        "Certified Supply Chain Export Candidate – The International Association for People & Performance Development",
        "Clearance and Customs Training",
      ],
      image: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      name: "Ramadan Nofal",
      position: "Project Engineer",
      education:
        "Mechanical Engineering: Air Conditioning, Refrigeration and Heating System – TTU",
      experience:
        "With 7 years of experience as an electromechanical engineer, brings expertise in a wide range of electromechanical systems, enabling him to effectively contribute to project success through innovative solutions and meticulous attention to detail.",
      certifications: ["Project Management Professional Candidate"],
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      name: "Eman Asa'd",
      position: "Quality Officer",
      education: "Quality Management",
      experience:
        "With 5 years of experience in Quality Management Systems (QMS), She has developed a comprehensive understanding of quality assurance processes and regulatory compliance. Her expertise includes the implementation and maintenance of QMS frameworks.",
      certifications: [
        "Lead Auditor ISO 9001:2015 Candidate",
        "ISO 13485 Training",
        "Internal Audit Certified",
        "Good Manufacturing Practices (GMP) Training",
      ],
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      name: "Ali Al Mawajdeh",
      position: "Accounting Manager",
      education: "Finance",
      experience:
        "With 12 years of experience, Ali brings a wealth of expertise in financial management and analysis. With a strong foundation in accounting principles and a meticulous approach, Ali ensures financial records are accurate and up-to-date, providing valuable insights that drive strategic decision-making. Known for dedication to precision and proactive approach, helps optimize resources, streamline processes, and enhance financial transparency within the organization.",
      certifications: [],
      image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
  ];

  return (
    <>
      <Header />
      <PageHero
        title="Our Team"
        subtitle="Meet the Experts Driving Innovation and Excellence"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Team" },
        ]}
      />

      {/* Team Introduction */}
      <section className="team-intro">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="section-title">Our Expert Team</h2>
              <p className="intro-text">
                Our team comprises dedicated professionals with decades of
                combined experience in pharmaceutical engineering, quality
                assurance, project management, and compliance. Together, we
                deliver world-class solutions to the pharmaceutical industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="team-grid-section">
        <div className="container">
          <div className="row g-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-lg-6">
                <div className="team-member-card">
                  <div className="member-header">
                    <div className="member-image">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="img-fluid"
                      />
                    </div>
                    <div className="member-info">
                      <h3 className="member-name">{member.name}</h3>
                      <p className="member-position">{member.position}</p>
                      <div className="member-social">
                        <a href="#" className="social-icon">
                          <FaLinkedin />
                        </a>
                        <a href="#" className="social-icon">
                          <FaEnvelope />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="member-details">
                    <div className="detail-section">
                      <h5 className="detail-title">Education</h5>
                      <p className="detail-text">{member.education}</p>
                    </div>

                    <div className="detail-section">
                      <h5 className="detail-title">Experience</h5>
                      <p className="detail-text">{member.experience}</p>
                    </div>

                    {member.certifications.length > 0 && (
                      <div className="detail-section">
                        <h5 className="detail-title">
                          Certifications & Training
                        </h5>
                        <ul className="certifications-list">
                          {member.certifications.map((cert, idx) => (
                            <li key={idx}>{cert}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="team-cta">
        <div className="container text-center">
          <h2 className="cta-title">Join Our Team</h2>
          <p className="cta-text">
            We're always looking for talented professionals to join our team.
            If you're passionate about pharmaceutical excellence, we'd love to
            hear from you.
          </p>
          <a href="/contact" className="btn btn-cta-team">
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Team;
