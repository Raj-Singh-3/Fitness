import React from "react";
import NavigationBar from "./Profile/NavigationBar";
import UserProfile from "./Profile/UserProfile";

const Profile = () => {
  return (
    <div className="flex">
      {/* Sidebar for desktop */}
      <div className="hidden md:block">
        <NavigationBar />
      </div>

      {/* Main content area */}
      <div className="flex-1">
        <UserProfile />
      </div>

      {/* Bottom navigation for mobile */}
      <div className="md:hidden">
        <NavigationBar />
      </div>
    </div>
  );
};

export default Profile;
