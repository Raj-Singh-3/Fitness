import React, { useState } from "react";
import WorkoutTracker from "./WorkoutTracker";
import NutritionPlanner from "./NutritionPlanner";
import ProgressGallery from "./ProgressGallery";
import Settings from "./Settings";
import MembershipPlans from "./MembershipPlans";
import Products from "./Products";
import Notifications from "./Notifications";
import EditProfile from "./EditProfile";

const UserProfile = () => {
  const [activeComponent, setActiveComponent] = useState("workout");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: "John Doe",
    bio: "👨‍💻 Enthusiastic developer with a love for fitness and nutrition!",
    dob: "1999-01-01",
    age: 25,
    height: 180,
    weight: 75,
    email: "johndoe@example.com",
    displayPicture:
      "https://static.vecteezy.com/system/resources/previews/023/531/788/non_2x/shirtless-bodybuilder-with-mountainous-background-realistic-illustration-ai-generated-free-photo.jpg",
  });

  const handleSave = (updatedUser) => {
    setUser(updatedUser);
    setIsEditing(false);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUser((prevUser) => ({
          ...prevUser,
          displayPicture: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const renderComponent = () => {
    if (isEditing) {
      return <EditProfile user={user} onSave={handleSave} />;
    }
    switch (activeComponent) {
      case "workout":
        return <WorkoutTracker />;
      case "nutrition":
        return <NutritionPlanner />;
      case "progress":
        return <ProgressGallery />;
      case "settings":
        return <Settings />;
      case "membership":
        return <MembershipPlans />;
      case "products":
        return <Products />;
      case "notifications":
        return <Notifications />;
      default:
        return <WorkoutTracker />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-col">
      <div className="h-auto lg:h-[40vh] bg-blue-500 text-white p-6 lg:flex lg:items-center lg:justify-between">
        <div className="lg:w-1/4 flex flex-col items-center justify-center h-full relative">
        <div className="w-36 h-36 rounded-full bg-gray-200 overflow-visible shadow-lg mb-4 relative">
  <img
    src={user.displayPicture}
    alt="User Profile"
    className="w-full h-full object-cover"
    style={{borderRadius:20}}
  />
  <label
    htmlFor="imageUpload"
    className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md cursor-pointer transform translate-x-2 translate-y-2"
    title="Change Profile Picture"
  >
    ✏️
  </label>
  <input
    type="file"
    id="imageUpload"
    accept="image/*"
    className="hidden"
    onChange={handleImageChange}
  />
</div>

          <h1 className="text-3xl font-bold">{user.name}</h1>
        </div>

        <div className="lg:w-3/4 flex flex-col justify-between h-full p-6">
          <div className="text-center lg:text-left mb-6">
            <p className="text-lg lg:text-xl italic">{user.bio}</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center lg:text-left">
            <div>
              <p className="font-semibold text-sm lg:text-base">Age</p>
              <p className="text-sm lg:text-lg">{user.age}</p>
            </div>
            <div>
              <p className="font-semibold text-sm lg:text-base">Height</p>
              <p className="text-sm lg:text-lg">{user.height} cm</p>
            </div>
            <div>
              <p className="font-semibold text-sm lg:text-base">Weight</p>
              <p className="text-sm lg:text-lg">{user.weight} kg</p>
            </div>
            <div>
              <p className="font-semibold text-sm lg:text-base">Email</p>
              <p className="text-sm lg:text-lg">{user.email}</p>
            </div>
          </div>

          <div className="mt-1 flex justify-center lg:justify-start">
            <button
              className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-lg hover:bg-blue-100 transition transform hover:scale-105"
              onClick={() => setIsEditing(true)}
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row flex-grow">
        <div className="bg-white lg:w-1/4 p-4 relative lg:static">
          <button
            className="lg:hidden block absolute top-4 left-4"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="w-6 h-1 bg-gray-800 mb-1"></div>
            <div className="w-6 h-1 bg-gray-800 mb-1"></div>
            <div className="w-6 h-1 bg-gray-800"></div>
          </button>

          <nav
            className={`${
              menuOpen ? "block" : "hidden"
            } lg:block lg:relative absolute left-0 top-16 bg-white w-full lg:w-auto shadow-lg lg:shadow-none`}
          >
            <ul className="space-y-4 lg:space-y-6">
              <li
                className={`cursor-pointer ${
                  activeComponent === "workout" ? "text-blue-500 font-bold" : ""
                }`}
                onClick={() => {
                  setActiveComponent("workout");
                  setMenuOpen(false);
                }}
              >
                Workout Tracker
              </li>
              <li
                className={`cursor-pointer ${
                  activeComponent === "nutrition" ? "text-blue-500 font-bold" : ""
                }`}
                onClick={() => {
                  setActiveComponent("nutrition");
                  setMenuOpen(false);
                }}
              >
                Nutrition Planner
              </li>
              <li
                className={`cursor-pointer ${
                  activeComponent === "progress" ? "text-blue-500 font-bold" : ""
                }`}
                onClick={() => {
                  setActiveComponent("progress");
                  setMenuOpen(false);
                }}
              >
                Progress Gallery
              </li>
              <li
                className={`cursor-pointer ${
                  activeComponent === "membership" ? "text-blue-500 font-bold" : ""
                }`}
                onClick={() => {
                  setActiveComponent("membership");
                  setMenuOpen(false);
                }}
              >
                Membership Plans
              </li>
              <li
                className={`cursor-pointer ${
                  activeComponent === "products" ? "text-blue-500 font-bold" : ""
                }`}
                onClick={() => {
                  setActiveComponent("products");
                  setMenuOpen(false);
                }}
              >
                Products
              </li>
              <li
                className={`cursor-pointer ${
                  activeComponent === "notifications" ? "text-blue-500 font-bold" : ""
                }`}
                onClick={() => {
                  setActiveComponent("notifications");
                  setMenuOpen(false);
                }}
              >
                Notifications
              </li>
              <li
                className={`cursor-pointer ${
                  activeComponent === "settings" ? "text-blue-500 font-bold" : ""
                }`}
                onClick={() => {
                  setActiveComponent("settings");
                  setMenuOpen(false);
                }}
              >
                Settings
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex-1 p-6">{renderComponent()}</div>
      </div>
    </div>
  );
};

export default UserProfile;
