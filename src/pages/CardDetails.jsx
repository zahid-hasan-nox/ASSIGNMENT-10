import React from "react";
import { useLoaderData } from "react-router-dom";

const CardDetails = () => {
  const task = useLoaderData(); // 👈 loader data এখানেই আসবে
  const { title, description, category, budget, date, email, name } = task;

  return (
    <div className=" bg-gray-50 flex justify-center items-center py-10 flex-col">
      <h1 className="text-4xl my-6 font-bold text-center mt-8  underline font-mono text-emerald-700">
        Task Details
      </h1>
      <div className="bg-white p-8 rounded-2xl shadow-lg w-11/12 md:w-2/3 lg:w-1/2 border border-gray-200">
        <h1 className="text-3xl font-bold text-indigo-600 mb-4">{title}</h1>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="space-y-2 text-gray-700">
          <p>
            <span className="font-semibold">Category:</span> {category}
          </p>
          <p>
            <span className="font-semibold">Budget:</span> ${budget}
          </p>
          <p>
            <span className="font-semibold">Deadline:</span> {date}
          </p>
          <p>
            <span className="font-semibold">Posted by:</span> {name} ({email})
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
