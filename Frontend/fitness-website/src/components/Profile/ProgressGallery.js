import React, { useState } from "react";

const ProgressGallery = () => {
  const [photos, setPhotos] = useState([]);
  const [photo, setPhoto] = useState(null);
  const [caption, setCaption] = useState("");

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleUpload = () => {
    if (photo) {
      const newPhoto = {
        id: photos.length + 1,
        src: URL.createObjectURL(photo),
        caption,
        date: new Date().toLocaleDateString(),
      };
      setPhotos([...photos, newPhoto]);
      setCaption("");
      setPhoto(null);
    }
  };

  const deletePhoto = (id) => {
    setPhotos(photos.filter((photo) => photo.id !== id));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">
        Progress Gallery
      </h2>

      {/* Upload Section */}
      <div className="mb-6 flex flex-col sm:flex-row items-center gap-4">
        <input
          type="file"
          onChange={handlePhotoChange}
          className="border p-2 rounded w-full sm:w-auto"
        />
        <input
          type="text"
          placeholder="Enter caption"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          className="border p-2 rounded w-full sm:w-auto flex-1"
        />
        <button
          onClick={handleUpload}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Upload Progress
        </button>
      </div>

      {/* Display Uploaded Photos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="bg-gray-100 p-4 rounded shadow-md flex flex-col items-center"
          >
            <img
              src={photo.src}
              alt={photo.caption}
              className="w-full h-40 sm:h-56 lg:h-64 object-cover rounded"
            />
            <p className="mt-2 text-sm sm:text-base text-center font-medium">
              {photo.caption}
            </p>
            <p className="text-xs sm:text-sm text-gray-500">
              {photo.date}
            </p>
            <button
              onClick={() => deletePhoto(photo.id)}
              className="text-red-500 mt-2 text-sm hover:underline"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressGallery;
