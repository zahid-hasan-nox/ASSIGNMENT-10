import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import errorAnimation from "../assets/Error404.json";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-gray-200 text-gray-800">
      {/* Lottie Animation */}
      <div className="w-72 h-72 mb-6">
        <Lottie animationData={errorAnimation} loop={true} />
      </div>

      {/* Animated 404 Text */}

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-2xl font-semibold mt-2 text-center px-6"
      >
        Oops! The page you are looking for was not found 😢
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-gray-600 mt-2 text-center px-6"
      >
        The page you tried to visit might have been removed or the link is
        incorrect.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="mt-6"
      >
        <Link
          to="/"
          className="px-6 py-3 bg-blue-500 text-white rounded-xl shadow-md hover:bg-blue-600 transition"
        >
          🏠 Go Back Home
        </Link>
      </motion.div>
    </div>
  );
};

export default Error;
