import Breadcrumb from "../components/Breadcrumb";
import DockyardProjects from "../components/DockyardProjects";
import EngineeringProjects from "../components/EngineeringProjects";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LogisticsProject from "../components/LogisticsProject";
import NavigationProjects from "../components/NavigationProjects";
import ProjectContent from "../components/ProjectContent";

const Project = () => {
  return (
    <>
      <Header parentMenu="project" />
      <Breadcrumb pageTitle="Project Page" />
      <NavigationProjects />
      <EngineeringProjects />
      <LogisticsProject />
      <DockyardProjects />
      {/* <LatestProject />
      <OnGoingProject /> */}
      <ProjectContent />
      <Footer />
    </>
  );
};

export default Project;
