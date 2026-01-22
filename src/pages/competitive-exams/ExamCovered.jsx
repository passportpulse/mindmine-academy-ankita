import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { BookOpenIcon } from "@heroicons/react/24/outline";

export default function ExamCovered() {
  const generalExams = [
    "SSC",
    "RRB",
    "IBPS",
    "WBCS",
    "KP",
    "CGL",
    "CHSL",
    "ARMY",
    "NAVY",
    "Airforce",
    "TET",
    "School Service",
  ];

  const specialExams = [
    "NDA",
    "CDS",
    "MES",
    "UPSC(IAS/IPS)",
    "Bank PO",
    "IELTS",
    "GRE",
    "CAT",
    "MAT",
    "GMAT",
    "UCG NET",
  ];

  const renderGrid = (exams) => {
    return (
      <div className="exam-grid">
        {exams.map((exam, idx) => (
          <div className="exam-box" key={idx}>
            <FaCheckCircle className="tick-icon" />
            <span>{exam}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="exam-section">
      <div className="section-header">
        <BookOpenIcon className="section-icon" />

        <h2>Competitive Exams Covered</h2>
        <span className="header-line"></span>
      </div>

      {/* General Courses */}
      <div className="exam-category">
        <h3>General Courses</h3>
        {renderGrid(generalExams)}
      </div>

      {/* Special Courses */}
      <div className="exam-category">
        <h3>Special Courses</h3>
        {renderGrid(specialExams)}
      </div>
    </section>
  );
}
