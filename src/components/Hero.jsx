import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div>
      {/* Animated Heading (Scroll-based) */}
      <motion.h1
        className="text-4xl font-bold m-6 text-gray-700 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
      >
        The best place to hire top-notch{" "}
        <motion.span
          className="text-emerald-600 inline-block"
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          viewport={{ once: false }}
        >
          Freelancers
        </motion.span>{" "}
        for any job!
      </motion.h1>

      {/* Hero Slider */}
      <Splide
        options={{
          type: "loop",
          autoplay: true,
          interval: 10000,
          arrows: true,
          pagination: true,
        }}
        aria-label="Hero Slider"
        className="w-full h-[80vh]"
      >
        <SplideSlide>
          <img
            src="https://images.unsplash.com/photo-1491553895911-0055eca6402d"
            alt="Image 1"
            className="w-full h-[80vh] object-cover rounded-lg"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src="https://images.unsplash.com/photo-1500534623283-312aade485b7"
            alt="Image 2"
            className="w-full h-[80vh] object-cover rounded-lg"
          />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Hero;
