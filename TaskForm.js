import { useState } from "react";
import axios from "axios";

function TaskForm({ fetchTasks }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTask = async () => {
    if (!title) return alert("Title required");

    await axios.post("http://localhost:5000/api/tasks", {
      title,
      description
    });

    setTitle("");
    setDescription("");
    fetchTasks();
  };

  return (
    <div>
      <input
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <input
        placeholder="Enter description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
}

export default TaskForm;