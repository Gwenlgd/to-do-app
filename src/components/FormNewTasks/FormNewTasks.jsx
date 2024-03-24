import { useState, useEffect } from "react";
import "./FormNewTasks.css";
import data from "../../datatwo.json";

function FormNewTasks() {
  const [tasks, setTasks] = useState(data);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("-1");
  const [dueDate, setDueDate] = useState("");
  const [statusTask, setStatusTask] = useState(false);

  useEffect(() => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    const formattedDate = `${day}-${month}-${year}`;
    setDueDate(formattedDate);
  }, []);

  const handleTitle = (e) => setTitle(e.currentTarget.value);
  const handleDescription = (e) => setDescription(e.currentTarget.value);
  const handleCategory = (e) => setCategory(e.currentTarget.value);
  const handleDueDate = (e) => setDueDate(e.currentTarget.value);
  const handleStatusTask = (e) => setStatusTask(e.currentTarget.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      title,
      description,
      category,
      dueDate,
      statusTask,
    };

    setTasks([...tasks, newTask]);
    resetInputs();
  };

  const resetInputs = () => {
    setTitle("");
    setDescription("");
    setCategory("-1");
    dueDate("");
    setStatusTask(false);
  };
  return (
    <div>
      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <span>Add A New Task</span>
        <div>
          <label>
            Title
            <input
              name="title"
              type="text"
              placeholder="title"
              id="title"
              value={title}
              onChange={handleTitle}
            />
          </label>
          <label>
            Description
            <input
              name="description"
              type="text"
              placeholder="description"
              id="description"
              value={description}
              onChange={handleDescription}
            />
          </label>
        </div>
        <div>
          <label>
            Category
            <select
              name="category"
              id="category"
              value={category}
              onChange={handleCategory}
            >
              <option disabled value="-1">
                -- None --
              </option>
              <option value="Work Projects">Work Projects</option>
              <option value="Personal Errands">Personal Errands</option>
              <option value="Health & Fitness">Health & Fitness</option>
              <option value="Home Maintenance">Home Maintenance</option>
              <option value="Financial Management">Financial Management</option>
              <option value="Education & Learning">Education & Learning</option>
              <option value="Travel Planning">Travel Planning</option>
            </select>
          </label>

          <label>
            Due Date
            <input
              name="dueDate"
              type="date"
              id="dueDate"
              value={dueDate}
              onChange={handleDueDate}
            />
          </label>

          <label>
            Status Task
            <input
              name="statusTask"
              type="checkbox"
              id="status"
              value={statusTask}
              onChange={handleStatusTask}
            />
          </label>

          <button type="submit">Add New Task</button>
        </div>
      </form>
    </div>
  );
}

export default FormNewTasks;
