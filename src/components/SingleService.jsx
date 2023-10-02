import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const SingleService = ({ service }) => {
  const { id, image, icon, title, text } = service;

  return (
    <>
      <div className="service-item">
        <div className="inner">
          <div className="media">
            <div className="service-thumb">
              <Link to={`/service-details/${id}`}>
                <img src={`/img/service/${image}`} alt="service" />
              </Link>
            </div>
            <div className="service-inner-text ">
              <div className="media-wrap d-flex align-items-center">
                <div className="media-left me-2 mb-2">
                  <div className="service_icon">
                    <i className={icon}></i>
                  </div>
                </div>
                <div className="media-body">
                  <h2>
                    <Link to={`/service-details/${id}`}>{title}</Link>
                  </h2>
                </div>
              </div>
              <ul className="">
                {text?.map((item) => (
                  <li className="py-1" key={item}>
                    <i className="icofont-rounded-double-right"></i>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to={`/service-details/${id}`} className="service-read-more">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleService;
