import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-700 text-white pt-14 pb-8 px-6 mt-20 shadow-inner">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 border-b border-emerald-300/50 pb-12">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-3 tracking-wide">
            FreelancePro
          </h2>
          <p className="text-sm leading-relaxed text-emerald-100">
            FreelancePro helps clients connect with skilled freelancers
            worldwide. Find the right talent, grow your business, and earn from
            anywhere with trust and security.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4 underline underline-offset-4 decoration-emerald-200">
            Services
          </h3>
          <ul className="space-y-2 text-emerald-100">
            {[
              "Graphic Design",
              "Web Development",
              "Digital Marketing",
              "Content Writing",
            ].map((item) => (
              <li
                key={item}
                className="hover:text-white cursor-pointer transition-all duration-200 hover:translate-x-1"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4 underline underline-offset-4 decoration-emerald-200">
            Company
          </h3>
          <ul className="space-y-2 text-emerald-100">
            {["About Us", "Contact", "Careers", "Blog"].map((item) => (
              <li
                key={item}
                className="hover:text-white cursor-pointer transition-all duration-200 hover:translate-x-1"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4 underline underline-offset-4 decoration-emerald-200">
            Support
          </h3>
          <ul className="space-y-2 text-emerald-100">
            {[
              "Help Center",
              "Terms of Service",
              "Privacy Policy",
              "Refund Policy",
            ].map((item) => (
              <li
                key={item}
                className="hover:text-white cursor-pointer transition-all duration-200 hover:translate-x-1"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between mt-6 text-sm text-emerald-100">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold">FreelancePro</span>. All rights
          reserved.
        </p>

        <div className="flex gap-6 mt-4 md:mt-0">
          {["Twitter", "LinkedIn", "Facebook"].map((name) => (
            <a
              href="#"
              key={name}
              aria-label={name}
              className="hover:text-white transition transform hover:scale-110 duration-200"
            >
              {/* Same SVG icons here */}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
