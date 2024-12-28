// import React from "react";
// import { motion } from "framer-motion";
// // import bgImage1 from "./images/Home3.jpg";

// const Home = () => {
//   const backgrounds = [
//     // bgImage1,
//     "https://archive.org/download/wp2757875-wallpaper-gif/wp2757875-wallpaper-gif.gif",
//     "https://static.vecteezy.com/system/resources/thumbnails/023/010/709/small_2x/ai-generative-strong-athletic-men-pumping-up-muscles-workout-bodybuilding-concept-muscular-bodybuilder-men-doing-exercises-in-gym-naked-photo.jpg",
//     "https://img.freepik.com/free-photo/young-fitness-man-studio_7502-5008.jpg?t=st=1733737458~exp=1733741058~hmac=868785577800062304e07c9eda869b7ca558859fba171e2e8c5fbcb6c04c9ace&w=996",
//     "https://wallpapergod.com/images/hd/fitness-5440X3310-wallpaper-mzr933w8toyh722h.jpeg",
//     "https://www.shutterstock.com/image-photo/blue-neon-illustration-background-soft-600nw-2471352461.jpg",
//   ];

//   return (
    
//     <div className="hero min-h-screen min-w-full bg-black text-white relative flex flex-col justify-center items-center overflow-hidden">
//       {/* Background Images */}
//       <div className="absolute inset-0 z-0">
//         {backgrounds.map((src, index) => (
//           <motion.img
//             key={index}
//             src={src}
//             alt={`Background ${index + 1}`}
//             className="absolute w-full h-full object-cover"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: [0, 0.5, 1] }}
//             transition={{
//               duration: 10,
//               repeat: Infinity,
//               repeatType: "reverse",
//               delay: index * 5, // Stagger each background's appearance
//             }}
//           />
//         ))}
//       </div>

//       {/* Content */}
//       <div className="relative z-10 text-center px-6 py-12 max-w-4xl">
//         <motion.h1
//           className="text-5xl sm:text-6xl font-extrabold mb-6"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           Welcome to <span className="text-blue-400">FitLife</span>
//         </motion.h1>

//         <motion.p
//           className="text-lg sm:text-xl font-light text-gray-300 mb-6"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.5 }}
//         >
//           Discover a healthier, more energetic version of yourself. At FitLife,
//           we empower you with the right tools, guidance, and support to
//           transform your lifestyle.
//         </motion.p>

//         <motion.p
//           className="text-lg sm:text-xl font-light text-gray-300 mb-8"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 1 }}
//         >
//           Whether you're just starting your fitness journey or you're a seasoned
//           pro, our personalized workout plans, expert tips, and community
//           support are here for you every step of the way.
//         </motion.p>

//         <motion.button
//           className="px-8 py-4 bg-blue-500 text-white rounded-lg font-medium text-lg hover:bg-blue-600 shadow-lg hover:shadow-xl transition-all"
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//         >
//           Get Started Now
//         </motion.button>
//       </div>
//     </div>
//   );
// };

// export default Home;











// import React from "react";
// import { motion } from "framer-motion";
// import { FaArrowDown } from "react-icons/fa";

// const backgrounds = [
//   "https://archive.org/download/wp2757875-wallpaper-gif/wp2757875-wallpaper-gif.gif",
//   "https://static.vecteezy.com/system/resources/thumbnails/023/010/709/small_2x/ai-generative-strong-athletic-men-pumping-up-muscles-workout-bodybuilding-concept-muscular-bodybuilder-men-doing-exercises-in-gym-naked-photo.jpg",
//   "https://img.freepik.com/free-photo/young-fitness-man-studio_7502-5008.jpg?t=st=1733737458~exp=1733741058~hmac=868785577800062304e07c9eda869b7ca558859fba171e2e8c5fbcb6c04c9ace&w=996",
//   "https://wallpapergod.com/images/hd/fitness-5440X3310-wallpaper-mzr933w8toyh722h.jpeg",
//   "https://www.shutterstock.com/image-photo/blue-neon-illustration-background-soft-600nw-2471352461.jpg",
// ];

// const Home = () => {
//   return (
//     <div className="hero min-h-screen min-w-full bg-black text-white relative flex flex-col justify-center items-center overflow-hidden">
//       {/* Background Images */}
//       <div className="absolute inset-0 z-0">
//         {backgrounds.map((src, index) => (
//           <motion.img
//             key={index}
//             src={src}
//             alt={`Background ${index + 1}`}
//             className="absolute w-full h-full object-cover"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: [0, 0.5, 1] }}
//             transition={{
//               duration: 10,
//               repeat: Infinity,
//               repeatType: "reverse",
//               delay: index * 5,
//             }}
//           />
//         ))}
//       </div>

//       {/* Overlay for Darkening Background */}
//       <div className="absolute inset-0 bg-black bg-opacity-50 z-5"></div>

//       {/* Content */}
//       <div className="relative z-10 text-center px-6 py-12 max-w-4xl">
//         <motion.h1
//           className="text-5xl sm:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           Welcome to <span className="text-blue-400">FitLife</span>
//         </motion.h1>

//         <motion.p
//           className="text-lg sm:text-xl font-light text-gray-300 mb-6"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.5 }}
//         >
//           Discover a healthier, more energetic version of yourself. At FitLife,
//           we empower you with the right tools, guidance, and support to
//           transform your lifestyle.
//         </motion.p>

//         <motion.p
//           className="text-lg sm:text-xl font-light text-gray-300 mb-8"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 1 }}
//         >
//           Whether you're just starting your fitness journey or you're a seasoned
//           pro, our personalized workout plans, expert tips, and community
//           support are here for you every step of the way.
//         </motion.p>

//         <motion.button
//           className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium text-lg hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 shadow-lg hover:shadow-xl transition-all"
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//         >
//           Get Started Now
//         </motion.button>

//         {/* Scroll Down Icon */}
//         <motion.div
//           className="mt-16 flex justify-center items-center"
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.5, delay: 1.5 }}
//         >
//           <FaArrowDown className="text-gray-300 text-3xl animate-bounce" />
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Home;

















import React from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

const Home = () => {
  return (
    <div className="hero min-h-screen min-w-full bg-black text-white relative flex flex-col justify-center items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          src="https://media.istockphoto.com/id/1420515182/photo/tie-shoes-fit-and-healthy-man-ready-for-a-run-exercise-and-workout-or-training-routine-in.jpg?s=612x612&w=0&k=20&c=Xkb5f04t5aEcTMgS41zodQT9iqkjKrMuf8MvSQiVZyk="
        ></video>
      </div>

      {/* Overlay for Darkening Background */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-5"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 py-12 max-w-5xl">
        <motion.h1
          className="text-5xl sm:text-6xl font-extrabold mb-6 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to <span className="text-green-400">FitLife</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl font-light text-gray-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Embrace a journey to fitness with tailored plans, expert trainers, and state-of-the-art facilities.
        </motion.p>

        <motion.button
          className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium text-lg hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 shadow-lg hover:shadow-xl transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Get Started Now
        </motion.button>

        {/* Scroll Down Icon */}
        <motion.div
          className="mt-16 flex justify-center items-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.5 }}
        >
          <FaArrowDown className="text-gray-300 text-3xl animate-bounce" />
        </motion.div>
      </div>

      {/* Our Trainers Section */}
      <section className="relative z-10 py-16 bg-gray-900 text-center">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Meet Our Trainers
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          {["John", "Emily", "Michael", "Sophia", "James", "Olivia"].map((trainer, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img
                src={`https://randomuser.me/api/portraits/${index % 2 === 0 ? "men" : "women"}/${index + 10}.jpg`}
                alt={trainer}
                className="rounded-full w-24 h-24 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-white">{trainer}</h3>
              <p className="text-gray-400 text-sm">Specialist in personalized training plans</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Facilities Section */}
      <section className="relative z-10 py-16 bg-black text-center">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-12 bg-gradient-to-r from-green-400 to-blue-600 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Facilities
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          {["Modern Gym Equipment", "Swimming Pool", "Yoga Studio", "Sauna", "Personal Training", "Diet Counseling"].map(
            (facility, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-bold text-white">{facility}</h3>
                <p className="text-gray-400 text-sm">State-of-the-art and accessible for everyone</p>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* About Us Section */}
      <section className="relative z-10 py-16 bg-gray-900 text-center">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Us
        </motion.h2>
        <motion.p
          className="text-lg sm:text-xl font-light text-gray-300 px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          FitLife is dedicated to bringing out the best in everyone. Our mission is to create an environment where fitness is fun, achievable, and sustainable. Join our community today and transform your life for the better.
        </motion.p>
      </section>
    </div>
  );
};

export default Home;
