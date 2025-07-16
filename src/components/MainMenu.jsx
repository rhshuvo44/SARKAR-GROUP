import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import OffCanvasMenu from "./OffCanvasMenu";
import logo from "/img/logo/logo.png";

const MainMenu = (props) => {
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
                        className={parentMenu === "product" ? "active" : ""}
                        to="/product#"
                      >
                        Product
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
              </div>
            </div>
            <div className="col-lg-2 d-none d-lg-block apply-button-area">
              <div className="apply-button">
                <Link to="https://dashboard.sarkargroupofcompanies.com/dashboard">
                  <i className="icofont-user"></i>LogIn
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
