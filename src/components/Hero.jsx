import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const slides = [
    {
      id: 1,
      title: "Hire Top Freelancers Easily",
      desc: "Find talented professionals and get your tasks done faster and smarter.",
      img: "https://images.unsplash.com/photo-1612831455546-9b1b5a8d1f8b?auto=format&fit=crop&w=1500&q=80",
      btn1: { label: "Browse Tasks", path: "/browse-task" },
      btn2: { label: "Add Task", path: "/add-task" },
    },
    {
      id: 2,
      title: "Post Your Own Tasks",
      desc: "Need something done? Post your task and get offers from freelancers worldwide.",
      img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1500&q=80",
      btn1: { label: "Add Task", path: "/add-task" },
      btn2: { label: "My Posted Task", path: "/my-posted-task" },
    },
    {
      id: 3,
      title: "Manage Your Projects Easily",
      desc: "Track progress, communicate, and complete projects seamlessly from one place.",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1500&q=80",
      btn1: { label: "My Posted Task", path: "/my-posted-task" },
      btn2: { label: "Browse Tasks", path: "/browse-task" },
    },
  ];

  return (
    <div className="relative">
      <Splide
        options={{
          type: "loop",
          autoplay: true,
          interval: 5000,
          pauseOnHover: false,
          arrows: true,
          pagination: true,
          speed: 1000,
        }}
        aria-label="Hero Slider"
      >
        {slides.map((slide) => (
          <SplideSlide key={slide.id}>
            <div
              className="relative h-[90vh] flex items-center justify-center text-center text-white"
              style={{
                backgroundImage: `url(${slide.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Content */}
              <div className="relative z-10 px-4">
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                  {slide.title}
                </h1>
                <p className="text-lg lg:text-xl mb-10 max-w-2xl mx-auto text-gray-200">
                  {slide.desc}
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                  <button
                    onClick={() => navigate(slide.btn1.path)}
                    className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-full text-white font-medium transition-all duration-300"
                  >
                    {slide.btn1.label}
                  </button>

                  <button
                    onClick={() => navigate(slide.btn2.path)}
                    className="bg-white text-indigo-600 hover:bg-indigo-100 px-6 py-3 rounded-full font-medium transition-all duration-300"
                  >
                    {slide.btn2.label}
                  </button>
                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Hero;
