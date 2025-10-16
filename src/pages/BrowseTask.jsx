import React from "react";
import { useLoaderData } from "react-router";
import TaskCard from "../pages/TaskCard";
import { useNavigate } from "react-router-dom";

const Cards = ({ showButton = true, limit }) => {
  const tasks = useLoaderData();
  const navigate = useNavigate();

  const displayTasks = limit ? tasks.slice(0, limit) : tasks;

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-36 py-10">
      <h1 className="text-4xl text-center font-bold underline text-gray-700 mb-4">Browse Task</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayTasks.map((singleTaskCard) => (
          <TaskCard key={singleTaskCard._id} singleTaskCard={singleTaskCard} />
        ))}
      </div>

      {/* {showButton && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => navigate("/browse-task")}
            className="bg-emerald-600 p-3 rounded-lg text-white hover:bg-emerald-700 transition"
          >
            View All Tasks
          </button>
        </div>
      )} */}
    </div>
  );
};

export default Cards;
