import React, { useState } from "react";
import "../styles/form.css";

export default function ApplyForm() {
  // ---------------------- STATE ----------------------
  const [formData, setFormData] = useState({
    campus: "",
    campusLocation: "",
    course: "",
    fullName: "",
    dob: "",
    gender: "",
    caste: "",
    aadhaar: "",
    address: "",
    city: "",
    pin: "",
    phone: "",
    email: "",
    fatherName: "",
    fatherOccupation: "",
    fatherPhone: "",
    motherName: "",
    motherOccupation: "",
    motherPhone: "",
    guardianName: "",
    guardianRelation: "",
    guardianPhone: "",
    // Academic Info
    lastQualification: "",
    passingYear: "",
    previousCourse: "",
    previousInstitute: "",
    percentage: "",
  });

  const [step, setStep] = useState(1); // Step 1: Personal & Family, Step 2: Academic
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [trackingId, setTrackingId] = useState("");
  const [error, setError] = useState("");

  // ---------------------- HANDLERS ----------------------
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    // Simple validation for step 1
    const requiredFields = ["course", "fullName", "phone", "email"];
    for (let field of requiredFields) {
      if (!formData[field]) {
        setError("Please fill all required fields before proceeding.");
        return;
      }
    }
    setError("");
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validate academic info
    if (!formData.lastQualification || !formData.passingYear) {
      setError("Please fill all required academic fields.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(
        "https://mindmine-academy.onrender.com/api/application",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Submission failed");

      setTrackingId(data.trackingId);
      setSubmitted(true);
    } catch (err) {
      setError(err.message || "Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // ---------------------- SUCCESS PAGE ----------------------
  if (submitted) {
    return (
      <div className="apply-form-container">
        <div className="apply-form-card success-box">
          <h2>🎉 Application Submitted Successfully!</h2>
          <p>Thank you for applying to Mindmine Academy.</p>

          <div className="tracking-box">
            <strong>Your Tracking ID:</strong>
            <span>{trackingId}</span>
          </div>

          <p>A confirmation email has been sent 📩</p>
        </div>
      </div>
    );
  }

  // ---------------------- FORM ----------------------
  return (
    <div className="apply-form-container">
      <div className="apply-form-card">
        <div className="form-header">
          <h1>Student Enrollment Form</h1>
          <p className="form-info">
            Step {step}: {step === 1 ? "Personal & Family Info" : "Academic Info"} | Session: 2025-26
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <>
              <h2>Campus & Course Info</h2>
              <div className="grid-2">
                <input name="campus" placeholder="Campus" onChange={handleChange} />
                <input name="campusLocation" placeholder="Campus Location" onChange={handleChange} />
                <input className="full-width" name="course" placeholder="Course Applied For *" onChange={handleChange} />
              </div>

              <h2>Student Details</h2>
              <div className="grid-2">
                <input name="fullName" placeholder="Full Name *" onChange={handleChange} />
                <input type="date" name="dob" onChange={handleChange} />

                <select name="gender" onChange={handleChange}>
                  <option value="">Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>

                <select name="caste" onChange={handleChange}>
                  <option value="">Caste</option>
                  <option>GEN</option>
                  <option>SC</option>
                  <option>ST</option>
                  <option>OBC</option>
                </select>

                <input name="aadhaar" placeholder="Aadhaar No" onChange={handleChange} />
                <input value="Indian" disabled />
                <textarea className="full-width" name="address" placeholder="Full Address" onChange={handleChange} />
                <input name="city" placeholder="City" onChange={handleChange} />
                <input value="West Bengal" disabled />
                <input name="pin" placeholder="Pin Code" onChange={handleChange} />
                <input name="phone" placeholder="Contact No *" onChange={handleChange} />
                <input name="email" type="email" placeholder="Email *" onChange={handleChange} />
              </div>

              <h2>Father's Info</h2>
              <div className="grid-2">
                <input name="fatherName" placeholder="Father Name" onChange={handleChange} />
                <input name="fatherOccupation" placeholder="Occupation" onChange={handleChange} />
                <input name="fatherPhone" placeholder="Phone" onChange={handleChange} />
              </div>

              <h2>Mother's Info</h2>
              <div className="grid-2">
                <input name="motherName" placeholder="Mother Name" onChange={handleChange} />
                <input name="motherOccupation" placeholder="Occupation" onChange={handleChange} />
                <input name="motherPhone" placeholder="Phone" onChange={handleChange} />
              </div>

              <h2>Local Guardian</h2>
              <div className="grid-3">
                <input name="guardianName" placeholder="Name" onChange={handleChange} />
                <input name="guardianRelation" placeholder="Relation" onChange={handleChange} />
                <input name="guardianPhone" placeholder="Phone" onChange={handleChange} />
              </div>

              <div className="form-buttons">
                <button type="button" className="submit-btn" onClick={handleNext}>
                  Next: Academic Info
                </button>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <h2>Academic Information</h2>
              <div className="grid-2">
                <input name="lastQualification" placeholder="Last Qualification *" onChange={handleChange} />
                <input name="passingYear" placeholder="Year of Passing *" onChange={handleChange} />
                <input name="previousCourse" placeholder="Previous Course" onChange={handleChange} />
                <input name="previousInstitute" placeholder="Previous Institute" onChange={handleChange} />
                <input name="percentage" placeholder="Percentage / GPA" onChange={handleChange} />
              </div>

              <div className="form-buttons">
                <button type="button" className="back-btn" onClick={handleBack}>
                  ← Back
                </button>
                <button type="submit" className="submit-btn" disabled={loading}>
                  {loading ? "Submitting..." : "Submit Application"}
                </button>
              </div>
            </>
          )}

          {error && <div className="error-box">{error}</div>}
        </form>
      </div>
    </div>
  );
}
