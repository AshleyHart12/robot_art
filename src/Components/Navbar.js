import React from "react";
import "../index.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";

export const TopNavbar = () => {
  return (
    // <Router>
    <Navbar collapseOnSelect expand="sm" id="navbar" className='p-2'>
       <img src={logo} alt="Mondo Robot Logo" id="logoImage" />
      {/* <Container> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            {/* <div style={{float: 'right'}}> */}
            {/* <img src={logo} alt="Mondo Robot Logo" id="logoImage" /> */}
            <Nav.Link className="boldNavItem" href="userRobotCards">
              Robots
            </Nav.Link>
            <Nav.Link className="boldNavItem" href="results">
              Results
            </Nav.Link>
            {/* </div>  */}
            <div className='rightSideNav'> 
            <Nav.Link className="smallNavItem">Admin</Nav.Link>
            <Nav.Link className="smallNavItem " href='/'>Logout</Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
  );
};
