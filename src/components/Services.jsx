import React from "react";
import "./Services.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Import images
import consultationImage from "../assets/CONSULTATION.jpg";
import projectManagementImage from "../assets/PROJECTMANAGEMENT.jpg";
import cleanroomImage from "../assets/CLEANROOMSYSTEMS.jpg";
import machineryImage from "../assets/CONSULTATION.jpg";
import validationImage from "../assets/val.jpg";
import hvacImage from "../assets/HVAC.jpg";
import packagingImage from "../assets/CONSULTATION.jpg";
import maintenanceImage from "../assets/CONSULTATION.jpg";

const services = [
  {
    title: "CONSULTATION",
    icon: consultationImage,
  },
  {
    title: "CLEANROOM SYSTEMS",
    icon: cleanroomImage,
  },
  {
    title: "PHARMA MACHINERY",
    icon: machineryImage,
  },
  {
    title: "VALIDATION & QUALIFICATION",
    icon: validationImage,
  },
  {
    title: "HVAC & UTILITIES",
    icon: hvacImage,
  },
  {
    title: "PACKAGING SOLUTIONS",
    icon: packagingImage,
  },
  {
    title: "MAINTENANCE & CALIBRATION",
    icon: maintenanceImage,
  },
  {
    title: "PROJECT MANAGEMENT",
    icon: projectManagementImage,
  },
];

const Services = () => {
  return (
    <section className="services-section py-5" id="services">
      <div className="services-wrapper text-center">
        <h2 className="fw-bold mb-5">OUR SERVICES</h2>

        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
        >
          {services.map((item, i) => (
            <SwiperSlide key={i}>
              <div
                className="service-card"
                style={{ backgroundImage: `url(${item.icon})` }}
              >
                <div className="overlay">
                  <h5 className="service-title">{item.title}</h5>
                  <button className="btn btn-outline-light btn-sm">
                    Explore Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Services;
