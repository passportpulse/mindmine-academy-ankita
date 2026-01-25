import React from "react";
import "../../../styles/student-zone/enquiry.css";
import Hero from "../Hero";

export default function Enquiry() {
  return (
    <>
      <Hero
        title="Enquiry"
        description="Submit your queries or questions here."
      />
      <section className="enquiry-section">
        <div className="enquiry-card">
          <h2>Send us a Message</h2>
          <form className="enquiry-form">
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
      </section>
    </>
  );
}
