// import React from "react";
// import { motion } from "framer-motion";

// const features = [
//   { title: "Personalized Plans", description: "Tailored workouts for you." },
//   { title: "Track Progress", description: "Monitor your growth over time." },
//   { title: "Expert Trainers", description: "Guidance from certified professionals." },
// ];

// const Features = () => {
//   return (
//     <section className="py-16 px-6">
//       <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
//         Our Features
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {features.map((feature, index) => (
//           <motion.div
//             key={index}
//             className="bg-white shadow-lg rounded-lg p-6"
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ delay: index * 0.2, duration: 0.5 }}
//           >
//             <h3 className="text-xl font-bold text-blue-500">{feature.title}</h3>
//             <p className="text-gray-600 mt-2">{feature.description}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Features;










import React from "react";
import { motion } from "framer-motion";
import { FaDumbbell, FaHeartbeat, FaUserShield, FaChartLine, FaSpa, FaAppleAlt } from "react-icons/fa";

const features = [
  { 
    title: "Personalized Plans", 
    description: "Tailored workouts for you.", 
    icon: <FaDumbbell className="text-blue-500 text-3xl" /> 
  },
  { 
    title: "Track Progress", 
    description: "Monitor your growth over time.", 
    icon: <FaChartLine className="text-green-500 text-3xl" /> 
  },
  { 
    title: "Expert Trainers", 
    description: "Guidance from certified professionals.", 
    icon: <FaUserShield className="text-purple-500 text-3xl" /> 
  },
  { 
    title: "Health Monitoring", 
    description: "Regular health assessments.", 
    icon: <FaHeartbeat className="text-red-500 text-3xl" /> 
  },
  { 
    title: "Relaxation Zone", 
    description: "Rejuvenate with our spa and sauna.", 
    icon: <FaSpa className="text-pink-500 text-3xl" /> 
  },
  { 
    title: "Nutrition Plans", 
    description: "Custom meal plans for your goals.", 
    icon: <FaAppleAlt className="text-yellow-500 text-3xl" /> 
  },
];

const Features = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Why Choose Us?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transition-transform transform hover:-translate-y-2"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <div className="flex items-center justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-700 text-center">
              {feature.title}
            </h3>
            <p className="text-gray-600 mt-4 text-center">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
