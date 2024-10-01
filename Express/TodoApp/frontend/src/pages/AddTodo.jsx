import React, { useState } from "react";
import axios from "axios";

const AddTodo = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("pending");
  const [lastDate, setLastDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:9000/todos/add",
        {
          task,
          description,
          status,
          lastDate,
        },
        { withCredentials: true } // for cookies/authentication
      );

      if (response.data.success) {
        alert("Todo added successfully!");
        // Clear the form after submission
        setTask("");
        setDescription("");
        setStatus("pending");
        setLastDate("");
      }
    } catch (error) {
      console.error("There was an error creating the todo:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Task</label>
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} required />
      </div>

      <div>
        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Status</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <div>
        <label>Last Date</label>
        <input type="date" value={lastDate} onChange={(e) => setLastDate(e.target.value)} />
      </div>

      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
