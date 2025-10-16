import React from "react";
import Swal from "sweetalert2";

const AddTask = () => {
  // dummy data for now (পরে context থেকে নিবি)
  const email = "example@email.com";
  const username = "Demo User";

  const handleAddTaskBtn = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const category = e.target.category.value;
    const description = e.target.description.value;
    const date = e.target.date.value;
    const budget = e.target.number.value;

    const newTask = {
      title,
      category,
      description,
      date,
      budget,
      email,
      username,
    };
    console.log(newTask);

    fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTask),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Task added successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          e.target.reset();
        }
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-semibold text-center mb-6 text-gray-700">
          Add New Task
        </h2>

        <form onSubmit={handleAddTaskBtn} className="space-y-6">
          {/* Title + Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              name="title"
              type="text"
              placeholder="Task Title"
              className="input input-bordered w-full"
            />
            <select name="category" className="select select-bordered w-full">
              <option>Web Development</option>
              <option>Design</option>
              <option>Writing</option>
              <option>Marketing</option>
              <option>Data Entry</option>
            </select>
          </div>

          {/* Description */}
          <textarea
            name="description"
            rows="5"
            placeholder="Describe your task..."
            className="textarea textarea-bordered w-full"
          />

          {/* Deadline + Budget */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <input
              name="date"
              type="date"
              className="input input-bordered w-full"
            />
            <input
              name="number"
              type="number"
              placeholder="Budget"
              className="input input-bordered w-full"
            />
            <input
              name="email"
              type="email"
              readOnly
              value={email}
              className="input input-bordered w-full bg-gray-100"
            />
          </div>

          <input
            name="username"
            type="text"
            readOnly
            value={username}
            className="input input-bordered w-full bg-gray-100"
          />

          <button
            type="submit"
            className="btn bg-indigo-500 hover:bg-indigo-600 text-white w-full"
          >
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
