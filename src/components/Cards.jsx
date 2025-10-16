import React from "react";
import { useLoaderData } from "react-router";
import TaskCard from "../pages/TaskCard";
import { useNavigate } from "react-router-dom";

const Cards = () => {
  const tasks = useLoaderData();
  const navigate = useNavigate();

  // শুধু ৬টা task দেখানোর জন্য
  const displayTasks = tasks.slice(0, 6);

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-36 py-10">
      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-6
        "
      >
        {displayTasks.map((singleTaskCard) => (
          <TaskCard key={singleTaskCard._id} singleTaskCard={singleTaskCard} />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button
          onClick={() => navigate("/browse-task")}
          className="bg-emerald-600 p-3 rounded-lg text-white hover:bg-emerald-700 transition"
        >
          View All Tasks
        </button>
      </div>
    </div>
  );
};

export default Cards;
