import React from "react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Alex Johnson",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "FitLife helped me achieve the body of my dreams. I lost 15 pounds and gained muscle in just 3 months!",
  },
  {
    name: "Sophia Martinez",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "Amazing trainers and workouts! I feel healthier, stronger, and more confident every day.",
  },
  {
    name: "Chris Walker",
    photo: "https://randomuser.me/api/portraits/men/45.jpg",
    review:
      "Joining FitLife was the best decision of my life. The community support and tailored workouts are unmatched!",
  },
  {
    name: "Emily Brown",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    review:
      "I never thought I could love working out, but FitLife changed that. Highly recommend to everyone!",
  },

  {
    name: "Alex Johnson",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "FitLife helped me achieve the body of my dreams. I lost 15 pounds and gained muscle in just 3 months!",
  },
  {
    name: "Sophia Martinez",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "Amazing trainers and workouts! I feel healthier, stronger, and more confident every day.",
  },
  {
    name: "Chris Walker",
    photo: "https://randomuser.me/api/portraits/men/45.jpg",
    review:
      "Joining FitLife was the best decision of my life. The community support and tailored workouts are unmatched!",
  },
  {
    name: "Emily Brown",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    review:
      "I never thought I could love working out, but FitLife changed that. Highly recommend to everyone!",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-blue-50 py-16 px-6">
      {/* Section Header */}
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        What Our Users Say
      </h2>

      {/* Reviews Container */}
      <motion.div
        className="flex overflow-x-scroll space-x-6 max-w-full px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ scrollSnapType: "x mandatory" }}
      >
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            className="min-w-[300px] bg-white shadow-lg rounded-lg p-6 flex flex-col items-center space-y-4"
            style={{ scrollSnapAlign: "center" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* User Photo */}
            <img
              src={review.photo}
              alt={review.name}
              className="w-20 h-20 rounded-full border-4 border-blue-500"
            />

            {/* User Info */}
            <h3 className="text-xl font-semibold text-gray-800">{review.name}</h3>
            <p className="text-sm text-gray-600 text-center">{review.review}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Scroll Instructions */}
      <p className="text-center text-gray-500 mt-4">
        Scroll to see more testimonials
      </p>
    </section>
  );
};

export default Testimonials;
