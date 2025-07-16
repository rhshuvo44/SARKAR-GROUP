import AboutUs from "../components/AboutUs";
import Banner from "../components/Banner";
import CallToAction from "../components/CallToAction";
import DockyardProjects from "../components/DockyardProjects";
import EngineeringProjects from "../components/EngineeringProjects";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LogisticsProject from "../components/LogisticsProject";
import NavigationProjects from "../components/NavigationProjects";
import Partner from "../components/Partner";
import ProjectGallery from "../components/ProjectGallery";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";

const Home = () => {
  return (
    <>
      <Header parentMenu="home" />
      <Banner />
      <AboutUs />
      <Services />
      <WhyChooseUs />
      <CallToAction />
      <NavigationProjects />
      <EngineeringProjects />
      <LogisticsProject />
      <DockyardProjects />
      <ProjectGallery />
      <Partner />
      <Footer />
    </>
  );
};

export default Home;
