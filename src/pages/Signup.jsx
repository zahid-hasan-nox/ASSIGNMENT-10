import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Signup = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // Firebase createUser
    createUser(email, password)
      .then((result) => {
        // Update profile (name & photo)
        updateUserProfile(name, photo).then(() => {
          toast.success("Account created successfully 🎉");
          navigate("/"); // signup সফল হলে home এ নিয়ে যাবে
        });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-md bg-white shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-emerald-500 mb-5">
          Create an Account
        </h2>

        <form onSubmit={handleSignup} className="space-y-4">
          {/* Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Full Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Photo URL */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Profile photo link"
              className="input input-bordered w-full"
            />
          </div>

          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="example@mail.com"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="••••••"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Submit */}
          <div className="form-control mt-4">
            <button
              type="submit"
              className="btn bg-emerald-500 hover:bg-emerald-600 text-white w-full"
            >
              Sign Up
            </button>
          </div>
        </form>

        <div className="divider my-4">OR</div>

        {/* Google login */}
        <button className="btn btn-outline w-full flex items-center justify-center gap-2">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        <p className="text-center mt-4 text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-emerald-500 font-semibold link-hover"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
