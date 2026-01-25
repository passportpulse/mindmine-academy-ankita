import React from "react";
import "../../../styles/student-zone/apply.css";
import Hero from "../Hero";

export default function Apply() {
  return (
    <>
      <Hero
        title="Apply"
        description="Fill out your application form here."
      />
      <div className="apply-container">
        <div className="apply-card">
          {/* Header */}
          <div className="form-header">
            <h1>Student Enrollment Form</h1>
            <p className="form-info">
              Step 1: Personal & Family Information | Session: 2025-26 | Use
              Block Letters
            </p>
          </div>

          <form>
            {/* Campus & Course */}
            <h2>Campus & Course Info</h2>
            <div className="grid-2">
              <div className="form-group">
                <label>Campus</label>
                <input type="text" placeholder="Enter Campus Name" />
              </div>
              <div className="form-group">
                <label>Campus Location</label>
                <input type="text" placeholder="Enter Campus Location" />
              </div>
              <div className="form-group full-width">
                <label>Course Applied For *</label>
                <input type="text" placeholder="Enter Course Name" />
              </div>
            </div>

            {/* Student Details */}
            <h2>Student Details</h2>
            <div className="grid-2">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Enter Full Name" />
              </div>
              <div className="form-group">
                <label>Date of Birth</label>
                <input type="date" />
              </div>
              <div className="form-group">
                <label>Gender</label>
                <select>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Caste</label>
                <select>
                  <option>GEN</option>
                  <option>ST</option>
                  <option>SC</option>
                  <option>OBC</option>
                </select>
              </div>
              <div className="form-group">
                <label>Aadhaar No</label>
                <input type="text" placeholder="0000 0000 0000" />
              </div>
              <div className="form-group">
                <label>Nationality</label>
                <input type="text" value="Indian" disabled />
              </div>
              <div className="form-group full-width">
                <label>Full Address</label>
                <textarea placeholder="Village/Street, P.O, P.S"></textarea>
              </div>
              <div className="form-group">
                <label>City / District</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>State</label>
                <input type="text" value="West Bengal" disabled />
              </div>
              <div className="form-group">
                <label>Pin Code</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>WhatsApp / Contact No</label>
                <input type="text" />
              </div>
              <div className="form-group full-width">
                <label>Email Address</label>
                <input type="email" />
              </div>
            </div>

            {/* Parent Details */}
            <h2>Father's Info</h2>
            <div className="grid-2">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Father's Full Name" />
              </div>
              <div className="form-group">
                <label>Occupation</label>
                <input type="text" placeholder="Father's Occupation" />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="text" placeholder="Father's Phone No" />
              </div>
            </div>

            <h2>Mother's Info</h2>
            <div className="grid-2">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Mother's Full Name" />
              </div>
              <div className="form-group">
                <label>Occupation</label>
                <input type="text" placeholder="Mother's Occupation" />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="text" placeholder="Mother's Phone No" />
              </div>
            </div>

            <h2>Local Guardian (If applicable)</h2>
            <div className="grid-3">
              <div className="form-group">
                <label>Guardian's Name</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>Relation</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="text" />
              </div>
            </div>

            <button type="submit" className="submit-btn">
              Next: Academic Info
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
