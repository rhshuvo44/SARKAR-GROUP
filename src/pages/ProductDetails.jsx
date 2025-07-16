import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import ProjectDetailsContent from "../components/ProjectDetailsContent";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ProductDetails = () => {
  return (
    <>
      <Header parentMenu="product" />
      <Breadcrumb pageTitle="Product Details" />
      <ProjectDetailsContent />
      <Footer />
    </>
  );
};

export default ProductDetails;
