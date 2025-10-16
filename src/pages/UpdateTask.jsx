import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateTask = () => {
  const { id } = useParams();
  const [task, setTask] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/tasks/${id}`)
      .then((res) => res.json())
      .then((data) => setTask(data));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedTask = {
      title: e.target.title.value,
      category: e.target.category.value,
      description: e.target.description.value,
      date: e.target.date.value,
      budget: e.target.budget.value,
    };

    fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedTask),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Task updated successfully!",
            timer: 1500,
            showConfirmButton: false,
          });
        }
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-6 text-center">Update Task</h2>

        <form onSubmit={handleUpdate} className="space-y-4">
          <input
            type="text"
            name="title"
            defaultValue={task.title}
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name="category"
            defaultValue={task.category}
            className="input input-bordered w-full"
          />
          <textarea
            name="description"
            defaultValue={task.description}
            className="textarea textarea-bordered w-full"
          ></textarea>
          <input
            type="date"
            name="date"
            defaultValue={task.date}
            className="input input-bordered w-full"
          />
          <input
            type="number"
            name="budget"
            defaultValue={task.budget}
            className="input input-bordered w-full"
          />

          <button
            type="submit"
            className="btn bg-indigo-500 hover:bg-indigo-600 text-white w-full"
          >
            Update Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateTask;
