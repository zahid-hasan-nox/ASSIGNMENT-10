import React from "react";
import { motion } from "framer-motion";

const clients = [
  {
    id: 1,
    name: "John Miller",
    role: "Web Developer",
    img: "https://randomuser.me/api/portraits/men/11.jpg",
    feedback:
      "Amazing experience! The platform helped me connect with great clients and deliver quality work efficiently.",
  },
  {
    id: 2,
    name: "Sarah Khan",
    role: "Graphic Designer",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    feedback:
      "Loved the user interface and communication tools. Made my freelance journey much easier and more enjoyable!",
  },
  {
    id: 3,
    name: "David Kim",
    role: "Digital Marketer",
    img: "https://randomuser.me/api/portraits/men/24.jpg",
    feedback:
      "Professional environment with supportive clients. My projects always went smoothly here!",
  },
];

const SatisfactionSection = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-emerald-600">
        What Our Clients Say 💬
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
        {clients.map((client) => (
          <motion.div
            key={client.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg rounded-2xl border-2 border-transparent hover:border-gradient-to-r hover:from-emerald-400 hover:to-sky-500 transition-all duration-500 p-6 text-center"
          >
            <img
              src={client.img}
              alt={client.name}
              className="w-20 h-20 rounded-full mx-auto border-4 border-emerald-400 mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              {client.name}
            </h3>
            <p className="text-sm text-gray-500 mb-3">{client.role}</p>
            <p className="text-gray-600 italic">“{client.feedback}”</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SatisfactionSection;
