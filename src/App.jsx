import { Routes, Route } from "react-router-dom";
import { useState } from "react";
// import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import "./App.css";
import NotFoundPage from "./pages/NotFoundPage";
import AboutPage from "./pages/AboutPage";
import DashboardPage from "./pages/DashboardPage";
import Tasks from "./components/Tasks/Tasks";
import Notes from "./components/Notes/Notes";
import dataNotes from "./data/notes.json";
import dataTasks from "./data/tasksdata.json";

function App() {
  const [notes, setNotes] = useState(dataNotes);
  const [tasks, setTasks] = useState(dataTasks);

  function addNote(note) {
    setNotes([...notes, note]);
  }

  function addTask(task) {
    setTasks([...tasks, task]);
  }
  return (
    <>
      {/* <NavBar /> */}
      <div className="main-container">
        <SideBar />

        <Routes>
          <Route
            path="/"
            element={
              <DashboardPage
                addNote={addNote}
                addTask={addTask}
                tasks={tasks}
                setTasks={setTasks}
              />
            }
          />
          <Route
            path="/tasks"
            element={<Tasks tasks={tasks} setTasks={setTasks} />}
          />
          <Route
            path="/notes"
            element={<Notes notes={notes} setNotes={setNotes} />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
