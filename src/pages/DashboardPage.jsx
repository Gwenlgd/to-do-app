import Calendar from "../components/Calendar/Calendar";
import Quotes from "../components/Quotes/Quotes";
import Clock from "../components/Clock/Clock";
import TasksOfTheDay from "../components/Tasks/TasksOfTheDay";
import FormNewTasks from "../components/Tasks/FormNewTasks";
import FormNewNotes from "../components/Notes/FormNewNotes";
// import Notes from "../components/Notes/Notes";

function DashboardPage({ addNote, addTask, tasks, setTasks }) {
  return (
    <div className="container-dash">
      <div className="container-top">
        <div className="calendar">
          <Calendar />
        </div>
        <div className="notes">
          <FormNewNotes addNote={addNote} />
        </div>
        <div className="form-new-tasks">
          <FormNewTasks addTask={addTask} />
          {/* <Tasks /> */}
        </div>
      </div>

      <div className="container-bottom">
        <div className="tasks-display">
          <TasksOfTheDay addTask={addTask} tasks={tasks} setTasks={setTasks} />
        </div>

        <div className="little-things">
          <div className="quotes-container">
            <Quotes />
          </div>
          <div className="clock-container">
            <Clock />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
