import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import aboutThumb from "/img/about/about.jpg";

const AboutUsV2 = () => {
  return (
    <>
      <section className="about-us-sec pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="about-desc">
                <div className="sec-title">
                  <h1>About Our Company</h1>
                </div>
                <p>
                  Renowned Shipping and Logistics service providers in
                  Bangladesh. From a humble beginning in 1991, Sarkar Group of
                  Companies has become a pioneer and leader in the fields of
                  Shipping and Logistics business in Bangladesh over the past 30
                  years. What started with one small office room with just one
                  office staff, today Sarkar Group of Companies spans its wing
                  across the whole country, having 5 companies, 3 branch offices
                  and with almost 135 employees.
                </p>
                <div className="read-more-btn">
                  <Link to="/contact#">Contact Us</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="about-us-img">
                <img src={aboutThumb} alt="about" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsV2;
