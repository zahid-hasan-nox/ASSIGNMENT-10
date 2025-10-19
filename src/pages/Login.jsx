import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  // Redirect after login
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(() => {
        toast.success("Logged in successfully!");
        navigate(from, { replace: true });
      })
      .catch((err) => toast.error(err.message));
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("Logged in with Google!");
        navigate(from, { replace: true });
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleLogin} className="card-body">
          <h2 className="text-3xl font-bold text-center mb-3 text-emerald-500">
            Login
          </h2>

          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
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
              placeholder="Enter your password"
              className="input input-bordered w-full"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>

          {/* Submit button */}
          <div className="form-control mt-6">
            <button className="btn bg-emerald-500 text-white w-full">
              Login
            </button>
          </div>

          {/* Divider */}
          <div className="divider">OR</div>

          {/* Google login button */}
          <button
            type="button"
            className="btn btn-outline w-full flex items-center gap-2"
            onClick={handleGoogleLogin}
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>

          {/* Extra text */}
          <p className="text-center text-sm text-gray-600 mt-3">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-emerald-500 font-semibold link link-hover"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
