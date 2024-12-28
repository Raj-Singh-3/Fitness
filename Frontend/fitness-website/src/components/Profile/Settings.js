import React, { useState } from "react";

const Settings = () => {
  const [theme, setTheme] = useState("light");
  const [notifications, setNotifications] = useState(true);

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  const handleNotificationsChange = () => {
    setNotifications(!notifications);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Settings</h2>

      {/* Theme Setting */}
      <div className="mb-4">
        <h3 className="text-lg font-medium">Theme</h3>
        <div className="flex gap-4 mt-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="theme"
              value="light"
              checked={theme === "light"}
              onChange={handleThemeChange}
              className="mr-2"
            />
            Light
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="theme"
              value="dark"
              checked={theme === "dark"}
              onChange={handleThemeChange}
              className="mr-2"
            />
            Dark
          </label>
        </div>
      </div>

      {/* Notifications Setting */}
      <div className="mb-6">
        <h3 className="text-lg font-medium">Notifications</h3>
        <div className="flex items-center mt-2">
          <input
            type="checkbox"
            checked={notifications}
            onChange={handleNotificationsChange}
            className="mr-2"
          />
          <label>Enable Email Notifications</label>
        </div>
      </div>

      {/* Save Changes Button */}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => alert("Settings saved!")}
      >
        Save Changes
      </button>
    </div>
  );
};

export default Settings;
