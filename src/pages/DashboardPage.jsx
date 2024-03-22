// import Tasks from "./../components/Tasks/Tasks";
import Calendar from "./../components/Calendar/Calendar";
import FormNewTasks from "./../components/FormNewTasks/FormNewTasks";
import Notes from "./../components/Notes/Notes";
import TasksOfTheDay from "./../components/TasksOfTheDay/TasksOfTheDay";
import Quotes from "./../components/Quotes/Quotes";

function DashboardPage() {
  return (
    <div className="container-dashboard">
      {/* <h1>Dashboard</h1> */}
      {/* ADD : div for Calendar, form new tasks, add a note, quotes, humour, time */}
      <div className="container-top">
        <Calendar />
        {/* <Tasks /> */}
        <FormNewTasks />
        <Notes />
      </div>
      <div className="container-bottom">
        <TasksOfTheDay />

        <div className="little-things">
          <Quotes />
          <div className="moods"></div>
          <div className="time"></div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
