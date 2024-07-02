import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import { FaFacebookSquare, FaTwitter, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <div className="top">
      <nav className="navbar container-fluid">
        <div className="logo fs-3 fw-bolder">XYZ</div>
        <div className={`burger ${isOpen ? "toggle" : ""}`} onClick={toggleNav}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>

        <ul className={`nav-links ${isOpen ? "nav-active" : ""}`}>
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="nav-link"
              onClick={closeNav}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="nav-link"
              onClick={closeNav}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="nav-link"
              onClick={closeNav}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="clients"
              smooth={true}
              duration={500}
              className="nav-link"
              onClick={closeNav}
            >
              Clients
            </Link>
          </li>
          <li>
            <Link
              to="careers"
              smooth={true}
              duration={500}
              className="nav-link"
              onClick={closeNav}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="nav-link"
              onClick={closeNav}
            >
              Contact Us
            </Link>
          </li>
          <li className="mt-2">
            <a href="#" className="social-icon">
              <FaFacebookSquare className="fs-5 text-dark icon-hover" />
            </a>{" "}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaTwitter className="fs-5 text-dark icon-hover" />
            </a>{" "}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaLinkedin className="fs-5 text-dark icon-hover" />
            </a>
          </li>
        </ul>
      </nav>

      <div className="subject">
        <h3 className="subject1">"Bringing Ideas To Our Reality"</h3>
      </div>
    </div>
  );
};

export default Navbar;
