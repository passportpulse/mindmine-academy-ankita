import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
import "../../styles/contact/contact.css";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setError("All fields are required");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Enter a valid email address");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!validate()) return;

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json(); // now actually used

      if (!data.success) {
        throw new Error(data.message || "Submission failed");
      }

      setSuccess(true);
    } catch (err) {
      setError(err.message || "Failed to send message. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section">
      <div className="container">
        {/* LEFT INFO */}
        <div className="contact-left">
          <div className="contact-card">
            <FaMapMarkerAlt className="icon" />
            <h4>Campus Location</h4>
            <p>
              Moulali Campus
              <br />
              52A Indian Mirror Street, Taltala, Opp. G.D. Hospital Kolkata –
              700013
            </p>
          </div>

          <div className="contact-card">
            <FaPhoneAlt className="icon" />
            <h4>Admissions Helpdesk</h4>
            <p>
              +91 7595077657
              <br />
              +91 7605057139
              <br />
              info.mindmine2026@gmail.com
            </p>
          </div>

          <div className="contact-card">
            <FaClock className="icon" />
            <h4>Office Hours</h4>
            <p>
              Moulali & Joka Mon – Sat: 10.00 AM – 7:30 PM
              <br />
              Bagnan Mon – Sat: 9.30 AM – 6:30 PM
              <br />
              Sunday Closed
            </p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="contact-right">
          {success ? (
            <div className="success-box">
              <h2>✅ Message Sent!</h2>
              <p>Thank you for contacting Mindmine Academy.</p>
              <p>We’ll get back to you shortly.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send us a Message</h3>

              <label>Full Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
              />

              <label>Email</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
              />

              <label>Subject</label>
              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />

              <label>Your Message</label>
              <textarea
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
              />

              <button className="btn-submit" disabled={loading}>
                {loading ? "Sending..." : "Submit Message"}
              </button>

              {error && <div className="error-box">{error}</div>}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
