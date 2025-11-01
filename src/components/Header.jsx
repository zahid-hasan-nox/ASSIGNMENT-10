import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logged out successfully!");
        navigate("/login");
      })
      .catch((err) => toast.error(err.message));
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/add-task", label: "Add Task" },
    { to: "/browse-task", label: "Browse Task" },
    { to: "/my-posted-task", label: "My Posted Task" },
  ];

  return (
    <div className="navbar bg-white/80 backdrop-blur-md shadow-sm hover:shadow-md sticky top-0 z-50 px-4 lg:px-10 transition-all duration-300">
      {/* Left: Brand + Mobile Menu */}
      <div className="navbar-start">
        {/* Mobile menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <GiHamburgerMenu className="text-2xl " />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white  rounded-box w-52 text-gray-700  font-medium"
          >
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    isActive
                      ? "text-emerald-600 font-semibold"
                      : "hover:text-emerald-600"
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
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
            className="text-2xl font-bold font-serif text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 transition duration-300"
          >
            Freelance
            <span className="text-gray-800 ">Pro</span>
          </Link>
        </div>
      </div>

      {/* Center: Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-6 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `relative px-2 py-1 transition ${
                    isActive
                      ? "text-emerald-600 dark:text-emerald-400 font-semibold after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-emerald-600 dark:after:bg-emerald-400 after:bottom-0 after:left-0 after:rounded-full"
                      : "hover:text-emerald-600 dark:hover:text-emerald-400"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Right: Auth + Dark Mode */}
      <div className="navbar-end flex items-center gap-3">
        {/* 🌗 Dark Mode Toggle */}

        {user ? (
          <>
            {/* Profile */}
            <Link
              to="/profile"
              className="tooltip tooltip-bottom"
              data-tip={user.displayName || "Profile"}
            >
              <img
                src={user.photoURL || "/favIcon.jpg"}
                alt="profile"
                className="w-10 h-10 rounded-full border-2 border-emerald-500 hover:scale-110 transition"
              />
            </Link>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="btn btn-sm bg-red-500 hover:bg-red-600 text-white transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="btn btn-sm border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white dark:border-emerald-400 dark:text-emerald-400 dark:hover:bg-emerald-400 dark:hover:text-gray-900 transition"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="btn btn-sm bg-emerald-600 text-white hover:bg-emerald-700 dark:bg-emerald-400 dark:text-gray-900 dark:hover:bg-emerald-300 transition"
            >
              Signup
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
