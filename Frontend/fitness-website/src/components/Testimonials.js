import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar, FaRegSmileBeam } from "react-icons/fa";

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
    name: "Michael Lee",
    photo: "https://randomuser.me/api/portraits/men/55.jpg",
    review:
      "FitLife's coaches are truly passionate and knowledgeable. The sessions are fun and effective!",
  },
  {
    name: "Linda Parker",
    photo: "https://randomuser.me/api/portraits/women/76.jpg",
    review:
      "The workouts are challenging but rewarding. I feel like a completely new person!",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gradient-to-b from-blue-100 to-blue-200 py-16 px-6">
      {/* Section Header */}
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800 tracking-wide">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="inline-flex items-center"
        >
          <FaRegSmileBeam className="mr-2 text-blue-500 text-3xl" />
          What Our Users Say
        </motion.div>
      </h2>

      {/* Reviews Container */}
      <motion.div
        className="flex overflow-x-auto space-x-6 px-6 overflow-y-hidden" // Removed vertical scrollbar and enabled horizontal scrolling
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        style={{
          scrollSnapType: "x mandatory",
          height: "400px", // Fixed height
          WebkitOverflowScrolling: "touch", // Smooth scrolling on mobile
        }}
      >
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            className="min-w-[300px] max-w-[320px] bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center space-y-4 relative transition-transform duration-300 hover:scale-105"
            style={{ scrollSnapAlign: "center" }}
          >
            {/* Quote Icon */}
            <FaQuoteLeft className="absolute top-6 left-6 text-blue-400 text-2xl opacity-30" />

            {/* User Photo */}
            <motion.img
              src={review.photo}
              alt={review.name}
              className="w-24 h-24 rounded-full border-4 border-blue-400 shadow-lg"
              whileHover={{ scale: 1.1 }}
            />

            {/* User Info */}
            <h3 className="text-xl font-semibold text-gray-800">{review.name}</h3>
            <p className="text-sm text-gray-600 text-center italic">
              "{review.review}"
            </p>

            {/* Star Rating */}
            <div className="flex space-x-1 text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            {/* Animated Border */}
            <motion.div
              className="absolute inset-0 border-2 rounded-2xl border-dashed border-blue-500 opacity-0 hover:opacity-100"
              initial={{ scale: 1.2, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Scroll Instructions */}
      <motion.p
        className="text-center text-gray-700 mt-8 font-medium text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Swipe to see more amazing stories! 🌟
      </motion.p>
    </section>
  );
};

export default Testimonials;
