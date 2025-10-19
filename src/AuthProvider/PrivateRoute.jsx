import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner text-emerald-500"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }

  // যদি user না থাকে, signup এ রিডিরেক্ট করবে
  return <Navigate to="/signup" state={{ from: location }} replace />;
};

export default PrivateRoute;
