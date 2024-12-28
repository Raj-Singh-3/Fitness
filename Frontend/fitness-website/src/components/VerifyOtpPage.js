import React, { useState } from "react";

const VerifyOtpPage = () => {
  const [otp, setOtp] = useState("");

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    // Add OTP verification logic here (e.g., API call)
    console.log("OTP submitted:", otp);
  };

  return (
    <div className="auth-container">
      <div className="auth-panel">
        <h2>Verify OTP</h2>
        <form onSubmit={handleOtpSubmit} className="auth-form">
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={handleOtpChange}
            required
          />
          <button type="submit" className="submit-button">
            Verify
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyOtpPage;
