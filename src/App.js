import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Feed from "./Components/body/Feed";
import Widgets from "./Components/Widgets";
import LogIn from "./Components/LogIn/LogIn";
import { useStateValue } from "./Components/stateProvider";
import { BrowserRouter as Router, } from "react-router-dom";

function App() {
  const [ state, dispatch] = useStateValue()
  

  return (
    <Router>
    <div className="app">
        {
        state ? (
          <>
            <Header />

            <div className="app_body">
              <Sidebar />
              <Feed />
              <Widgets />
            </div>
          </>
        ) : (
            <LogIn />
          )
      }
    </div>
    </Router>
  );
}

export default App;
