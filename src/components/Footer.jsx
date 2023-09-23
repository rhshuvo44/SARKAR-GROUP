import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import footerLogo from "/img/logo/ft-logo.png";
import SocialShare from "./SocialShare";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-overlay"></div>
        <div className="footer-sec">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="footer-widget-one">
                  <h2 className="footer-title-one">Company Info</h2>
                  <Link to="/#" className="footer-logo">
                    <img src={footerLogo} alt="footerLogo" />
                  </Link>
                  <p>
                    Under the visionary leadership of the Founder and Chairman,
                    MD SHAH ALAM, Sarkar Group and its subsidiaries have become
                    one of the most renowned Shipping and Logistics service
                    providers in Bangladesh.
                  </p>
                  <div className="footer-social">
                    <SocialShare />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget-two footer-widget-menu">
                  <h2>our solutions</h2>
                  <ul>
                    <li>
                      <Link to="#">Factory Energy Power</Link>
                    </li>
                    <li>
                      <Link to="#">Chemical Research</Link>
                    </li>
                    <li>
                      <Link to="#">Expert Mechanical</Link>
                    </li>
                    <li>
                      <Link to="#">civil engineering</Link>
                    </li>
                    <li>
                      <Link to="#">oil & gas services</Link>
                    </li>
                    <li>
                      <Link to="#">Repair Technology</Link>
                    </li>
                    <li>
                      <Link to="#">Refinery Petroleum</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div className="footer-widget-three footer-widget-menu">
                  <h2>useful link</h2>
                  <ul>
                    <li>
                      <Link to="/about#">about us</Link>
                    </li>
                    <li>
                      <Link to="/project#">latest project</Link>
                    </li>
                    <li>
                      <Link to="/about#">faq</Link>
                    </li>
                    <li>
                      <Link to="/contact#">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="/contact#">site map</Link>
                    </li>
                    <li>
                      <Link to="#">trust People</Link>
                    </li>
                    <li>
                      <Link to="#">Our Project</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget-four">
                  <h2>contact form</h2>
                  <div className="footer-contact-inner">
                    <div className="footer-contact-info">
                      <div className="footer-contact-info-icon">
                        <i className="icofont-google-map"></i>
                      </div>
                      <div className="footer-contact-info-text">
                        <span>6/A S.K. Road, Friends Market, 5th Floor .</span>
                        <span>Narayanganj-1400</span>
                      </div>
                    </div>
                  </div>
                  <div className="footer-contact-inner">
                    <div className="footer-contact-info">
                      <div className="footer-contact-info-icon">
                        <i className="icofont-email"></i>
                      </div>
                      <div className="footer-contact-info-text">
                        <a href="mailto:info@sarkargroupofcompanies.com">
                          info@sarkargroupofcompanies.com
                        </a>
                        <a href="mailto:sarkarengineeringworks017@gmail.com">
                          sarkarengineeringworks017@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="footer-contact-inner">
                    <div className="footer-contact-info">
                      <div className="footer-contact-info-icon">
                        <i className="icofont-telephone"></i>
                      </div>
                      <div className="footer-contact-info-text">
                        <a href="tel:+88 01788577329">+88 01788577329</a>
                        <a href="tel:+88 01688679780">+88 01688679780</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterBottom />
      </footer>
    </>
  );
};

export default Footer;
