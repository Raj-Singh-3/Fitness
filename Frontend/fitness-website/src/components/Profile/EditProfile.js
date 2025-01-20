import React, { useState } from "react";

const EditProfile = ({ user, onSave }) => {
  const [formData, setFormData] = useState({ ...user });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    const updatedUser = {
      ...formData,
      age: new Date().getFullYear() - new Date(formData.dob).getFullYear(),
    };
    onSave(updatedUser);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Bio</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Height (cm)</label>
          <input
            type="number"
            name="height"
            value={formData.height}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Weight (kg)</label>
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>
      </form>
      <div className="mt-4 flex justify-between">
        <button
          className="px-6 py-3 bg-blue-500 text-white rounded-lg"
          onClick={handleSave}
        >
          Save
        </button>
        <button
          className="px-6 py-3 bg-gray-300 rounded-lg"
          onClick={() => onSave(user)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
