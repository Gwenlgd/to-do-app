import React from "react";
import Tasks from "./../Tasks/Tasks";
import data from "../../data/datatwo.json";

function AllTasks({ tasks }) {
  return (
    <div>
      <h2>All Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <h3>{task.title}</h3>
            <p>Category: {task.category}</p>
            <p>Description: {task.description}</p>
            <p>Due Date: {task.dueDate}</p>
            <p>Status: {task.status ? "Completed" : "Not Completed"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default AllTasks;
