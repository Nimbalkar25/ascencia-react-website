import React from "react";
import bg from "../assets/background-image.avif";
import  "../styles/HomePage.css";
import Button from '../components/Button'

const HomePage = () => {
  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>Welcome to Ascencia Malta</h1>
        <p>Business Education Excellence</p>
        <Button className="home-button" text="Explore Programs" link ="/"/>
        
      </div>
    </div>
  );
};

export default HomePage;
