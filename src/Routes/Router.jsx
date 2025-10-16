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

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:5000/tasks"),
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
        element: <Profile></Profile>,
      },
      {
        path: "/browse-task",
        loader: () => fetch("http://localhost:5000/tasks"),
        element: <BrowseTask></BrowseTask>,
      },
      {
        path: "/add-task",
        element: <AddTask></AddTask>,
      },
      {
        path: "/card-details/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/tasks/${params.id}`),
        element: <CardDetails></CardDetails>,
      },
      {
        path: "/my-posted-task",
        element: <MyPostedTask></MyPostedTask>,
      },
      {
        path: "/updateTask/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/tasks/${params.id}`),
        element: <UpdateTask></UpdateTask>,
      },
    ],
  },
]);
