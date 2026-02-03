import React, { useState } from "react";
import "../../../styles/student-zone/enquiry.css";
import Hero from "../Hero";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Enquiry() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false); // boolean

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    // ✅ FRONTEND VALIDATION
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      toast.error("All fields are required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Enter a valid email address");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(
        "https://mindmine-academy.onrender.com/api/enquiry",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        },
      );

      let data = {};
      try {
        data = await res.json(); // parse JSON only if present
      } catch {
        console.warn("No JSON response received");
      }

      if (!res.ok) {
        throw new Error(data.message || `Server returned ${res.status}`);
      }

      // ✅ Success
      toast.success(data.message || "Your enquiry has been sent successfully!");
      setSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("Form submission error:", err);
      toast.error(err.message || "Failed to send enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Hero
        title="Enquiry"
        description="Submit your queries or questions here."
      />

      <section className="enquiry-section">
        <div className="enquiry-card">
          {success && (
            <div className="success-box">
              <h2>Thank You!</h2>
              <p>Your enquiry has been sent successfully.</p>
            </div>
          )}

          {!success && (
            <form className="enquiry-form" onSubmit={handleSubmit}>
              <label>Full Name *</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
              />

              <label>Email *</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />

              <label>Subject *</label>
              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
              />

              <label>Message *</label>
              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message"
              />

              <button className="btn-submit" disabled={loading}>
                {loading ? "Sending..." : "Submit Message"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />
    </>
  );
}
