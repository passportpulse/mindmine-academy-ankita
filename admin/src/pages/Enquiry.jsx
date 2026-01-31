import { useEffect, useState } from "react";
import "../styles/enquiry.css";

const API = "https://mindmine-academy.onrender.com";

export default function Enquiry() {
  const [enquiries, setEnquiries] = useState([]);
  const token = localStorage.getItem("adminToken");

  useEffect(() => {
    fetch(`${API}/api/enquiry`, {
      headers: { Authorization: "Bearer " + token },
    })
      .then(res => res.json())
      .then(data => setEnquiries(data))
      .catch(err => console.error(err));
  }, [token]);

  return (
    <div className="enquiry-container">
      <h2>All Enquiries</h2>

      <div className="table-wrapper">
        <table className="enquiry-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Message</th>
              <th>Submitted At</th>
            </tr>
          </thead>
          <tbody>
            {enquiries.map(e => (
              <tr key={e._id}>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.subject}</td>
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
