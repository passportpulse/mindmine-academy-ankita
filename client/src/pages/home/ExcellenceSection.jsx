import React from "react";
import {
  FaUniversity,
  FaTools,
  FaLaptopCode,
  FaChalkboardTeacher,
} from "react-icons/fa";
import "../../styles/home/excellence-section.css";

export default function ExcellenceSection() {
  const features = [
    {
      icon: <FaUniversity />,
      title: "Recognized Learning Programs",
      desc: "Our programs follow structured, industry-aligned standards to ensure quality education and career readiness.",
    },
    {
      icon: <FaTools />,
      title: "Practical Skill Development",
      desc: "Hands-on training focused on real-world projects and modern tools used by professionals.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Updated Tech Curriculum",
      desc: "Covering trending technologies like Web Development, AI, Data Science, Design, and more.",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Experienced Mentors",
      desc: "Learn from skilled instructors with real industry experience and teaching expertise.",
    },
  ];

  return (
    <section className="excellence-section">
      <div className="container">

        {/* HEADER */}
        <div className="excellence-header">
          <h4>Why Choose Us</h4>
          <h2>Learning That Builds Real Skills</h2>
          <p>
            We focus on practical education, modern technologies, and expert guidance 
            to help students grow confidently in today’s competitive world.
          </p>
        </div>

        {/* GRID CARDS */}
        <div className="excellence-grid">
          {features.map((item, index) => (
            <div className="excellence-card" key={index}>
              <div className="excellence-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
