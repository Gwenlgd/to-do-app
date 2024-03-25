import Calendar from "../components/Calendar/Calendar";
import Quotes from "../components/Quotes/Quotes";
import Clock from "../components/Clock/Clock";
import TasksOfTheDay from "../components/Tasks/TasksOfTheDay";
import FormNewTasks from "../components/Tasks/FormNewTasks";
import FormNewNotes from "../components/Notes/FormNewNotes";
// import Notes from "../components/Notes/Notes";

function DashboardPage({ addNote, addTask }) {
  return (
    <div className="container-dash">
      <div className="container-top">
        <div className="calendar">
          <Calendar />
        </div>
        {/* <Tasks /> */}
        <div className="form-new-tasks">
          <FormNewTasks addTask={addTask} />
        </div>
        <div className="notes">
          <FormNewNotes addNote={addNote} />
        </div>
      </div>

      <div className="container-bottom">
        <div className="tasks-display">
          <TasksOfTheDay />
        </div>

        <div className="little-things">
          <div className="quotes">
            <Quotes />
          </div>
          {/* CHANGE THIS */}
          <div className="moods">
            <p>What is your mood of the day</p>
          </div>
          <div className="time">
            <Clock />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
