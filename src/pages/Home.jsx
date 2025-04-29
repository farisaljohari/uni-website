import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ValueProposition from "../components/ValueProposition";
import Services from "../components/Services";
import TimelineSlider from "../components/TimelineSlider";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ValueProposition />
      <Services />
      <TimelineSlider />
      <Footer />
    </>
  );
};

export default Home;
