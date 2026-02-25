import React from "react";
import "../styles/ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contact-container">


      <div className="contact-hero">
        <h1>Contact Pratik Us</h1>
        <p>We’d love to hear from you. Get in touch with us today.</p>
      </div>


      <div className="contact-content">


        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p><strong>Email:</strong> info@ascenciamalta.com</p>
          <p><strong>Phone:</strong> +356 1234 5678</p>
          <p><strong>Location:</strong> Malta</p>
        </div>


        <div className="contact-form">
          <h2>Send a Message</h2>

          <form>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>

        </div>

      </div>

    </div>
  );
};

export default ContactPage;
