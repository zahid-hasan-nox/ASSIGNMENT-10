import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Profile = () => {
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

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 dark:bg-gray-900">
      <div className="card bg-white dark:bg-gray-800 w-96 shadow-xl border border-gray-200 dark:border-gray-700 rounded-2xl">
        <figure className="px-10 pt-10">
          <img
            src={
              user?.photoURL ||
              "https://cdn-icons-png.flaticon.com/512/847/847969.png"
            }
            alt="User"
            className="rounded-full w-32 h-32 border-4 border-emerald-500 object-cover shadow-md"
          />
        </figure>

        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl font-bold text-gray-800 dark:text-gray-100">
            {user?.displayName || "Unnamed User"}
          </h2>

          <p className="text-gray-600 dark:text-gray-300">
            {user?.email || "No email available"}
          </p>

          <div className="card-actions mt-6">
            <button
              onClick={handleLogout}
              className="btn btn-sm bg-red-500 hover:bg-red-600 text-white transition rounded-lg"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
