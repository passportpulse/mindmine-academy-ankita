import React, { useEffect, useState } from "react";
import "../../styles/student-zone/notices.css";

const API = "https://mindmine-academy.onrender.com";

export default function Notices() {
  const [notices, setNotices] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch all notices (public)
  useEffect(() => {
    async function fetchNotices() {
      try {
        const res = await fetch(`${API}/api/notice`);
        const data = await res.json();
        if (data.success) setNotices(data.notices);
      } catch (err) {
        console.error(err);
      }
    }
    fetchNotices();
  }, []);

  // Current notice (ONE at a time)
  const currentNotice = notices[currentPage - 1];

  return (
    <>
      <section className="notices-section blackboard">
        {/* Show single notice */}
        {currentNotice && (
          <div className="single-notice">
            <img
              src={`${API}/${currentNotice.image.replace(/\\/g, "/")}`}
              alt={currentNotice.title}
            />
            <div className="notice-content">
              <h3>{currentNotice.title}</h3>
              <span>
                {new Date(currentNotice.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>
        )}

        {/* Pagination */}
        <div className="pagination">
          {/* Prev arrow */}
          <button
            className="arrow"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
          >
            ←
          </button>

          {(() => {
            const pages = [];
            const total = notices.length;

            if (total <= 6) {
              for (let i = 1; i <= total; i++) pages.push(i);
            } else {
              if (currentPage <= 3) {
                pages.push(1, 2, 3, "...", total - 1, total);
              } else if (currentPage >= total - 2) {
                pages.push(1, 2, "...", total - 2, total - 1, total);
              } else {
                pages.push(
                  1,
                  "...",
                  currentPage - 1,
                  currentPage,
                  currentPage + 1,
                  "...",
                  total,
                );
              }
            }

            return pages.map((p, i) =>
              p === "..." ? (
                <span key={i} className="dots">
                  ...
                </span>
              ) : (
                <button
                  key={i}
                  className={currentPage === p ? "active" : ""}
                  onClick={() => setCurrentPage(p)}
                >
                  {p}
                </button>
              ),
            );
          })()}

          {/* Next arrow */}
          <button
            className="arrow"
            disabled={currentPage === notices.length}
            onClick={() => setCurrentPage((p) => p + 1)}
          >
            →
          </button>
        </div>
      </section>
    </>
  );
}
