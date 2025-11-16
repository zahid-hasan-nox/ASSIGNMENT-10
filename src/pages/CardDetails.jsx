import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import toast from "react-hot-toast";

const CardDetails = () => {
  const task = useLoaderData(); // loader থেকে data
  const {
    _id,
    title,
    description,
    category,
    budget,
    date,
    email,
    name,
    bidsCount = 0,
  } = task;

  const [bids, setBids] = useState(bidsCount);

  // Server থেকে latest bidsCount আনতে
  useEffect(() => {
    setBids(bidsCount);
  }, [bidsCount]);

  // 🟢 handle Bid click
  const handleBid = async () => {
    try {
      const res = await fetch(
        `https://assignment-10-server-sigma-teal.vercel.app/tasks/${_id}/bid`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!res.ok) throw new Error("Failed to place bid");

      const data = await res.json();
      setBids(data.bidsCount); // update state
      toast.success("You placed a bid successfully! 🎯");
    } catch (err) {
      toast.error(err.message || "Failed to place bid 😢");
    }
  };

  return (
    <div className="bg-gray-50 flex justify-center items-center py-10 flex-col">
      <h1 className="text-4xl my-6 font-bold text-center mt-8 underline font-mono text-emerald-700">
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

        {/* Bid Count */}
        <div className="mt-6 text-lg font-semibold text-emerald-700">
          You bid for {bids} {bids === 1 ? "opportunity" : "opportunities"}.
        </div>

        {/* Bid Button */}
        <div className="mt-6">
          <button
            onClick={handleBid}
            className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition"
          >
            Place a Bid
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
