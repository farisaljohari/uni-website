import React from "react";
import Header from "../components/Header";
import PageHero from "../components/PageHero";
import Footer from "../components/Footer";
import "./Products.css";
import { FaIndustry, FaBoxes, FaCog, FaPills, FaVial } from "react-icons/fa";

const Products = () => {
  const partnerships = [
    {
      partner: "Veck (Tianjin) Co. Ltd.",
      category: "HVAC Systems",
      icon: <FaIndustry />,
      description:
        "In partnership with Veck (Tianjin) Co. Ltd., we offer a comprehensive range of HVAC systems to create clean and comfortable environments for our customers.",
      products: [
        "Air quality systems",
        "Fan Coil Units",
        "Ceiling Air Handling Units",
        "Heat Recovery Air Handling Units",
        "Modular Series Air Handling Units",
        "DX Modular Air Handling Units",
        "Air-Cooled Ducted Units",
        "Modular Air-Cooled Chillers (Heat Pumps)",
      ],
    },
    {
      partner: "UniJO China",
      category: "Cleanroom Solutions",
      icon: <FaBoxes />,
      description:
        "In partnership with UniJO China, our company supplies specialized cleanroom solutions, including cleanroom sandwich panels, ceiling systems, cleanroom doors and windows, along with related products.",
      products: [
        "Cleanroom sandwich panels",
        "Ceiling systems",
        "Cleanroom doors and windows",
        "Product development support",
        "Manufacturing and consulting services",
      ],
    },
    {
      partner: "SHINVA Pharmaceutical Technology Group",
      category: "Pharmaceutical Machinery",
      icon: <FaCog />,
      description:
        "In partnership with SHINVA Pharmaceutical Technology Group, we provide the pharmaceutical industry with engineering and design services for sterile injections, solid dosage forms, medicinal products, and biopharmaceuticals.",
      products: [
        "Ampoule sterilizers",
        "Blow-fill-seal machines",
        "Preparation systems",
        "Integrated sterilization solutions",
        "Research and technical services",
      ],
    },
    {
      partner: "STC",
      category: "Mixing & Granulation Equipment",
      icon: <FaCog />,
      description:
        "In partnership with STC, we provide comprehensive solutions in mixing and granulation (powder pressing and multi-layer tableting technology) for pharmaceuticals, food, and cosmetic industries.",
      products: [
        "Coating Machine Series",
        "Granulator Series",
        "Fluid Bed Dryer (FBD) Series",
        "Lifting Tipper with Mill Series",
        "Lifting Charging Machine Series",
        "Mixing Machine Series",
        "IBC Bin Series",
        "Bin Washer Series",
        "Cone Mill and Hammer Mill Series",
      ],
    },
    {
      partner: "Liaoning Tianyi Machinery Co., Ltd",
      category: "Capsule Filling Machines",
      icon: <FaPills />,
      description:
        "In partnership with Liaoning Tianyi Machinery Co., Ltd, we are equipped to deliver comprehensive services for the pharmaceutical industry, specializing in the development, manufacturing, sales, and after-sales support of advanced pharmaceutical machinery.",
      products: [
        "Full-automatic hard gelatin capsule filling machines",
        "Tablet presses",
        "PFS plastic capsulation packing machines",
      ],
    },
    {
      partner: "Xiaolun United",
      category: "Various Pharmaceutical Equipment",
      icon: <FaCog />,
      description:
        "In partnership with Xiaolun United, we can provide high-quality pharmaceutical machinery and equipment designed to meet stringent pharmaceutical standards.",
      products: [
        "Pharmaceutical manufacturing equipment",
        "Process automation solutions",
        "Quality control systems",
      ],
    },
    {
      partner: "Younker Packaging Technology Co., Ltd",
      category: "PVC Packaging Materials",
      icon: <FaBoxes />,
      description:
        "We provide PVC hard sheets for pharmaceutical and food packaging from our partner Younker Packaging Technology Co., Ltd, ensuring the highest domestic standards in the medicinal PVC industry.",
      products: [
        "PVC hard sheets for pharmaceutical packaging",
        "Food-grade PVC packaging materials",
        "Customized packaging solutions",
      ],
    },
    {
      partner: "Changzhou Four Stars Glass Co., LTD",
      category: "Glass Packaging Solutions",
      icon: <FaVial />,
      description:
        "We provide a full range of high-quality glass packaging solutions from our partner Changzhou Four Stars Glass Co., LTD.",
      products: [
        "Neutral Glass Tubing",
        "Glass Ampoules",
        "Injectable Vials",
        "Oral Liquid Vials",
        "Screw-neck Vials",
        "Printed Vials",
      ],
    },
  ];

  return (
    <>
      <Header />
      <PageHero
        title="Products & Partnerships"
        subtitle="Delivering Excellence Through Global Collaboration"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Products" },
        ]}
      />

      {/* Introduction Section */}
      <section className="products-intro">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="section-title">
                Products, Services, and Business Partnerships
              </h2>
              <p className="intro-text">
                Through strategic partnerships with leading global manufacturers,
                we deliver comprehensive solutions tailored to the pharmaceutical
                industry's unique needs. Our partnerships ensure access to
                world-class equipment, materials, and technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="partnerships-section">
        <div className="container">
          {partnerships.map((partnership, index) => (
            <div
              key={index}
              className={`partnership-item ${
                index % 2 === 0 ? "even" : "odd"
              }`}
            >
              <div className="row align-items-center">
                <div className={`col-lg-6 ${index % 2 === 1 ? "order-lg-2" : ""}`}>
                  <div className="partnership-content">
                    <div className="partnership-icon">{partnership.icon}</div>
                    <h3 className="partnership-name">{partnership.partner}</h3>
                    <h4 className="partnership-category">
                      {partnership.category}
                    </h4>
                    <p className="partnership-description">
                      {partnership.description}
                    </p>
                    <div className="products-list">
                      <h5>Key Products & Solutions:</h5>
                      <ul>
                        {partnership.products.map((product, idx) => (
                          <li key={idx}>{product}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={`col-lg-6 ${index % 2 === 1 ? "order-lg-1" : ""}`}>
                  <div className="partnership-image-placeholder">
                    <img
                      src={`https://images.unsplash.com/photo-${
                        [
                          "1581092160562-40aa08e78837",
                          "1582719508461-905c673771fd",
                          "1631549916768-4119b2e5f926",
                          "1583911860-73bffc9e6b81",
                          "1587825140708-dfaf72ae4b04",
                          "1584308666744-24d5c474f2ae",
                          "1587825140472-d5235bc1f38a",
                          "1603484477859-e39c69647e5f",
                        ][index % 8]
                      }?w=600`}
                      alt={partnership.partner}
                      className="img-fluid rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="products-cta">
        <div className="container text-center">
          <h2 className="cta-title">Interested in Our Products?</h2>
          <p className="cta-text">
            Contact us to learn more about our product offerings and how our
            partnerships can benefit your pharmaceutical operations.
          </p>
          <a href="/contact" className="btn btn-cta-products">
            Request More Information
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Products;
