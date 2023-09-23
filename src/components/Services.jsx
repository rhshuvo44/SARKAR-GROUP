import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import ServicesData from "../jsonData/ServicesData.json";
import SingleService from "./SingleService";

const Services = () => {
  return (
    <>
      <section className="service-sec pt-100 pb-100">
        <div className="container">
          <div className="row latest-project-title-sec">
            <div className="col-lg-4 col-md-3">
              <div className="latest-project-title">
                <span>Get Service</span>
                <h1>Our Service</h1>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="latest-project-subtitle">
                <p>
                  Under the visionary leadership of the Founder and Chairman, MD
                  SHAH ALAM, Sarkar Group and its subsidiaries have become one
                  of the most renowned Shipping and Logistics service providers
                  in Bangladesh.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className="latest-project-button">
                <Link to="#">
                  View All Service <i className="icofont-long-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            {ServicesData.slice(0, 4).map((service) => (
              <div className="col-md-6 col-lg-3" key={service.id}>
                <SingleService service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
