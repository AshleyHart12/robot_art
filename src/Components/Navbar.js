import React from "react";
import "../index.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../Assets/logo.png";

export const TopNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="sm" id="navbar" className="p-2">
      <img src={logo} alt="Mondo Robot Logo" id="logoImage" />
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className="boldNavItem" href="robots">
            Robots
          </Nav.Link>
          <Nav.Link className="boldNavItem" href="results">
            Results
          </Nav.Link>
          <div className="rightSideNav">
            <Nav.Link className="smallNavItem" href="admin">
              Admin
            </Nav.Link>
            <Nav.Link className="smallNavItem " href="/">
              Logout
            </Nav.Link>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
