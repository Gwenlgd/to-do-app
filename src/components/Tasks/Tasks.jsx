import { useState } from "react";
import { Link } from "react-router-dom";
import data from "../../data/tasksdata.json";
import "./Tasks.css";

function Tasks({ tasks, setTasks }) {
  const [editingTask, setEditingTask] = useState(null);
  const [updatedTask, setUpdatedTask] = useState({
    title: "",
    category: "",
    description: "",
    dueDate: "",
    status: false,
  });

  function handleDelete(id) {
    const filteredTasks = tasks.filter((oneTask) => oneTask.id !== id);
    setTasks(filteredTasks);
  }

  function handleUpdate(taskId) {
    setEditingTask(taskId);
    const taskToEdit = tasks.find((task) => task.id === taskId);
    setUpdatedTask(taskToEdit);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setUpdatedTask({ ...updatedTask, [name]: value });
  }

  function handleCheckboxChange(taskId) {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status: !task.status } : task
    );
    setTasks(updatedTasks);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const updatedTasks = tasks.map((task) =>
      task.id === editingTask ? updatedTask : task
    );
    setTasks(updatedTasks);
    setEditingTask(null);
  }

  // Sort tasks by due date (from closest to farthest)
  const sortedTasks = [...tasks].sort((a, b) => {
    return new Date(a.dueDate) - new Date(b.dueDate);
  });

  return (
    <div className="list-container">
      <Link to="/all-tasks">Show All Tasks : {tasks.length} tasks</Link>
      {sortedTasks.map((task) => {
        return (
          <div key={task.id} className="task-container">
            {editingTask === task.id ? (
              <form onSubmit={handleSubmit}>
                <label>
                  New title
                  <input
                    type="text"
                    name="title"
                    value={updatedTask.title}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label>
                  New description
                  <textarea
                    name="description"
                    value={updatedTask.description}
                    onChange={handleChange}
                    required
                  ></textarea>
                </label>
                <label>
                  New due date
                  <input
                    type="date"
                    name="createdAt"
                    value={updatedTask.createdAt}
                    onChange={handleChange}
                    required
                  />
                </label>
                <button type="submit">Save</button>
              </form>
            ) : (
              <>
                <h2>Title: {task.title}</h2>
                <p>Category: {task.category}</p>
                <p>Description: {task.description}</p>
                <p>Due date: {task.dueDate}</p>
                <label>
                  Status:
                  <input
                    type="checkbox"
                    checked={task.status}
                    onChange={() => handleCheckboxChange(task.id)}
                  />
                  {task.status ? "Completed" : "Not Completed"}
                </label>
                <button onClick={() => handleDelete(task.id)}>Delete</button>
                <button onClick={() => handleUpdate(task.id)}>Update</button>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Tasks;
