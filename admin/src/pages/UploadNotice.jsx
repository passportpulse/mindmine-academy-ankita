import { useState, useEffect } from "react";
import "../styles/notice.css";

const API = "https://mindmine-academy.onrender.com";

export default function UploadNotice() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [notices, setNotices] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const token = localStorage.getItem("adminToken");

  // ---------------------
  // Fetch notices
  // ---------------------
  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const res = await fetch(`${API}/api/notice/all`, {
          headers: { Authorization: "Bearer " + token },
        });
        const data = await res.json();
        if (data.success) setNotices(data.notices);
      } catch (err) {
        console.error(err);
      }
    };
    fetchNotices();
  }, [token]);

  // ---------------------
  // File change & preview
  // ---------------------
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    } else {
      setFile(null);
      setPreview(null);
    }
  };

  // ---------------------
  // Upload or edit notice
  // ---------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) return alert("Please enter a title");

    const formData = new FormData();
    formData.append("title", title);
    if (file) formData.append("photo", file); // match backend parser.single("photo")

    const url = editingId
      ? `${API}/api/notice/update/${editingId}`
      : `${API}/api/notice/add`;

    try {
      const res = await fetch(url, {
        method: editingId ? "PUT" : "POST",
        headers: { Authorization: "Bearer " + token },
        body: formData,
      });

      const data = await res.json();
      if (data.success) {
        alert(`Notice ${editingId ? "updated" : "uploaded"} successfully`);
        setTitle("");
        setFile(null);
        setPreview(null);
        setEditingId(null);
        // Refresh notices
        const refreshed = await fetch(`${API}/api/notice/all`, {
          headers: { Authorization: "Bearer " + token },
        });
        const refreshedData = await refreshed.json();
        if (refreshedData.success) setNotices(refreshedData.notices);
      } else {
        alert("Failed to save notice");
      }
    } catch (err) {
      console.error(err);
      alert("Error saving notice");
    }
  };

  // ---------------------
  // Delete notice
  // ---------------------
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this notice?")) return;
    try {
      const res = await fetch(`${API}/api/notice/delete/${id}`, {
        method: "DELETE",
        headers: { Authorization: "Bearer " + token },
      });
      const data = await res.json();
      if (data.success) setNotices(notices.filter((n) => n._id !== id));
      else alert("Failed to delete notice");
    } catch (err) {
      console.error(err);
      alert("Error deleting notice");
    }
  };

  // ---------------------
  // Edit notice
  // ---------------------
  const handleEdit = (notice) => {
    setTitle(notice.title);
    setPreview(notice.image); // Cloudinary URL
    setEditingId(notice._id);
  };

  return (
    <div className="upload-container">
      <form className="upload-card" onSubmit={handleSubmit}>
        <h2>{editingId ? "Edit Notice" : "Upload Notice"}</h2>

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input type="file" accept="image/*" onChange={handleFileChange} />

        {preview && (
          <div className="preview-container">
            <p>Preview:</p>
            <img src={preview} alt="Preview" />
          </div>
        )}

        <button type="submit">{editingId ? "Update" : "Upload"}</button>
      </form>

      <div className="previous-notices">
        <h2>Previous Notices</h2>

        {notices.length === 0 && <p>No notices yet.</p>}

        <div className="notices-list">
          {notices.map((notice) => (
            <div key={notice._id} className="notice-card">
              <img src={notice.image} alt={notice.title} /> {/* Cloudinary URL */}

              <div className="notice-info">
                <h3>{notice.title}</h3>
                <span>{new Date(notice.createdAt).toLocaleDateString()}</span>
                <div className="notice-actions">
                  <button onClick={() => handleEdit(notice)}>Edit</button>
                  <button onClick={() => handleDelete(notice._id)}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
