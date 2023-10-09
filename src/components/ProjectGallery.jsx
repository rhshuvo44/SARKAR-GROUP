import React from "react";
import GalleryContent from "./GalleryContent";
import LoadMoreProduct from "./LoadMoreProduct";

const ProjectGallery = () => {
  return (
    <>
      <section className="gallery-sec pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sec-title">
                <span>Company Project</span>
                <h1>Company Project Gallery</h1>
                <div className="border-shape"></div>
                <p>
                  Under the visionary leadership of the Founder and Chairman,
                  <b>MD SHAH ALAM</b>, Sarkar Group and its subsidiaries have
                  become one of the most renowned Shipping and Logistics service
                  providers in Bangladesh.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="gallery-area">
              <GalleryContent />

              <LoadMoreProduct />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectGallery;
