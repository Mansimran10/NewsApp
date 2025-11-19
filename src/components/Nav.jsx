import React from "react";
import { Link } from "react-router-dom";

export default function Nav({ color, DarkModeFunc }) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${
        color === "white" ? "light" : "dark"
      } bg-${color === "white" ? "light" : "dark"}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          NewsBuddy
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/game">
                Games
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/bitcoin">
                Bitcoin
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/general">
                General
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/entertainment">
                Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/health">
                Health
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sports">
                Sports
              </Link>
            </li>
          </ul>
        </div>

        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="switchCheckDefault"
            onClick={DarkModeFunc}
          />
          <label
            className="form-check-label"
            htmlFor="switchCheckDefault"
            style={{ color: color === "black" ? "white" : "black" }}
          >
            Dark Mode
          </label>
        </div>
      </div>
    </nav>
  );
}
