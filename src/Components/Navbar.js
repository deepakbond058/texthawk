import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logo from "./Text Hawk-logos_transparent.png"

export default function Navbar(props) {
  const activeToggle=(event)=>{
    let navLinks=document.getElementsByClassName("nav-link");
    Array.from(navLinks).forEach((ele)=>{
        ele.classList="nav-link ";
      });
      event.classList="nav-link active";
    }
  
  return (
    <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img id="logoImg" src={logo} alt="img" style={{ height: "7vh" }} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/" onClick={activeToggle}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={activeToggle}>
                {props.aboutText}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="btn-group btn-group-lg mx-4"
        role="group"
        aria-label="Basic mixed styles example"
      >

        <button type="button" onClick={() => { props.toggleMode("light") }} className="btn btn-outline-dark btn-light "></button>
        <button type="button" onClick={() => { props.toggleMode("primary") }} className="btn btn-outline-dark btn-primary"></button>
        <button type="button" onClick={() => { props.toggleMode("secondary") }} className="btn btn-outline-dark btn-secondary"></button>
        <button type="button" onClick={() => { props.toggleMode("success") }} className="btn btn-outline-dark btn-success"></button>
        <button type="button" onClick={() => { props.toggleMode("danger") }} className="btn btn-outline-dark btn-danger"></button>
        <button type="button" onClick={() => { props.toggleMode("warning") }} className="btn btn-outline-dark btn-warning"></button>
        <button type="button" onClick={() => { props.toggleMode("info") }} className="btn btn-outline-dark btn-info"></button>
        <button type="button" onClick={() => { props.toggleMode("dark") }} className="btn btn-outline-dark btn-dark"></button>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};
Navbar.defaultProps = {
  title: "Title Text here",
  aboutText: "About Text here",
};
