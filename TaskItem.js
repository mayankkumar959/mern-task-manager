import axios from "axios";

function TaskItem({ task, fetchTasks }) {

  const deleteTask = async () => {
    await axios.delete(`http://localhost:5000/api/tasks/${task._id}`);
    fetchTasks();
  };

  const toggleStatus = async () => {
    await axios.put(`http://localhost:5000/api/tasks/${task._id}`, {
      status: task.status === "Pending" ? "Completed" : "Pending"
    });
    fetchTasks();
  };

  return (
    <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>

      <button onClick={toggleStatus}>Toggle Status</button>
      <button onClick={deleteTask}>Delete</button>
    </div>
  );
}

export default TaskItem;