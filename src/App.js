import React, { useState, useEffect } from "react";
import { UserRobotCard, AdminRobotCard } from "./Components/RobotCard";
import { TopNavbar } from "./Components/Navbar";
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
import { Results } from "./Components/Results";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [user, setUser] = useState("");

  useEffect(() => {
    fetch("https://mondo-robot-art-api.herokuapp.com/auth/session/", {
      method: "GET"
    }).then((res) => console.log(res.data));
  });

  // if (!user.name) {
  //   return (
  //     <Login />
  //   )
  // }
  // else if (user.name === "admin") {
    return (
      <Router>
        <TopNavbar />
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/admin" component={AdminRobotCard}></Route>
        <Route exact path="/robots" component={UserRobotCard}></Route>
        <Route exact path="/results" component={Results}></Route>
        <Route exact path="/register" component={Register}></Route>
      </Router>
    );
  // } else if (user.name === "user") {
  //   return (
      // <Router>
      //   <TopNavbar />
      //   <Route exact path="/" component={Login}></Route>
      //   <Route exact path="/robots" component={UserRobotCard}></Route>
      //   <Route exact path="/results" component={Results}></Route>
      //   <Route exact path="/register" component={Register}></Route>
      // </Router>
    // );
  // }  
}

export default App;
