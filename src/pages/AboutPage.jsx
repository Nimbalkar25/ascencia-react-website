import React from "react";
import Button from "../components/Button";
import "../styles/AboutPage.css";
import studentbg from "../assets/student-bg.jpg";

const AboutPage = () => {
  return (
    <div className="about-container">

      <div className="about-hero">
        <h1>About Ascencia Malta</h1>
        <p>
          Empowering students through quality education, global exposure,
          and professional excellence.
        </p>
        <Button text="Explore Programmes" link="/" />
      </div>

      <div className="about-content">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            Ascencia Malta is committed to delivering high-quality
            business education and professional development programs.
            We combine academic excellence with real-world experience.
          </p>

          <h2>Our Mission</h2>
          <p>
            To create global leaders by providing innovative learning
            environments and internationally recognized qualifications.
          </p>
        </div>

        <div className="about-image">
          <img
            src={studentbg}
            alt="Students learning"
          />
        </div>
      </div>

    </div>
  );
};

export default AboutPage;
