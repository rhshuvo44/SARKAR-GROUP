import React from "react";
import { useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const LoadMoreProduct = () => {
  const location = useLocation();
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="gallery-load-more-btn">
            {location.pathname == "/" && (
              <Link to="/project">
                Load More Project <i className="icofont-thin-double-right"></i>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadMoreProduct;
