import React from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/Loading animation blue.json"; //

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <Lottie
        animationData={loadingAnimation}
        loop={true}
        className="w-64 h-64"
      />
    </div>
  );
};

export default Loading;
