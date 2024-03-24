import { useState } from "react";
import data from "../../datatwo.json";
import "./Tasks.css";

// ADD UPDATE !!
function Tasks() {
  const [tasks, setTasks] = useState(data);

  function handleDelete(id) {
    console.log(tasks);
    const filteredTasks = tasks.filter((oneTask) => {
      console.log(oneTask.id, id);
      return oneTask.id !== id;
    });
    setTasks(filteredTasks);
    console.log(filteredTasks);
  }

  function handleUpdate(taskId) {
    // NEED TO ADD HOW TO UPDATE
    console.log("Update task with ID:", taskId);
  }

  return (
    <div className="list-container">
      {tasks.map((task) => {
        return (
          <div key={task.id} className="task-container">
            <h2>Title:{task.title}</h2>
            <p>Category: {task.category}</p>
            <p>Description: {task.description}</p>
            <p>Due date: {task.dueDate}</p>
            <p>Statut: {task.status ? "Completed" : "Not Completed"}</p>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
            <button onClick={() => handleUpdate(task.id)}>Update</button>
          </div>
        );
      })}
    </div>
  );
}

export default Tasks;
