import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { HiCalendar, HiChevronLeft, HiChevronRight } from "react-icons/hi";
import "swiper/css";
import "swiper/css/navigation";
import "./TimelineSlider.css";

const timelineData = [
  {
    year: "2021",
    title: "Unival Founded",
    desc: "Launched to deliver innovative pharmaceutical consulting and engineering services.",
    logo: "/logos/unival-logo.png",
  },
  {
    year: "2022",
    title: "First Turnkey Project",
    desc: "Successfully executed a cleanroom turnkey solution for a pharmaceutical client.",
    logo: "/logos/cleanroom.png",
  },
  {
    year: "2022",
    title: "ISO Certifications",
    desc: "Began certification process for ISO 9001:2015 and ISO 17025:2017 standards.",
    logo: "/logos/iso.png",
  },
  {
    year: "2023",
    title: "Global Partnerships",
    desc: "Established partnerships with leading pharma machinery manufacturers in China and Europe.",
    logo: "/logos/partnership.png",
  },
  {
    year: "2023",
    title: "Expansion in Middle East",
    desc: "Expanded market coverage across GCC and Middle Eastern countries.",
    logo: "/logos/expansion.png",
  },
  {
    year: "2024",
    title: "New Turnkey Projects",
    desc: "Secured multiple full turnkey cleanroom and HVAC system projects.",
    logo: "/logos/project.png",
  },
  {
    year: "2024",
    title: "NEBB Certification Candidate",
    desc: "Advanced qualification process to achieve NEBB compliance for cleanroom validation.",
    logo: "/logos/nebb.png",
  },
];

export default function TimelineSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="timeline-slider" id="journey">
      <div className="timeline-container">
        <h2 className="timeline-title">OUR JOURNEY</h2>

        {/* Arrows outside Swiper */}
        <div ref={prevRef} className="nav-arrow-left swiper-button-prev-custom">
          <HiChevronLeft />
        </div>

        <div
          ref={nextRef}
          className="nav-arrow-right swiper-button-next-custom"
        >
          <HiChevronRight />
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={4}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 },
            576: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            992: { slidesPerView: 3, spaceBetween: 30 },
            1200: { slidesPerView: 4, spaceBetween: 30 },
          }}
        >
          {timelineData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="timeline-card animate-card">
                <div className="card-box">
                  {/* <img src={item.logo} alt={item.title} className="card-logo" /> */}
                  <div></div>
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-desc">{item.desc}</p>
                </div>
                <div className="card-arrow" />
                <div className="timeline-year-dot">
                  <HiCalendar className="calendar-icon" />
                  <span>{item.year}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
