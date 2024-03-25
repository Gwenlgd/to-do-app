import { useState } from "react";
import data from "../../data/tasksdata.json";
import "./Tasks.css";

function TasksOfTheDay() {
  const [tasks, setTasks] = useState(data);
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

  const today = new Date().toISOString().split("T")[0];
  const tasksOfTheDay = tasks.filter((task) => task.dueDate === today);

  return (
    <div>
      <h2>Your tasks for today</h2>
      {tasksOfTheDay.length === 0 ? (
        <div>
          <h3>No tasks for today. Please add one.</h3>
        </div>
      ) : (
        tasksOfTheDay.map((task) => {
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
                  <h3>Title: {task.title}</h3>
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
        })
      )}
    </div>
  );
}

export default TasksOfTheDay;
