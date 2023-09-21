import React, { useEffect, useState } from "react";
import logo from "/img/logo/logo.png";
import { HashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import OffCanvasMenu from "./OffCanvasMenu";

const MainMenu = (props) => {
  const [isSearchVisible, setIsSearchVisible] = useState(true);
  const toggleIcon = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    event.target.reset();
  };

  const { parentMenu } = props;
  const location = useLocation();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`hd-sec ${isSticky ? "sticky-menu" : ""}`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-3 col-4">
              <div className="logo">
                <Link to="/#">
                  <img src={logo} alt="logo" />
                </Link>
              </div>
            </div>
            <div className="col-lg-7 d-none d-lg-block nav-menu">
              <div className="menu">
                <nav id="main-menu" className="main-menu">
                  <ul>
                    <li>
                      <Link
                        className={parentMenu === "home" ? "active" : ""}
                        to="/#"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          location.pathname === "/about" ? "active" : ""
                        }
                        to="/about#"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={parentMenu === "service" ? "active" : ""}
                        to="/service#"
                      >
                        Service
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={parentMenu === "project" ? "active" : ""}
                        to="/project#"
                      >
                        Project
                      </Link>
                      
                    </li>
                    
                    <li>
                      <Link
                        className={
                          location.pathname === "/contact" ? "active" : ""
                        }
                        to="/contact#"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
                <div className="search-bar-icon d-none d-lg-inline-block">
                  <div className="site-search">
                    <span
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      onClick={toggleIcon}
                    >
                      {isSearchVisible ? (
                        <i className="icofont-search-2"></i>
                      ) : (
                        <i className="icofont-close-line"></i>
                      )}
                    </span>
                    <div
                      className="search-forum dropdown-menu animation slideUpIn"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <form onSubmit={handleSearch}>
                        <input
                          placeholder="Search Here"
                          type="text"
                          name="search"
                        />
                        <input type="submit" value="Go" />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 d-none d-lg-block apply-button-area">
              <div className="apply-button">
                <Link to="/contact#">
                  <i className="icofont-live-support"></i>Get Support
                </Link>
              </div>
            </div>
            <div className="col-8 d-lg-none">
              <div className="offcanvas-menu-area">
                <OffCanvasMenu />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainMenu;
