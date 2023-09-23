import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const AboutTabs = () => {
  return (
    <>
      <ul
        className="nav nav-pills mb-3 about-tab"
        id="pills-tab"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <a
            className="nav-link active"
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            History
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            id="pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-profile"
            type="button"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            Mission
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            id="pills-contact-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-contact"
            type="button"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
          >
            Vission
          </a>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
          tabIndex="0"
        >
          <div className="about-desc">
            <h1>About Our Company</h1>
            <p>
              Renowned Shipping and Logistics service providers in Bangladesh.
            </p>
            <p>
              From a humble beginning in 1991, Sarkar Group of Companies has
              become a pioneer and leader in the fields of Shipping and
              Logistics business in Bangladesh over the past 30 years. What
              started with one small office room with just one office staff,
              today Sarkar Group of Companies spans its wing across the whole
              country, having 5 companies, 3 branch offices and with almost 135
              employees.
            </p>

            <Link to="#">Read More</Link>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
          tabIndex="0"
        >
          <div className="about-desc">
            <h1>About Our Mission</h1>
            <p>
              We aim to be a world class company providing efficient,
              affordable, sustainable, cost effective services of highet level
              of quality.
            </p>

            <Link to="#">Read More</Link>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-contact"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
          tabIndex="0"
        >
          <div className="about-desc">
            <h1>About Our Vission</h1>
            <p>
              Our mission is to import world class construction equipments,
              road&apos;s & highways equipments with honesty. We also import
              best quality spare parts for all construction equipments.
            </p>

            <Link to="#">Read More</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutTabs;
