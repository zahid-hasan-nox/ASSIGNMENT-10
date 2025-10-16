import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ImProfile } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <div className="navbar bg-white shadow-md sticky top-0 z-50 px-4 lg:px-10">
      {/* Left: Brand */}
      <div className="navbar-start">
        {/* Mobile menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <GiHamburgerMenu className="text-2xl text-gray-700" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52 text-gray-700 font-medium"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-emerald-600 font-semibold"
                    : "hover:text-emerald-600"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/add-task"
                className={({ isActive }) =>
                  isActive
                    ? "text-emerald-600 font-semibold"
                    : "hover:text-emerald-600"
                }
              >
                Add Task
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/browse-task"
                className={({ isActive }) =>
                  isActive
                    ? "text-emerald-600 font-semibold"
                    : "hover:text-emerald-600"
                }
              >
                Browse Task
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my-posted-task"
                className={({ isActive }) =>
                  isActive
                    ? "text-emerald-600 font-semibold"
                    : "hover:text-emerald-600"
                }
              >
                My Posted Task
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Brand */}
        <div className="flex items-center gap-2">
          <img
            src="/favIcon.jpg"
            alt="logo"
            className="w-10 h-10 rounded-full border-2 border-emerald-500 hover:scale-110 transition"
          />
          <Link
            to="/"
            className="text-2xl font-bold font-serif text-emerald-600 hover:text-emerald-700 transition duration-300"
          >
            Freelance<span className="text-gray-800">Pro</span>
          </Link>
        </div>
      </div>

      {/* Center: Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-6 text-gray-700 font-medium">
          {[
            { to: "/", label: "Home" },
            { to: "/add-task", label: "Add Task" },
            { to: "/browse-task", label: "Browse Task" },
            { to: "/my-posted-task", label: "My Posted Task" },
          ].map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `relative px-2 py-1 transition ${
                    isActive
                      ? "text-emerald-600 font-semibold after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-emerald-600 after:bottom-0 after:left-0 after:rounded-full"
                      : "text-gray-700 hover:text-emerald-600"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Right */}
      <div className="navbar-end flex items-center gap-3">
        <Link
          to="/profile"
          className="tooltip tooltip-bottom"
          data-tip="Profile"
        >
          <ImProfile className="text-2xl text-gray-700 hover:text-emerald-600 transition" />
        </Link>

        <Link
          to="/login"
          className="btn btn-sm border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white transition"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="btn btn-sm bg-emerald-600 text-white hover:bg-emerald-700 transition"
        >
          Signup
        </Link>
      </div>
    </div>
  );
};

export default Header;
