import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-green-400 text-white py-20 px-6">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold mb-4">Achieve Your Fitness Goals</h1>
        <p className="text-lg mb-6">
          Join thousands of users transforming their lives with our custom fitness plans.
        </p>
        <button className="bg-white text-blue-500 py-2 px-6 rounded-lg font-semibold hover:bg-gray-200">
          Get Started
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
