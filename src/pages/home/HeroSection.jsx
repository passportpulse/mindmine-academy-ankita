import React from "react";
import "../../styles/home/hero-section.css";
import heroImg from "../../assets/home-hero.avif";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();
  return (
    <section className="home-hero-section">
      <div className="container hero-container">
        {/* LEFT CONTENT */}
        <div className="hero-left animate-text">
          <h4 className="hero-subtitle">
            MINDMINE ACADEMY
          </h4>

          <h1 className="hero-title">
            UGC Approved B.Voc Degree Programs
            <br /> in <span> Technology & Nursing </span>
          </h1>

          <p className="hero-description">
            Join India's premier skill–based education institute offering
            UGC–approved degrees that connect academia with real industry
            experience.
          </p>

          <div className="hero-buttons">
            <button
              className="get-admission-btn"
              onClick={() => navigate("/apply-now")}
            >
              Get Admission
            </button>

            <button
              className="explore-courses-btn"
              onClick={() => navigate("/admission-guidance")}
            >
              Explore Courses
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-right animate-image">
          <img src={heroImg} alt="Campus" />
        </div>
      </div>

      {/* STATS */}
      <div className="hero-stats">
        <div className="stat">
          <h2>15+</h2>
          <p>Years Experience</p>
        </div>
        <div className="stat">
          <h2>100%</h2>
          <p>Placement Asst.</p>
        </div>
        <div className="stat">
          <h2>3</h2>
          <p>Campuses</p>
        </div>
      </div>
    </section>
  );
}
