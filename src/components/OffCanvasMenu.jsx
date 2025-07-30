import { useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import logoMini from "/img/logo/mini-logo.png";

const OffCanvasMenu = () => {
  const location = useLocation();

  return (
    <>
      <Link
        className="offcanvas-btn"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <i className="fa-solid fa-bars"></i>
      </Link>

      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <Link to="/#">
            <img className="" src={logoMini} alt="logo" />
          </Link>
          <button
            type="button"
            className="offcanvasClose"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="offcanvas-body">
          <nav className="navbar">
            <div className="container-fluid">
              <div
                className="collapse navbar-collapse show"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/#">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={
                        location.pathname === "/about"
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/about#"
                    >
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={
                        location.pathname === "/service"
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/service#"
                    >
                      Services
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={
                        location.pathname === "/project"
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/project#"
                    >
                      Projects
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      className={
                        location.pathname === "/contact"
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/contact#"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
                <div className=" d-block apply-button-area">
                  <div className="apply-button">
                    <Link
                      className="btn btn-lg mt-2 btn-info"
                      to="https://dashboard.sarkargroupofcompanies.com/dashboard"
                    >
                      <i className="icofont-user"></i>LogIn
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default OffCanvasMenu;
