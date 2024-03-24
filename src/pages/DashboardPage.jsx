import Calendar from "../components/Calendar/Calendar";
import FormNewTasks from "../components/Tasks/FormNewTasks";
import Notes from "../components/Notes/Notes";
import TasksOfTheDay from "../components/Tasks/TasksOfTheDay";
import Quotes from "../components/Quotes/Quotes";
import Clock from "../components/Clock/Clock";
import FormNewNotes from "../components/Notes/FormNewNotes";

function DashboardPage() {
  return (
    <div className="container-dash">
      <div className="container-top">
        <div className="calendar">
          <Calendar />
        </div>
        {/* <Tasks /> */}
        <div className="form-new-tasks">
          <FormNewTasks />
        </div>
        <div className="notes">
          <FormNewNotes />
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
