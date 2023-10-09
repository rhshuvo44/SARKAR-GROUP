import React from "react";
import AboutUs from "../components/AboutUs";
import Banner from "../components/Banner";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Partner from "../components/Partner";
import ProjectGallery from "../components/ProjectGallery";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import LatestProject from "../components/LatestProject";
import OnGoingProject from "../components/OnGoingProject";

const Home = () => {
  return (
    <>
      <Header parentMenu="home" />
      <Banner />
      <AboutUs />
      <Services />
      <WhyChooseUs />
      <CallToAction />
      <LatestProject />
      <OnGoingProject />
      <ProjectGallery />
      <Partner />
      <Footer />
    </>
  );
};

export default Home;
