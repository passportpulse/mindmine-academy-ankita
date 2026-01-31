import { useEffect, useState } from "react";
import "../styles/applications.css";

const API = "https://mindmine-academy.onrender.com";

export default function Applications() {
  const [applications, setApplications] = useState([]);
  const [selectedApp, setSelectedApp] = useState(null);
  const token = localStorage.getItem("adminToken");

  useEffect(() => {
    fetch(`${API}/api/application`, {
      headers: { Authorization: "Bearer " + token },
    })
      .then((res) => res.json())
      .then((data) => setApplications(data))
      .catch((err) => console.error(err));
  }, [token]);

  const updateStatus = async (id, action) => {
    const res = await fetch(`${API}/api/application/${id}/${action}`, {
      method: "PATCH",
      headers: { Authorization: "Bearer " + token },
    });
    const updatedApp = await res.json();
    setApplications((apps) =>
      apps.map((app) => (app._id === id ? updatedApp : app)),
    );
  };

  return (
    <div className="applications-container">
      <h2>All Applications</h2>
      <div className="applications-table-wrapper">
        <table className="applications-table">
          <thead>
            <tr>
              <th>Tracking ID</th>
              <th>Name</th>
              <th>Status</th>
              <th>Application ID</th>
              <th>Action</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app._id}>
                <td data-label="Tracking ID">{app.trackingId}</td>
                <td data-label="Name">{app.fullName}</td>
                <td data-label="Status">{app.status}</td>
                <td data-label="Application ID">{app.applicationId || "-"}</td>
                <td data-label="Action">
                  {app.status === "pending" ? (
                    <>
                      <button
                        className="approve"
                        onClick={() => updateStatus(app._id, "approve")}
                      >
                        Approve
                      </button>
                      <button
                        className="reject"
                        onClick={() => updateStatus(app._id, "reject")}
                      >
                        Reject
                      </button>
                    </>
                  ) : (
                    <span>Processed</span>
                  )}
                </td>
                <td data-label="View">
                  <button className="view" onClick={() => setSelectedApp(app)}>
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {selectedApp && (
        <div className="modal-overlay" onClick={() => setSelectedApp(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Application Details</h2>
            <button className="close-btn" onClick={() => setSelectedApp(null)}>
              ×
            </button>
            <div style={{ marginTop: 20 }}>
              {Object.entries(selectedApp).map(([key, value]) => {
                if (key === "_id" || key === "__v") return null;
                if (key === "createdAt" || key === "updatedAt")
                  value = new Date(value).toLocaleString();
                return (
                  <p key={key}>
                    <strong>{key}:</strong> {value?.toString()}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
