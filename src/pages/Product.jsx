import Breadcrumb from "../components/Breadcrumb";
import EngineeringProjects from "../components/EngineeringProjects";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavigationProjects from "../components/NavigationProjects";
import ProjectContent from "../components/ProjectContent";

const Product = () => {
  return (
    <>
      <Header parentMenu="product" />
      <Breadcrumb pageTitle="Product Page" />
      <NavigationProjects />
      <EngineeringProjects />
      {/* <LatestProject />
      <OnGoingProject /> */}
      <ProjectContent />
      <Footer />
    </>
  );
};

export default Product;
