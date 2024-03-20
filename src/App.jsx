import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import Footer from "./components/Footer/Footer";
import Tasks from "./components/Tasks/Tasks";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <div className="main-container">
        <SideBar />

        <Tasks />
      </div>
      <Footer />
    </>
  );
}

export default App;
