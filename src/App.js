import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState,useEffect } from 'react';
import Alert from "./Components/Alert";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('primary');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  
  useEffect(() => {
   toggleMode(mode);
   // eslint-disable-next-line
  }, [])
  

  const toggleMode = (modeFeedback) => {
    setMode(modeFeedback);
    showAlert("Theme changed successfully", modeFeedback);
    // document.title=`TextUtils | ${modeFeedback} Theme`;
    const nav = document.querySelector("nav");
    const textArea = document.getElementById("textarea");
    const textAreaDiv = document.getElementById("textAreaDiv");
    const logoImg = document.getElementById("logoImg");
    const preview = document.getElementById("preview");
    const cardHeader = document.getElementById("card-header");
    const cardBody = document.getElementsByClassName("card-body");

    switch (modeFeedback) {
      case 'light':
        document.body.style.backgroundColor = "#7F669D"
        nav.className = `navbar navbar-expand-lg bg-${modeFeedback} navbar-light`;
        textArea.style.backgroundColor = "#FFF9B6";
        Array.from(cardBody).forEach(ele=>{
          ele.style.backgroundColor = "#FFF9B6";
          ele.style.color = "black";
        })
        cardHeader.style.color="black";
        textArea.style.color = "black";
        textAreaDiv.style.color = "white";
        preview.style.color = "white";
        logoImg.style.filter = "invert(100%)";

        break;

      case 'primary':
        document.body.style.backgroundColor = "#A3E4DB"
        nav.className = `navbar navbar-expand-lg bg-${modeFeedback} navbar-dark`;
        textArea.style.backgroundColor = "#354259";
        Array.from(cardBody).forEach(ele=>{
          ele.style.backgroundColor = "#354259";
          ele.style.color = "white";
        })
        cardHeader.style.color="white";
        textArea.style.color = "white";
        textAreaDiv.style.color = "black";
        preview.style.color = "black";
        logoImg.style.filter = "invert(0)";
        break;

      case 'secondary':
        document.body.style.backgroundColor = "#F6F6C9"
        nav.className = `navbar navbar-expand-lg bg-${modeFeedback} navbar-dark`;
        textArea.style.backgroundColor = "#3C4048";
        Array.from(cardBody).forEach(ele=>{
          ele.style.backgroundColor = "#3C4048";
          ele.style.color = "white";
        })
        cardHeader.style.color="white";
        textArea.style.color = "white";
        textAreaDiv.style.color = "black";
        preview.style.color = "black";
        logoImg.style.filter = "invert(0)";

        break;

      case 'success':
        document.body.style.backgroundColor = "#F0FF42"
        nav.className = `navbar navbar-expand-lg bg-${modeFeedback} navbar-dark`;
        textArea.style.backgroundColor = "#00A300";
        Array.from(cardBody).forEach(ele=>{
          ele.style.backgroundColor = "#00A300";
          ele.style.color = "white";
        })
        cardHeader.style.color="white";
        textArea.style.color = "white";
        textAreaDiv.style.color = "black";
        preview.style.color = "black";
        logoImg.style.filter = "invert(0)";

        break;

      case 'danger':
        document.body.style.backgroundColor = "#CFE8A9"
        nav.className = `navbar navbar-expand-lg bg-${modeFeedback} navbar-dark`;
        textArea.style.backgroundColor = "#9A1663";
        Array.from(cardBody).forEach(ele=>{
          ele.style.backgroundColor = "#9A1663";
          ele.style.color = "white";
          
        })
        cardHeader.style.color="white";
        textArea.style.color = "white";
        textAreaDiv.style.color = "black";
        preview.style.color = "black";
        logoImg.style.filter = "invert(0)";

        break;

      case 'warning':
        document.body.style.backgroundColor = "#D2001A"
        nav.className = `navbar navbar-expand-lg bg-${modeFeedback} navbar-light`;
        textArea.style.backgroundColor = "#E5EBB2";
        Array.from(cardBody).forEach(ele=>{
          ele.style.backgroundColor = "#E5EBB2";
          ele.style.color = "black";
        })
        cardHeader.style.color="black";
        textArea.style.color = "black";
        textAreaDiv.style.color = "white";
        preview.style.color = "white";
        logoImg.style.filter = "invert(100%)";

        break;

      case 'info':
        document.body.style.backgroundColor = "#2E0249"
        nav.className = `navbar navbar-expand-lg bg-${modeFeedback} navbar-light`;
        textArea.style.backgroundColor = "#F9CEEE";
        Array.from(cardBody).forEach(ele=>{
          ele.style.backgroundColor = "#F9CEEE";
          ele.style.color = "black";
        })
        cardHeader.style.color="black";
        textArea.style.color = "black";
        textAreaDiv.style.color = "white";
        preview.style.color = "white";
        logoImg.style.filter = "invert(100%)";

        break;
      case 'dark':
        document.body.style.backgroundColor = "#F6F6C9"
        nav.className = `navbar navbar-expand-lg bg-${modeFeedback} navbar-dark`;
        textArea.style.backgroundColor = "#064420";
        Array.from(cardBody).forEach(ele=>{
          ele.style.backgroundColor = "#064420";
          ele.style.color = "white";
        })
        cardHeader.style.color="white";
        textArea.style.color = "white";
        textAreaDiv.style.color = "black";
        preview.style.color = "black";
        logoImg.style.filter = "invert(0)";

        break;

      default: break;
    }
  }

  return (
    <Router>
      <Navbar title="TextUtils" aboutText="About Us" toggleMode={toggleMode} mode={mode} />
      <Alert alert={alert} />
      <Routes>
        <Route exact path="/about" element={<About />}>
        </Route>

        <Route exact path="/" element={<TextForm mode={mode} toggleMode={toggleMode} heading="Enter Your Text Here.... " showAlert={showAlert} />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
