import React from "react";
import "../../../styles/student-zone/payment.css";
import Hero from "../Hero";

export default function Payment() {
  return (
    <>
      <Hero title="Payment" description="Make your payments securely online." />
      <section className="payment-section">
        <div className="payment-card">
          <h2>Payment</h2>
          <p>Make your tuition and course payments securely online.</p>
          <button className="payment-btn">Pay Now</button>
        </div>
      </section>
    </>
  );
}
