import React from "react";

export default function Hero() {
  return (
    <>
      <div className="hero-container">
        <div className="text-center">
          <div className="hero-button-container">
            <button className="hero-button">Premium Education Provider</button>
          </div>

          <h1 className="hero-heading">Mindmine Academy for</h1>
          <h1 className="hero-gradient-text">Competitive Exams</h1>
          <div className="hero-text">
            <p>
              52A Indian Mirror Street, Opposite GD Hospital, Taltala, Kolkata
            </p>
            <p>
              Empowering students to crack the toughest government exams with
              expert strategy.
            </p>
          </div>
          <div className="hero-actions">
            <button className="primary-btn">
              Get Started <i className="fa-solid fa-arrow-right"></i>
            </button>

            <a href="tel:+917605057139" className="phone-btn">
           
                <i className="fa-solid fa-phone-volume"></i>
                <span>7605057139</span>{" "}
              
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
