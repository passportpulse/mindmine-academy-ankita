import React from "react";
import "../../../styles/student-zone/notices.css";
import notice from "../../../assets/notice.jpeg";
import Hero from "../Hero";

export default function Notices() {
  // Example data coming from backend
  const notices = [
    {
      id: 1,
      title: "Semester registration deadline",
      date: "31 Jan 2026",
      image: notice,
    },
    {
      id: 2,
      title: "New courses available from next session",
      date: "10 Feb 2026",
      image: notice,
    },
    {
      id: 3,
      title: "Payment deadlines extended",
      date: "15 Feb 2026",
      image: notice,
    },
  ];

  return (
    <>
      <Hero
        title="Notices"
        description="Check the latest updates and notifications."
      />
      <section className="notices-section">
        <div className="notices-header">
          <h2>Notice Board</h2>
        </div>
        <div className="notices-grid">
          {notices.map((notice) => (
            <div key={notice.id} className="notice-card">
              <div className="notice-image">
                <img src={notice.image} alt={notice.title} />
              </div>
              <div className="notice-content">
                <h3>{notice.title}</h3>
                <span>{notice.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
