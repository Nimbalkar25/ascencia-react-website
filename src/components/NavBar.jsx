import React, { useState } from 'react';
import logo from "../assets/Ascencia-Malta-Logo.svg";
import { NavLink } from 'react-router-dom';
import "../styles/NavBar.css";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };


    const menuItems = [
        "Ascencia Malta",
        "Programmes",
        "English School",
        "Living in Malta",
        "Quality Assurance",
        "FEES",
        "Events",
    ];

    return (
        <nav className="nav-container">

            <div className="nav-logo-container">
                <NavLink to="/">
                    <img src={logo} alt="Ascencia Malta" />
                </NavLink>
            </div>

            
            <div className="hamburger" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            
            <ul className="nav-menu desktop-only">
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <NavLink to={`/${item.toLowerCase().replace(/\s/g, "-")}`}>
                            {item}
                        </NavLink>
                    </li>
                ))}
            </ul>

          
            <div className="nav-actions desktop-only">
                <NavLink to="/about" className="action-btn">About</NavLink>
                <NavLink to="/contact" className="action-btn">Contact Us</NavLink>
            </div>


            {menuOpen && (
                <div className={`mobile-only ${menuOpen && "active"}`}>
                    
                    <div className="close-btn" onClick={toggleMenu}>×</div>

                    <ul>
                        <li>
                            <NavLink to="/about" onClick={toggleMenu}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" onClick={toggleMenu}>Contact Us</NavLink>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default NavBar;
