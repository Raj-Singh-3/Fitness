import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home"); // Tracks the active section
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = (id) => {
    // Navigate to root ("/") if not already there
    if (window.location.pathname !== "/") {
      navigate("/");
    }
    // Scroll to the desired section
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setActiveSection(id); // Set the active section
      }
    }, 100); // Delay to ensure page transition
  };

  useEffect(() => {
    // Set active section based on URL path
    const pathToSectionMap = {
      "/": "home",
      "/products": "products",
      "/profile": "profile",
    };
    const section = pathToSectionMap[location.pathname] || "home";
    setActiveSection(section);
  }, [location.pathname]);

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
          {[
            { id: "home", label: "Home" },
            { id: "features", label: "Features" },
            { id: "membership", label: "Membership" },
            { id: "bmi-calculator", label: "BMI Calculator" },
            { id: "testimonials", label: "Testimonials" },
            { id: "products", label: "Products", path: "/products" },
            { id: "profile", label: "👤", path: "/profile" },
          ].map(({ id, label, path }) => (
            <li
              key={id}
              className={`py-2 lg:py-0 text-center rounded-lg transition-all duration-300 transform hover:scale-110 ${
                activeSection === id
                  ? "bg-green-500 text-blue-600 font-bold shadow-md"
                  : "hover:bg-white-200"
              }`}
            >
              <button
                onClick={() =>
                  path ? navigate(path) : handleScroll(id) // Navigate or scroll
                }
                className="px-4 py-2 w-full"
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;














