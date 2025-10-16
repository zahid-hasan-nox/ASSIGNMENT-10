import React from "react";
import { Link } from "react-router-dom";

const TaskCard = ({ singleTaskCard }) => {
  const { _id, title, category, budget, email, name, description, date } =
    singleTaskCard;

  return (
    <div className="card bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 rounded-2xl">
      <div className="card-body">
        {/* Title */}
        <h2 className="card-title text-xl font-semibold text-indigo-600 mb-1">
          {title}
        </h2>

        {/* Category */}
        <div className="badge badge-outline badge-primary mb-3">{category}</div>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-3">
          {description?.length > 100
            ? description.slice(0, 100) + "..."
            : description}
        </p>

        {/* Additional Info */}
        <div className="text-gray-500 text-sm mb-2">
          <span className="font-medium text-gray-700">Budget:</span> ${budget}{" "}
          <br />
          <span className="font-medium text-gray-700">Owner:</span> {name} (
          {email})
        </div>

        {/* Deadline */}
        <p className="text-gray-500 text-sm">
          <span className="font-medium text-gray-700">Deadline:</span> {date}
        </p>

        {/* Button */}
        <div className="card-actions justify-end mt-4">
          <Link
            to={`/card-details/${_id}`}
            className="btn btn-sm bg-indigo-500 text-white border-none hover:bg-indigo-600 rounded-lg px-4"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
