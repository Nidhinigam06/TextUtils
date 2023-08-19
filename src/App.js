import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import React, { useState } from "react";
import Alert from "./Components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //weather dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode hasbeen enabled", "success");
      document.title = "TextUtils - Dark Mode";
      //  setInterval(()=> {
      //   document.title = "TextUtils is Amazing";
      // // },2000);
      // setInterval(()=> {
      //   document.title = " Install TextUtils Now";
      // },1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode hasbeen enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
      {/* { <Navbar  title = "TextUtils" AboutText="About TextUtils" /> } */}
      {/* <Navbar/> */}
       {/* <Router> */}
        <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes>
            <Route  exact path="/about" element={<About />} /> */}

            {/* <Route
              exact path="/"
              element={
                <Textform
                  showAlert={showAlert}
                  heading="Enter the text to analyze below"
                  mode={mode}
                />
              }
            />
          </Routes>  */}

           <Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />  
          {/* <About/>  */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
