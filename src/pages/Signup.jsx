import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Signup = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, photo, email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 my-6 p-6 bg-white rounded-lg shadow-md w-full max-w-md mx-auto"
      >
        <h2 className="text-3xl font-bold text-center mb-4 text-emerald-500">
          Sign Up
        </h2>

        {/* Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Full Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            className="input input-bordered w-full"
            // required
          />
        </div>

        {/* Photo */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Photo URL</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
            className="input input-bordered w-full"
          />
        </div>

        {/* Email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Email</span>
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
            <span className="label-text font-medium">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Confirm Password
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Confirm Password</span>
          </label>
          <input
            type="password"
            name="confirm"
            placeholder="Confirm your password"
            className="input input-bordered w-full"
            required
          />
        </div> */}

        {/* Submit Button */}
        <div className="form-control mt-4">
          <button type="submit" className="btn bg-emerald-500 text-white w-full">
            Sign Up
          </button>
        </div>

        {/* Divider */}
        <div className="divider">OR</div>

        {/* Google Sign Up Button */}
        <button
          type="button"
          className="btn btn-outline s w-full flex items-center gap-2"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        {/* Optional login link */}
        <p className="text-center text-sm mt-3 text-gray-600">
          Already have an account?{" "}
          <Link to={"/login"} className="link text-emerald-500 link-primary font-semibold">
            Log In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
