import React from "react";
import {
  FaCog,
  FaDumbbell,
  FaAppleAlt,
  FaRegIdCard,
  FaBell,
  FaUser,
} from "react-icons/fa";

const NavigationBar = () => {
  return (
    <nav className="fixed bottom-0 w-full bg-white shadow-lg md:w-64 md:relative md:shadow-none">
      <ul className="flex md:flex-col items-center justify-around md:items-start md:space-y-4 p-4">
        {/* Notifications */}
        <li className="md:flex md:items-center md:gap-2">
          <FaBell className="text-lg md:text-2xl text-gray-700" />
          <span className="hidden md:block text-gray-700">Notifications</span>
        </li>

        {/* User Profile */}
        <li className="md:flex md:items-center md:gap-2">
          <FaUser className="text-lg md:text-2xl text-gray-700" />
          <span className="hidden md:block text-gray-700">Profile</span>
        </li>

        {/* Settings */}
        <li className="md:flex md:items-center md:gap-2">
          <FaCog className="text-lg md:text-2xl text-gray-700" />
          <span className="hidden md:block text-gray-700">Settings</span>
        </li>

        {/* Workout */}
        <li className="md:flex md:items-center md:gap-2">
          <FaDumbbell className="text-lg md:text-2xl text-gray-700" />
          <span className="hidden md:block text-gray-700">Workout</span>
        </li>

        {/* Nutrition */}
        <li className="md:flex md:items-center md:gap-2">
          <FaAppleAlt className="text-lg md:text-2xl text-gray-700" />
          <span className="hidden md:block text-gray-700">Nutrition</span>
        </li>

        {/* Membership Plan */}
        <li className="md:flex md:items-center md:gap-2">
          <FaRegIdCard className="text-lg md:text-2xl text-gray-700" />
          <span className="hidden md:block text-gray-700">Membership Plan</span>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
