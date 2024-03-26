// import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import logoWhite from "../../assets/logo-white.svg";

function SideBar() {
  return (
    <div className="side-bar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <div className="side-small">
          <li>
            <img src={logoWhite} alt="Logo" />
            <Link to="/tasks">Tasks</Link>
          </li>
        </div>
        <div className="side-small">
          <li>
            <img src={logoWhite} alt="Logo" />
            <Link to="/notes">Notes</Link>
          </li>
        </div>
        {/* <li>
          <Link to="/about">About</Link>
        </li> */}
        {/* <li>
          <Link to="/settings">Settings</Link>
        </li> */}
      </ul>
      <Footer />
    </div>
  );
}

export default SideBar;
