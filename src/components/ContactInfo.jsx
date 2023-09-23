import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info">
        <div className="contact-info-item">
          <div className="contact-info-icon">
            <i className="icofont-map-pins"></i>
          </div>
          <div className="contact-info-text">
            <h2>address</h2>
            <span>
              6/A S.K. Road, Friends Market, 5th Floor ,Narayanganj-1400
            </span>
          </div>
        </div>
      </div>
      <div className="contact-info">
        <div className="contact-info-item">
          <div className="contact-info-icon">
            <i className="icofont-email"></i>
          </div>
          <div className="contact-info-text">
            <h2>e-mail</h2>
            <span>
              <a href="mailto:info@sarkargroupofcompanies.com">
                info@sarkargroupofcompanies.com
              </a>
            </span>
            <span>
              <a href="mailto:sarkarengineeringworks017@gmail.com">
                sarkarengineeringworks017@gmail.com
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="contact-info">
        <div className="contact-info-item">
          <div className="contact-info-icon">
            <i className="icofont-wall-clock"></i>
          </div>
          <div className="contact-info-text">
            <h2>office time</h2>
            <span>Sat - Thu 10:00 am - 6.00 pm</span>
            <span>Friday Office Holiday</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
