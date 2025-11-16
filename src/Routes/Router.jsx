import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";
import BrowseTask from "../pages/BrowseTask";
import AddTask from "../pages/AddTask";
import MyPostedTask from "../pages/MyPostedTask";
import CardDetails from "../pages/CardDetails";
import UpdateTask from "../pages/UpdateTask";
import PrivateRoute from "../AuthProvider/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        loader: () =>
          fetch("https://assignment-10-server-sigma-teal.vercel.app/tasks"),
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/browse-task",
        loader: () =>
          fetch("https://assignment-10-server-sigma-teal.vercel.app/tasks"),
        element: (
          <PrivateRoute>
            <BrowseTask></BrowseTask>
          </PrivateRoute>
        ),
      },
      {
        path: "/add-task",
        element: (
          <PrivateRoute>
            <AddTask></AddTask>
          </PrivateRoute>
        ),
      },
      {
        path: "/card-details/:id",
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-sigma-teal.vercel.app/tasks/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <CardDetails></CardDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-posted-task",
        element: (
          <PrivateRoute>
            <MyPostedTask></MyPostedTask>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateTask/:id",
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-sigma-teal.vercel.app/tasks/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <UpdateTask></UpdateTask>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
