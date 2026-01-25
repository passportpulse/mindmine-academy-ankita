import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "../../styles/process/admission-cta.css";

export default function AdmissionCTA() {
  return (
    <section className="admission-cta">
      <div className="container">
        <div className="cta-container">
          <h2>Ready to Apply?</h2>
          <p className="cta-subtitle">
            Admissions open for <strong>B.Voc</strong> &{" "}
            <strong>GNM Nursing</strong> — Limited seats available.
          </p>

          <div className="cta-contact">
            <a href="tel:7595077569" className="cta-item">
              <FaPhoneAlt />
              <span>7595077569</span>
            </a>

            <a
              href="mailto:info@mindmineacademy.com"
              className="cta-item"
            >
              <FaEnvelope />
              <span>info@mindmineacademy.com</span>
            </a>
          </div>

          <button
            className="apply-now-btn"
            onClick={() => (window.location.href = "/apply-now")}
          >
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
}
