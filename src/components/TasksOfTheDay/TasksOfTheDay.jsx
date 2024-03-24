import Tasks from "./../Tasks/Tasks";
import { Link } from "react-router-dom";
import "./TasksOfTheDay.css";

// Add the tasks here?
function TasksOfTheDay() {
  return (
    <div>
      <h2>Your tasks for today</h2>
      <Tasks />
      <Link to="/all-tasks">See all tasks</Link>
    </div>
  );
}

export default TasksOfTheDay;
