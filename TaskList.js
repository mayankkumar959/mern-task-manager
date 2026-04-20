import TaskItem from "./TaskItem";

function TaskList({ tasks, fetchTasks }) {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task} fetchTasks={fetchTasks} />
      ))}
    </div>
  );
}

export default TaskList;