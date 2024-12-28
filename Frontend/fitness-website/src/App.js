import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Profile from "./components/Profile/UserProfile";
import MembershipPage from "./components/MembershipPage";
import BMICalculator from "./components/BMICalculator";
import ProductPage from "./components/ProductPage";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Hero from "./components/Hero";
import AuthPage from "./components/AuthPage";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      {isAuthenticated ? (
        <>
          <Navbar />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/membership" element={<MembershipPage />} />
              <Route path="/bmi-calculator" element={<BMICalculator />} />
              <Route path="/products" element={<ProductPage />} />
              <Route path="/features" element={<Features />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/hero" element={<Hero />} />
              <Route path="*" element={<Navigate to="/" />} /> {/* Redirect unknown routes */}
            </Routes>
          </div>
          <Footer />
        </>
      ) : (
        <AuthPage onAuthSuccess={() => setIsAuthenticated(true)} />
      )}
    </Router>
  );
};

export default App;
