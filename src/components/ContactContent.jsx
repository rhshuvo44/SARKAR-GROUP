import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const ContactContent = () => {
  return (
    <>
      <section className="contact-page-sec pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <ContactForm />
            </div>
            <div className="col-lg-4 col-md-12">
              <ContactInfo />
            </div>
          </div>
          <div className="contact-page-map mt-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.584673124577!2d90.50065267428819!3d23.61922369380167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b1a09b635193%3A0xea0ea96480f08d10!2zRnJpZW5kcyBNYXJrZXQv4Kar4KeN4Kaw4KeH4Kao4KeN4Kah4Ka4IOCmruCmvuCmsOCnjeCmleCnh-Cmnw!5e0!3m2!1sen!2sbd!4v1695457641998!5m2!1sen!2sbd"
              width="100%"
              height="450"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactContent;
