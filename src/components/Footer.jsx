import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 text-white pt-12 pb-6 px-6 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 border-b border-emerald-300 pb-10">
        {/* --- Brand Section --- */}
        <div>
          <h2 className="text-2xl font-bold mb-3">FreelancePro</h2>
          <p className="text-sm leading-relaxed text-emerald-100">
            FreelancePro helps clients connect with skilled freelancers
            worldwide. Find the right talent, grow your business, and earn from
            anywhere!
          </p>
        </div>

        {/* --- Services --- */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-emerald-100">
            <li className="hover:text-white cursor-pointer">Graphic Design</li>
            <li className="hover:text-white cursor-pointer">Web Development</li>
            <li className="hover:text-white cursor-pointer">
              Digital Marketing
            </li>
            <li className="hover:text-white cursor-pointer">Content Writing</li>
          </ul>
        </div>

        {/* --- Company --- */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-emerald-100">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
          </ul>
        </div>

        {/* --- Support --- */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-emerald-100">
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">
              Terms of Service
            </li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Refund Policy</li>
          </ul>
        </div>
      </div>

      {/* --- Bottom Section --- */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between mt-6 text-sm text-emerald-100">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold">FreelancePro</span>. All rights
          reserved.
        </p>

        <div className="flex gap-5 mt-3 md:mt-0">
          {/* Twitter */}
          <a
            href="#"
            className="hover:text-white transition-colors"
            aria-label="Twitter"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.93 4.93 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 00-8.39 4.482A13.965 13.965 0 011.671 3.15a4.92 4.92 0 001.523 6.574A4.903 4.903 0 01.96 9.1v.061a4.925 4.925 0 003.946 4.827 4.902 4.902 0 01-2.224.084 4.93 4.93 0 004.6 3.419A9.867 9.867 0 010 21.543a13.945 13.945 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A9.935 9.935 0 0024 4.557z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="#"
            className="hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19 0h-14c-2.761 0-5 2.238-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.762-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.785-1.75-1.751s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.751-1.75 1.751zm13.5 11.268h-3v-5.604c0-1.337-.027-3.058-1.863-3.058-1.864 0-2.149 1.456-2.149 2.961v5.701h-3v-10h2.877v1.366h.04c.401-.758 1.38-1.557 2.841-1.557 3.039 0 3.604 2.001 3.604 4.6v5.591z" />
            </svg>
          </a>

          {/* Facebook */}
          <a
            href="#"
            className="hover:text-white transition-colors"
            aria-label="Facebook"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M22.676 0h-21.352c-.731 0-1.324.593-1.324 1.324v21.352c0 .731.593 1.324 1.324 1.324h11.495v-9.294h-3.129v-3.622h3.129v-2.671c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.917.001c-1.504 0-1.794.715-1.794 1.763v2.312h3.586l-.467 3.622h-3.119v9.294h6.116c.731 0 1.324-.593 1.324-1.324v-21.352c0-.731-.593-1.324-1.324-1.324z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
