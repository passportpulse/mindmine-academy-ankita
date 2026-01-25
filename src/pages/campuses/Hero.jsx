import React, { useState } from "react";
import "../../styles/campus/hero.css";
import campus1 from "../../assets/howrah-campus.jpg";
import campus2 from "../../assets/kolkata-campus.avif";

const campuses = [
  {
    name: "Howrah Main Campus",
    address: "Bagnan, Howrah – 711303",
    desc: "The primary campus located at Mindmine Academy near Ghoraghata Railway Station, offering B.Voc & GNM programs with modern classrooms, skill development spaces, and academic support environment.",
    programs: ["Vocational Degree Programs", "GNM Nursing", "Skill Labs"],
    image: campus1,
  },
  {
    name: "Kolkata City Campus",
    address: "MG Road Metro Zone, Kolkata – 700013",
    desc: "Located near central Kolkata urban belt. Designed for Software Development, Multimedia, Digital Skills & Corporate Training with metro accessibility.",
    programs: ["Smart Classrooms", "Metro Connectivity", "IT Lab"],
    image: campus2,
  },
  {
    name: "Kolkata South Campus",
    address: "Joka — James Long Sarani, Kolkata – 700104",
    desc: "An academic environment designed for future program expansion, industry skill development and accessible education for South Kolkata students.",
    programs: ["Student Hub", "South Kolkata Access", "New Expansion"],
    image: campus2,
  },
];

export default function CampusSection() {
  const [selected, setSelected] = useState(campuses[0]);

  return (
    <section className="campus-section">
      {/* Hero Section */}
      <div
        className="hero-top"
        style={{ backgroundImage: `url(${selected.image})` }}
      >
        <div className="overlay">
          <h1>Our Campuses</h1>
          <p>
            Three urban campuses for skill-based higher education across West
            Bengal.
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container">
        <div className="hero-bottom">
          {/* Left: Campus List */}
          <div className="campus-list">
            <h3>Select a Location</h3>
            {campuses.map((campus, index) => (
              <div
                key={index}
                className={`campus-item ${selected.name === campus.name ? "active" : ""}`}
                onClick={() => setSelected(campus)}
              >
                <h4>{campus.name}</h4>
                <p>{campus.address}</p>
              </div>
            ))}
          </div>

          {/* Right: Selected Campus Details */}
          <div className="campus-details">
            <h3>{selected.name}</h3>
            <p className="campus-desc">{selected.desc}</p>

            <ul className="program-list">
              {selected.programs.map((program, i) => (
                <li key={i}>
                  <span className="tick">&#10003;</span> {/* ✔ tick symbol */}
                  {program}
                </li>
              ))}
            </ul>

            <div className="btn-group">
              <button className="btn">Get Directions</button>
              <button className="btn">Download Brochure</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
