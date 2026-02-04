import React, { useState } from "react";
import "../styles/form.css";

export default function ApplyForm() {
  const statesAndUTs = [
    "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa",
    "Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala",
    "Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland",
    "Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura",
    "Uttar Pradesh","Uttarakhand","West Bengal",
    "Andaman and Nicobar Islands","Chandigarh",
    "Dadra and Nagar Haveli and Daman & Diu","Delhi","Jammu and Kashmir",
    "Ladakh","Lakshadweep","Puducherry"
  ];

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
    state: "",
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
    lastQualification: "",
    passingYear: "",
    previousCourse: "",
    previousInstitute: "",
    percentage: "",
  });

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [trackingId, setTrackingId] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // ---------- FRONTEND VALIDATION ----------
  const validateStep1 = () => {
    if (!formData.course || !formData.fullName || !formData.phone || !formData.email)
      return "Please fill all required fields";

    if (formData.aadhaar && !/^\d{12}$/.test(formData.aadhaar))
      return "Aadhaar must be exactly 12 digits";

    if (!/^\d{10}$/.test(formData.phone))
      return "Phone number must be 10 digits";

    if (formData.fatherPhone && !/^\d{10}$/.test(formData.fatherPhone))
      return "Father phone must be 10 digits";

    if (formData.motherPhone && !/^\d{10}$/.test(formData.motherPhone))
      return "Mother phone must be 10 digits";

    if (formData.guardianPhone && !/^\d{10}$/.test(formData.guardianPhone))
      return "Guardian phone must be 10 digits";

    return "";
  };

  const validateStep2 = () => {
    const year = Number(formData.passingYear);
    const currentYear = new Date().getFullYear();

    if (!formData.lastQualification || !formData.passingYear)
      return "Please fill academic required fields";

    if (year > currentYear || year < 1950)
      return "Passing year must be valid and not in the future";

    if (
      formData.percentage &&
      (Number(formData.percentage) < 0 || Number(formData.percentage) > 100)
    )
      return "Percentage must be between 0 and 100";

    return "";
  };

  // ---------- STEP CONTROL ----------
  const handleNext = () => {
    const msg = validateStep1();
    if (msg) {
      setError(msg);
      return;
    }
    setError("");
    setStep(2);
  };

  const handleBack = () => setStep(1);

  // ---------- SUBMIT ----------
  const handleSubmit = async (e) => {
    e.preventDefault();

    const msg = validateStep2();
    if (msg) {
      setError(msg);
      return;
    }

    setError("");
    setLoading(true);

    try {
      const res = await fetch(
        "https://mindmine-backend.onrender.com/api/application",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      setTrackingId(data.trackingId);
      setSubmitted(true);
    } catch (err) {
      setError(err.message || "Submission failed");
    } finally {
      setLoading(false);
    }
  };

  // ---------- SUCCESS ----------
  if (submitted) {
    return (
      <div className="apply-form-container">
        <div className="apply-form-card success-box">
          <h2>🎉 Application Submitted Successfully!</h2>
          <strong>{trackingId}</strong>
        </div>
      </div>
    );
  }

  // ---------- FORM ----------
  return (
    <div className="apply-form-container">
      <div className="apply-form-card">

        <h1>Student Enrollment Form</h1>

        <form onSubmit={handleSubmit}>

          {step === 1 && (
            <>
              <h2>Campus & Course Info</h2>
              <div className="grid-2">
                <input name="campus" placeholder="Campus" value={formData.campus} onChange={handleChange} />
                <input name="campusLocation" placeholder="Campus Location" value={formData.campusLocation} onChange={handleChange} />
                <input name="course" placeholder="Course Applied For *" value={formData.course} onChange={handleChange} />
              </div>

              <h2>Student Details</h2>
              <div className="grid-2">
                <input name="fullName" placeholder="Full Name *" value={formData.fullName} onChange={handleChange} />
                <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
                <input name="aadhaar" placeholder="Aadhaar (12 digits)" value={formData.aadhaar} onChange={handleChange} />
                <input name="phone" placeholder="Phone (10 digits) *" value={formData.phone} onChange={handleChange} />
                <input name="email" type="email" placeholder="Email *" value={formData.email} onChange={handleChange} />
              </div>

              <div className="form-buttons">
                <button type="button" onClick={handleNext}>Next</button>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <h2>Academic Information</h2>
              <div className="grid-2">
                <input name="lastQualification" placeholder="Last Qualification *" value={formData.lastQualification} onChange={handleChange} />
                <input name="passingYear" placeholder="Passing Year *" value={formData.passingYear} onChange={handleChange} />
                <input name="percentage" placeholder="Percentage (0-100)" value={formData.percentage} onChange={handleChange} />
              </div>

              <div className="form-buttons">
                <button type="button" onClick={handleBack}>← Back</button>
                <button type="submit" disabled={loading}>
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
