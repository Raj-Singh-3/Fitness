import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-600 text-white py-4 px-6 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-wide">
          <Link to="/">FitLife</Link>
        </h1>
        
        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-3xl">
            {isMenuOpen ? "×" : "≡"}
          </button>
        </div>
        
        {/* Navbar Links */}
        <ul
          className={`lg:flex space-x-6 text-lg font-semibold transition-all duration-300 absolute lg:static bg-blue-600 w-full lg:w-auto left-0 top-16 lg:top-0 ${
            isMenuOpen ? "block" : "hidden"
          } lg:block`}
        >
          <li className="py-2 lg:py-0 text-center">
            <Link
              to="/"
              className="hover:text-yellow-300 transition-transform duration-300 transform hover:scale-110"
            >
              Home
            </Link>
          </li>
          <li className="py-2 lg:py-0 text-center">
            <Link
              to="/features"
              className="hover:text-yellow-300 transition-transform duration-300 transform hover:scale-110"
            >
              Features
            </Link>
          </li>
          <li className="py-2 lg:py-0 text-center">
            <Link
              to="/membership"
              className="hover:text-yellow-300 transition-transform duration-300 transform hover:scale-110"
            >
              Membership
            </Link>
          </li>
          <li className="py-2 lg:py-0 text-center">
            <Link
              to="products"
              className="hover:text-yellow-300 transition-transform duration-300 transform hover:scale-110"
            >
              Products
            </Link>
          </li>
          <li className="py-2 lg:py-0 text-center">
            <Link
              to="/bmi-calculator"
              className="hover:text-yellow-300 transition-transform duration-300 transform hover:scale-110"
            >
              BMI Calculator
            </Link>
          </li>
          <li className="py-2 lg:py-0 text-center">
            <Link
              to="/testimonials"
              className="hover:text-yellow-300 transition-transform duration-300 transform hover:scale-110"
            >
              Testimonials
            </Link>
          </li>
          <li className="py-2 lg:py-0 text-center">
            <Link
              to="/profile"
              className="hover:text-yellow-300 transition-transform duration-300 transform hover:scale-110"
            >
              <span role="img" aria-label="Profile">
                👤
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
