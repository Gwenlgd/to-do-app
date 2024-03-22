import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import Footer from "./components/Footer/Footer";
// import Calendar from "./components/Calendar/Calendar";
import "./App.css";
import NotFoundPage from "./pages/NotFoundPage";
import AboutPage from "./pages/AboutPage";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <>
      <NavBar />
      <div className="main-container">
        <SideBar />
        {/* GWEN : je commente pour design mais ok pour le merge */}
        {/*  + enlever l'import calendar ici */}
        {/* <Calendar /> */}

        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
