import { useState } from "react";
import data from "../../data/tasksdata.json";
import "./Tasks.css";

function TasksOfTheDay({ tasks, setTasks }) {
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
  // const tasksOfTheDay = tasks.filter((task) => task.dueDate === today);
  const tasksOfTheDay = tasks
    ? tasks.filter((task) => {
        console.log(task.dueDate, today);
        return task.dueDate === today;
      })
    : [];

  return (
    <div className="tasks-of-the-day">
      <span>Your tasks for today</span>
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
              ) : (
                <>
                  <div className="today-task">
                    <div className="first-line-task">
                      <label>
                        {/* Status: */}
                        <input
                          id="check-23"
                          type="checkbox"
                          checked={task.status}
                          onChange={() => handleCheckboxChange(task.id)}
                        />
                      </label>
                      <h3>{task.title}</h3>
                      <p className="task-cat">{task.category}</p>
                    </div>
                    <p>Description: {task.description}</p>
                    <p>Due date: {task.dueDate}</p>
                    <button onClick={() => handleUpdate(task.id)}>
                      Update
                    </button>
                    <button onClick={() => handleDelete(task.id)}>
                      Delete
                    </button>
                  </div>
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
