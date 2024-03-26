import { useState, useEffect } from "react";
import "./Tasks.css";
import data from "../../data/tasksdata.json";

function FormNewTasks({ addTask }) {
  // const [tasks, setTasks] = useState(data);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("-1");
  const [dueDate, setDueDate] = useState("");
  const [statusTask, setStatusTask] = useState(false);
  const [showToast, setShowToast] = useState(false);

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
      id: crypto.randomUUID(),
      title,
      description,
      category,
      dueDate,
      statusTask,
    };
    addTask(newTask);
    resetInputs();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const resetInputs = () => {
    setTitle("");
    setDescription("");
    setCategory("-1");
    setDueDate("");
    setStatusTask(false);
  };

  return (
    <div>
      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <span>Add A New Task</span>
        <div>
          {/* TITLE */}
          <input
            name="title"
            type="text"
            placeholder="Title"
            id="title"
            value={title}
            onChange={handleTitle}
          />
          {/* DESCRIPTION*/}
          <input
            name="description"
            type="text"
            placeholder="Description"
            id="description"
            value={description}
            onChange={handleDescription}
          />
          {/* </div>
        <div> */}
          {/* CATEGORY */}
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
          {/* DUEDATE */}
          <input
            name="dueDate"
            type="date"
            id="dueDate"
            value={dueDate}
            onChange={handleDueDate}
          />
          {/* STATUS */}
          {/* <input
            name="statusTask"
            type="checkbox"
            id="status"
            value={statusTask}
            onChange={handleStatusTask}
          /> */}
          <button type="submit">Add</button>
        </div>
      </form>
      {showToast && <div className="toast">Task added successfully!</div>}
    </div>
  );
}

export default FormNewTasks;
