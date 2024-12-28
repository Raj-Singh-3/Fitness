// import React from "react";
// import { motion } from "framer-motion";
// import { FaDumbbell, FaRunning } from "react-icons/fa";

// const memberships = [
//   {
//     type: "Normal",
//     icon: <FaDumbbell className="text-indigo-500 text-6xl mb-4" />,
//     description: "Build strength and endurance with our state-of-the-art gym equipment.",
//     plans: [
//       { duration: "1 Month", price: "$50" },
//       { duration: "6 Months", price: "$250" },
//       { duration: "1 Year", price: "$450" },
//     ],
//     image: "https://images.unsplash.com/photo-1554284126-aa88f22d2f6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
//   },
//   {
//     type: "Cardio",
//     icon: <FaRunning className="text-red-500 text-6xl mb-4" />,
//     description: "Boost your heart health with personalized cardio programs.",
//     plans: [
//       { duration: "1 Month", price: "$60" },
//       { duration: "6 Months", price: "$300" },
//       { duration: "1 Year", price: "$500" },
//     ],
//     image: "https://images.unsplash.com/photo-1554284295-458ff5c2f525?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
//   },
// ];

// const MembershipPage = () => {
//   return (
//     <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-10">
//       {/* Page Header */}
//       <motion.h1
//         className="text-4xl md:text-6xl font-bold text-center mt-0 mb-12"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         Explore Our <span className="text-indigo-500">Membership Plans</span>
//       </motion.h1>

//       {/* Membership Sections */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl">
//         {memberships.map((membership, index) => (
//           <motion.div
//             key={index}
//             className="relative bg-gray-800 rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: index * 0.3 }}
//           >
//             {/* Background Image */}
//             <div
//               className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:opacity-70 transition-opacity duration-300"
//               style={{ backgroundImage: `url(${membership.image})` }}
//             ></div>

//             {/* Content */}
//             <div className="relative z-10 p-6 md:p-10 text-center">
//               {membership.icon}
//               <h2 className="text-2xl font-extrabold text-indigo-400 mb-4">{membership.type}</h2>
//               <p className="text-sm text-gray-300 mb-6">{membership.description}</p>
//               <div className="space-y-4">
//                 {membership.plans.map((plan, planIndex) => (
//                   <motion.div
//                     key={planIndex}
//                     className="bg-indigo-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md cursor-pointer hover:bg-indigo-600"
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     {plan.duration} - {plan.price}
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MembershipPage;















import React from "react";
import { motion } from "framer-motion";
import { FaDumbbell, FaRunning, FaSpa } from "react-icons/fa";

const memberships = [
  {
    type: "Normal",
    icon: <FaDumbbell className="text-indigo-500 text-5xl mb-4" />,
    description: "Build strength and endurance with our state-of-the-art gym equipment.",
    plans: [
      { duration: "1 Month", price: "$50" },
      { duration: "6 Months", price: "$250" },
      { duration: "1 Year", price: "$450" },
    ],
    image: "https://images.unsplash.com/photo-1554284126-aa88f22d2f6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    type: "Cardio",
    icon: <FaRunning className="text-red-500 text-5xl mb-4" />,
    description: "Boost your heart health with personalized cardio programs.",
    plans: [
      { duration: "1 Month", price: "$60" },
      { duration: "6 Months", price: "$300" },
      { duration: "1 Year", price: "$500" },
    ],
    image: "https://images.unsplash.com/photo-1554284295-458ff5c2f525?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    type: "Wellness",
    icon: <FaSpa className="text-pink-500 text-5xl mb-4" />,
    description: "Relax and rejuvenate with our spa and wellness programs.",
    plans: [
      { duration: "1 Month", price: "$70" },
      { duration: "6 Months", price: "$350" },
      { duration: "1 Year", price: "$600" },
    ],
    image: "https://images.unsplash.com/photo-1554284086-5c0f5d2c7c23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
];

const MembershipPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center justify-center p-10">
      {/* Page Header */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Discover Our <span className="text-indigo-500">Membership Plans</span>
      </motion.h1>

      {/* Membership Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl">
        {memberships.map((membership, index) => (
          <motion.div
            key={index}
            className="relative bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 group"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-80 transition-opacity duration-300"
              style={{ backgroundImage: `url(${membership.image})` }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>

            {/* Content */}
            <div className="relative z-10 p-6 text-center flex flex-col items-center">
              {membership.icon}
              <h2 className="text-2xl font-bold text-white mb-4">{membership.type}</h2>
              <p className="text-sm text-gray-300 mb-6">{membership.description}</p>
              <div className="space-y-3">
                {membership.plans.map((plan, planIndex) => (
                  <motion.div
                    key={planIndex}
                    className="bg-indigo-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md cursor-pointer hover:bg-indigo-600"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {plan.duration} - {plan.price}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MembershipPage;
