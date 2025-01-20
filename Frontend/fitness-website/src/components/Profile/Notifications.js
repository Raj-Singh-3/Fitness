import React, { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5"; // Importing close icon from react-icons

const Notifications = () => {
  // Initial Notifications Array
  const [notifications, setNotifications] = useState([
    { id: 1, message: "Your membership is about to expire in 7 days. Renew now!" },
    { id: 2, message: "Your order for Resistance Bands has been shipped." },
    { id: 3, message: "Your profile update was successful!" },
  ]);

  // Function to Remove a Notification
  const removeNotification = (id) => {
    setNotifications(notifications.filter((notification) => notification.id !== id));
  };

  return (
    <div className="w-full bg-gray-50 shadow-lg rounded-md p-4">
      {/* Header */}
      <h2 className="text-2xl font-bold mb-4 text-gray-700 text-center">Notifications</h2>

      {/* Notifications List */}
      {notifications.length > 0 ? (
        <ul className="space-y-3">
          {notifications.map((notification) => (
            <li
              key={notification.id}
              className="flex items-center justify-between bg-white p-4 shadow rounded-md hover:bg-gray-100 transition"
            >
              <p className="text-sm sm:text-base text-gray-700 w-full">{notification.message}</p>
              {/* Delete Button */}
              <button
                onClick={() => removeNotification(notification.id)}
                className="text-red-500 hover:text-red-600 transition ml-3"
                aria-label="Delete notification"
              >
                <IoCloseCircleOutline size={24} />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-center">You have no notifications 🎉</p>
      )}
    </div>
  );
};

export default Notifications;
