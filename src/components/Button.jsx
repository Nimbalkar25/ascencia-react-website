import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Button.css";

const Button = ({ text, link , className ="" }) => {
  return (
    <NavLink to={link} className={`custom-btn ${className}`}>
      {text}
    </NavLink>
  );
};

export default Button;