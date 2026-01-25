import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
import "../../styles/contact/contact.css";

export default function ContactSection() {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-left">
          <div className="contact-card">
            <FaMapMarkerAlt className="icon" />
            <h4>Campus Location</h4>
            <p>
              Mindmine Academy, NH-6, Bagnan,
              <br />
              Howrah – 711303, West Bengal
            </p>
          </div>

          <div className="contact-card">
            <FaPhoneAlt className="icon" />
            <h4>Admissions Helpdesk</h4>
            <p>
              +91 7595077569
              <br />
              +91 7603035218
              <br />
              info@mindmineacademy.com
            </p>
          </div>

          <div className="contact-card">
            <FaClock className="icon" />
            <h4>Office Hours</h4>
            <p>
              Mon – Sat: 9:30 AM – 6:00 PM
              <br />
              Sunday Closed
            </p>
          </div>
        </div>

        <div className="contact-right">
          <h3>Send us a Message</h3>
          <form className="contact-form">
            <label>Full Name</label>
            <input type="text" placeholder="Your Name" />

            <label>Email</label>
            <input type="email" placeholder="email@example.com" />

            <label>Subject</label>
            <input type="text" placeholder="Admission Inquiry" />

            <label>Your Message</label>
            <textarea placeholder="How can we help you?" rows={5}></textarea>

            <button type="submit" className="btn-submit">
              Submit Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
