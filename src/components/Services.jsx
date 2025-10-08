import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Services.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
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

const services = [
  {
    title: "CONSULTATION",
    icon: <FaUserTie />,
    description: "Expert advice to optimize operations and navigate challenges",
    bgImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600",
  },
  {
    title: "CLEANROOM SYSTEMS",
    icon: <FaFlask />,
    description: "Complete calibration services for cleanroom facilities and equipment",
    bgImage: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600",
  },
  {
    title: "PHARMA MACHINERY",
    icon: <FaCogs />,
    description: "Comprehensive range of machinery and tools for all industrial applications",
    bgImage: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600",
  },
  {
    title: "VALIDATION & QUALIFICATION",
    icon: <FaCheckCircle />,
    description: "Ensuring systems meet regulatory requirements and best practices",
    bgImage: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600",
  },
  {
    title: "HVAC & UTILITIES",
    icon: <FaProjectDiagram />,
    description: "Design and installation of critical utility systems",
    bgImage: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600",
  },
  {
    title: "PACKAGING SOLUTIONS",
    icon: <FaBox />,
    description: "High-quality raw materials and packaging for your production",
    bgImage: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600",
  },
  {
    title: "MAINTENANCE & CALIBRATION",
    icon: <FaTools />,
    description: "Comprehensive maintenance to keep equipment at peak performance",
    bgImage: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600",
  },
  {
    title: "PROJECT MANAGEMENT",
    icon: <FaTasks />,
    description: "End-to-end project coordination from inception to completion",
    bgImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600",
  },
];

const Services = () => {
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
    <section className="services-section" id="services" ref={sectionRef}>
      <div className="services-wrapper text-center">
        <div className={`services-header ${isVisible ? "fade-in" : ""}`}>
          <h2 className="services-main-title">OUR SERVICES</h2>
          <p className="services-desc">
            Comprehensive solutions tailored to meet the diverse needs of the
            pharmaceutical industry. From consultation to turnkey projects, we
            deliver excellence at every stage.
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={25}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
          className={`services-swiper ${isVisible ? "swiper-visible" : ""}`}
        >
          {services.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="service-card">
                <div
                  className="service-bg-image"
                  style={{ backgroundImage: `url(${item.bgImage})` }}
                ></div>
                <div className="service-overlay">
                  <div className="service-icon-wrapper">
                    {item.icon}
                  </div>
                  <h5 className="service-title">{item.title}</h5>
                  <p className="service-description">{item.description}</p>
                  <Link to="/services" className="service-btn">
                    Learn More
                    <span className="btn-arrow">→</span>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={`view-all-wrapper ${isVisible ? "fade-in-delay" : ""}`}>
          <Link to="/services" className="btn-view-all-services">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
