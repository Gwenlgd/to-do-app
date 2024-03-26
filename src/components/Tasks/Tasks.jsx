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
      <h2>TOTAL: {tasks.length} TASKS </h2>
      {sortedTasks.map((task) => {
        return (
          <div key={task.id} className="task-container-list">
            <>
              <div className="task-un">
                <div className="check-part">
                  <p>Due: {task.dueDate}</p>
                  <label class="checkbox-label">
                    <input
                      id="checkbox-st"
                      type="checkbox"
                      checked={task.status}
                      onChange={() => handleCheckboxChange(task.id)}
                    />
                  </label>
                </div>
                <div className="task-ti-cat">
                  <span>{task.title}</span>
                  <p className="task-cat">{task.category}</p>
                </div>
                <p>{task.description}</p>
                <button onClick={() => handleUpdate(task.id)}>Update</button>
                <button onClick={() => handleDelete(task.id)}>Delete</button>
              </div>
            </>
            {editingTask === task.id && (
              <>
                {" "}
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="title"
                    value={updatedTask.title}
                    onChange={handleChange}
                    required
                  />
                  <textarea
                    name="description"
                    value={updatedTask.description}
                    onChange={handleChange}
                    required
                  ></textarea>
                  <input
                    type="date"
                    name="createdAt"
                    value={updatedTask.createdAt}
                    onChange={handleChange}
                    required
                  />
                  <button type="submit">Save</button>
                </form>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Tasks;
