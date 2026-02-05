import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/enquiry.css";

const API = "https://mindmine-academy.onrender.com/";

export default function Enquiry() {
  const [enquiries, setEnquiries] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("adminToken");

  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        const res = await fetch(`${API}/api/enquiry`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // 🔐 Token expired / invalid → logout
        if (res.status === 401) {
          localStorage.removeItem("adminToken");
          navigate("/");
          return;
        }

        const data = await res.json();

        // 🛡 Always ensure array (prevents map crash)
        setEnquiries(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Fetch error:", err);
        setEnquiries([]);
      }
    };

    if (token) {
      fetchEnquiries();
    } else {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <div className="enquiry-container">
      <h2>All Enquiries</h2>

      <div className="table-wrapper">
        <table className="enquiry-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Last Qualification</th>
              <th>Course</th>
              <th>Message</th>
              <th>Submitted At</th>
            </tr>
          </thead>

          <tbody>
            {enquiries.length === 0 && (
              <tr>
                <td colSpan="7" style={{ textAlign: "center" }}>
                  No enquiries found
                </td>
              </tr>
            )}

            {enquiries.map((e) => (
              <tr key={e._id}>
                <td>{e.name}</td>
                <td>{e.phone}</td>
                <td>{e.email}</td>
                <td>{e.lastQualification}</td>
                <td>{e.course}</td>
                <td>{e.message}</td>
                <td>{new Date(e.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
