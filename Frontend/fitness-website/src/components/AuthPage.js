import React, { useState } from "react"; // Import useState
import { useNavigate } from "react-router-dom"; // Import useNavigate

const AuthPage = ({ onAuthSuccess }) => { // Accept onAuthSuccess as a prop
  const [isSignUp, setIsSignUp] = useState(false);
  const [showOtpBox, setShowOtpBox] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpVerified, setIsOtpVerified] = useState(false);

  const navigate = useNavigate(); // Initialize useNavigate hook

  const toggleForm = () => {
    setIsSignUp((prev) => !prev);
    setShowOtpBox(false);
    setIsOtpVerified(false);
    setOtp("");
    setEmail("");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (isSignUp && e.target.value.includes("@")) {
      setShowOtpBox(true);
      console.log("OTP sent to:", e.target.value);
    }
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const verifyOtp = () => {
    if (otp === "3367") {
      setIsOtpVerified(true);
      alert("OTP verified successfully!");
      setShowOtpBox(false);
    } else {
      alert("Incorrect OTP. Please try again.");
    }
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log("User signed in with email:", email);
    onAuthSuccess(); // Call the callback to update authentication state
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-cover bg-center" style={{ backgroundImage: "url('https://archive.org/download/wp2757875-wallpaper-gif/wp2757875-wallpaper-gif.gif')" }}>
      <div className="auth-container w-[800px] h-[500px] flex relative">
        <div className={`auth-panel flex w-full h-full bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-600 ${isSignUp ? "translate-x-[-50%]" : ""}`}>
          <div className="left-panel w-1/2 p-10 text-center bg-purple-800 text-white flex flex-col justify-center items-center transition-all duration-600">
            <h2 className="text-2xl">{isSignUp ? "Welcome Back!" : "Hello, Friend!"}</h2>
            <p className="my-5 text-base">{isSignUp ? "Sign in to stay connected." : "Create an account to join us."}</p>
            <button className="toggle-button border border-white text-white px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white hover:text-purple-800" onClick={toggleForm}>
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </div>
          <div className="right-panel w-1/2 p-10 text-center flex flex-col justify-center items-center">
            <form className="auth-form flex flex-col gap-4 w-4/5" onSubmit={!isSignUp ? handleSignIn : undefined}>
              <h2 className="text-2xl">{isSignUp ? "Sign Up" : "Sign In"}</h2>
              {isSignUp && !isOtpVerified && (
                <>
                  <input className="p-3 border border-gray-300 rounded-md text-base" type="text" placeholder="Name" required />
                  <select className="p-3 border border-gray-300 rounded-md text-base" required>
                    <option value="">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  <input className="p-3 border border-gray-300 rounded-md text-base" type="date" required />
                </>
              )}
              <input
                className="p-3 border border-gray-300 rounded-md text-base"
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                required
              />
              {isSignUp && showOtpBox && !isOtpVerified && (
                <div className="otp-box p-4 border border-gray-300 rounded-md bg-gray-50">
                  <p className="text-sm text-gray-600 mb-3">An OTP has been sent to your email. Please verify.</p>
                  <input
                    className="p-3 border border-gray-300 rounded-md text-base"
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={handleOtpChange}
                    required
                  />
                  <button
                    type="button"
                    className="verify-button mt-2 py-2 px-4 bg-green-500 text-white rounded-md cursor-pointer transition-all duration-300 hover:bg-green-600"
                    onClick={verifyOtp}
                  >
                    Verify OTP
                  </button>
                </div>
              )}
              {isSignUp && isOtpVerified && (
                <>
                  <input className="p-3 border border-gray-300 rounded-md text-base" type="password" placeholder="Password" required />
                  <input className="p-3 border border-gray-300 rounded-md text-base" type="password" placeholder="Confirm Password" required />
                </>
              )}
              {!isSignUp && (
                <>
                  <input className="p-3 border border-gray-300 rounded-md text-base" type="password" placeholder="Password" required />
                  <button className="forgot-button text-purple-800 text-sm mt-2">Forgot Password?</button>
                </>
              )}
              <button type="submit" className="submit-button bg-purple-800 text-white border-none cursor-pointer transition-all duration-300 hover:bg-purple-600 p-3 rounded-md">
                {isSignUp ? "Sign Up" : "Sign In"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
