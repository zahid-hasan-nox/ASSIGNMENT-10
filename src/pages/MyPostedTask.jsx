import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MyPostedTask = () => {
  const [tasks, setTasks] = useState([]);

  // ধর তোর ইউজার লগইন করা, পরে context থেকে আনবি
  const userEmail = "example@email.com";

  // নিজের টাস্ক লোড করা
  useEffect(() => {
    fetch(`http://localhost:5000/tasks?email=${userEmail}`)
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error(err));
  }, [userEmail]);

  // Delete Function
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/tasks/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your task has been deleted.", "success");
              setTasks(tasks.filter((task) => task._id !== id));
            }
          });
      }
    });
  };

  // Update এ ক্লিক করলে অন্য পেজে পাঠানো
  const handleUpdate = (id) => {
    window.location.href = `/updateTask/${id}`;
  };

  // View Details
  const handleView = (id) => {
    window.location.href = `/taskDetails/${id}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <h2 className="text-3xl font-semibold text-center mb-6 text-gray-700">
        My Posted Tasks
      </h2>

      <div className="overflow-x-auto bg-white rounded-2xl shadow-md">
        <table className="table w-full">
          <thead className="bg-indigo-500 text-white">
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Budget</th>
              <th>Deadline</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task._id} className="hover:bg-gray-50">
                <td>{task.title}</td>
                <td>{task.category}</td>
                <td>${task.budget}</td>
                <td>{task.date}</td>
                <td className="space-x-2">
                  <button
                    onClick={() => handleView(task._id)}
                    className="btn btn-sm bg-blue-500 hover:bg-blue-600 text-white"
                  >
                    Bids
                  </button>

                  <Link to={"/update-t5555555555ask"}>
                    <button
                      onClick={() => handleUpdate(task._id)}
                      className="btn btn-sm bg-green-500 hover:bg-green-600 text-white"
                    >
                      Update
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(task._id)}
                    className="btn btn-sm bg-red-500 hover:bg-red-600 text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {tasks.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-500">
                  No tasks found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedTask;
