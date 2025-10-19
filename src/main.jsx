import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import AuthProvider from "./AuthProvider/AuthProvider";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
    <Toaster position="top-center" reverseOrder={false} />
  </AuthProvider>
);
