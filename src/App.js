import React from "react";
import { UserRobotCard, AdminRobotCard } from "./Components/RobotCard";
import { TopNavbar } from "./Components/Navbar";
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
import { Results } from "./Components/Results";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

function App() {
  // const [token, setToken] = useState();

  // if(!token) {
  //   console.log('no token');
  //   return <Login setToken={token} />
  // }
  return (
    // if(!user) { return '/'} else if (role === 'user) { return <Navbar> *with <UserRobotCard>} else { return <Navbar> *with <AdminRobotCard}
    <Router>
      <TopNavbar />
      <Route exact path="/" component={Login}>
      </Route>
      <Route exact path="/userRobotCards" component={UserRobotCard}>
      </Route>
      <Route exact path="/adminRobotCards" component={AdminRobotCard}>
      </Route>
      <Route exact path="/results" component={Results}>
      </Route>
      <Route exact path="/register" component={Register}>
      </Route>
    </Router>
  );
}

export default App;
