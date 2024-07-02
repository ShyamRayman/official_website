import React from "react";
import "./Footer.css";
import { FaFacebookSquare, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div
        className="container-fluid pt-3 pb-2 custom-footer animate__animated animate__fadeIn"
        style={{ backgroundColor: "#282828", color: "white" }}
      >
        <div className="container footer-content pt-1" id="contact-section">
          <div className="row">
            <div className="col-lg-4 offset-lg-0 offset-md-3 col-md-9 ps-lg-4 ps-3 custom-col animate__animated animate__slideInLeft">
              <h4 className="footer-title">
                <strong>Contact Us</strong>
              </h4>
              <p className="contact-details">
                <small>
                  Mumbai
                  <br />
                  India
                  <br />
                </small>
              </p>
              <p className="contact-email">
                <small>
                  E mail: <br />
                  <a
                    href="mailto:info@idacreations.com"
                    className="email-link text-light"
                  >
                    info@xyz.com
                  </a>
                </small>
              </p>
              <p className="social-icons pt-5 pb-1">
                <a href="#" className="social-icon">
                  <FaFacebookSquare className="fs-3 text-light icon-hover" />
                </a>{" "}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <FaTwitter className="fs-3 text-light icon-hover" />
                </a>{" "}
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <FaLinkedin className="fs-3 text-light icon-hover me-5" />
                </a>
              </p>
            </div>

            <div className="col-lg-4 offset-lg-0 offset-md-3 col-md-9 custom-col animate__animated animate__slideInUp">
              <h5 className="footer-title">Locate us on Map</h5>

              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d482634.93197117816!2d72.55150078848776!3d19.081957694752912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1719909566570!5m2!1sen!2sin"
                width="330"
                height="220"
                style={{ border: 0, borderRadius: "10px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="col-lg-4 pt-3 custom-col animate__animated animate__slideInRight">
              <div className="row footer-actions text-center pt-4">
                <div className="col-lg-4 action-item">
                  <a href="#">
                    <img
                      className="action-icon"
                      src="https://idacreations.com/img/email.png"
                      alt="Send Enquiry"
                    />
                  </a>
                  <p className="action-text pt-2 text-center">
                    <small>
                      <small>Send Enquiry</small>
                    </small>
                  </p>
                </div>

                <div className="col-lg-4 action-item">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="action-icon"
                      src="https://idacreations.com/img/instagram.png"
                      alt="Insta Profile"
                    />
                  </a>
                  <p className="action-text pt-2 text-center">
                    <small>
                      <small>Insta Profile</small>
                    </small>
                  </p>
                </div>

                <div className="col-lg-4 action-item">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <img
                      className="action-icon"
                      src="https://idacreations.com/img/whatsapp.png"
                      alt="Whatsapp"
                    />
                  </a>
                  <p className="action-text pt-2 text-center">
                    <small>
                      <small>Whatsapp</small>
                    </small>
                  </p>
                </div>
              </div>

              <div className="row join-now">
                <div className="col-lg-4 offset-lg-8 col-12 pb-5 text-center">
                  <a href="#" className="join-now-link">
                    <p className="join-now-text">
                      <small>
                        <strong>Join now</strong>
                      </small>
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
