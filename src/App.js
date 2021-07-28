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

  // GRAB THE CURRENT USER THAT IS LOGGED IN
  useEffect(() => {
    fetch("https://mondo-robot-art-api.herokuapp.com/auth/session/", {
      method: "GET"
    }).then((res) => console.log(res.data));
  });

  // COMMENTED OUT CODE BELOW IS TO CHECK IF A USER HAS LOGGED IN. IF THEY ARE LOGGED IN AS ADMIN, SHOW ALL TABS, IF THEY ARE REGULAR USER, DO NOT SHOW THE ADMIN TAB

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
