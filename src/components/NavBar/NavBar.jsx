import React from "react";
import logo from "/src/assets/logo-todo.svg";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="nav-bar">
      <img src={logo} alt="logo-todo" />
      <h1>TO DOUX</h1>
    </nav>
  );
}

export default NavBar;
