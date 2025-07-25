import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import Product from "../pages/Product";
import ProductDetails from "../pages/ProductDetails";
import Project from "../pages/Project";
import ProjectDetails from "../pages/ProjectDetails";
import Service from "../pages/Service";
import ServiceDetails from "../pages/ServiceDetails";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/service-details/:id" element={<ServiceDetails />} />
        <Route path="/project" element={<Project />}></Route>
        <Route path="/project-details" element={<ProjectDetails />} />
        <Route path="/product" element={<Product />}></Route>
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
};

export default Routers;
