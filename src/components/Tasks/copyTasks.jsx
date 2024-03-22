import { useState } from "react";
import data from "../../data.json";
import "./Tasks.css";

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

  return (
    <div className="list-container">
      {tasks.map((task) => {
        return (
          <div key={task.id} className="task-container">
            <h2>Title:{task.task}</h2>
            <p>Statut: {task.completed ? "Completed" : "Not Completed"}</p>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default Tasks;
