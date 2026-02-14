import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Ascencia-Malta-Logo.svg";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        
        <div className="footer-section " id="logo-info">
          <img src={logo} alt="Ascencia Malta" className="footer-logo" />
          <p>
            Ascencia Malta provides excellence in business education,
            professional development, and international opportunities.
          </p>
        </div>

        

          <div className="footer-section quick-link">
          <h4>Quick Links</h4>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/programmes">Programmes</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>

        
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: info@ascenciamalta.com</p>
          <p>Phone: +356 1234 5678</p>
          <p>Malta</p>
        </div>

      </div>


      <div className="footer-bottom">
        © {new Date().getFullYear()} Ascencia Malta. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
