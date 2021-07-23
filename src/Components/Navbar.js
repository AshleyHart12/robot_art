import React, { useState, useEffect } from 'react';
import '../index.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import logo from '../Assets/logo.png';

export const TopNavbar = () => {

    return (
        // <Router>
        <Navbar expand="lg" id='navbar'>
        <Container>
        <div style={{float: 'right'}}>
        <img src={logo} alt='Mondo Robot Logo' id='logoImage'/>
          <Navbar.Brand className='boldNavItem' href='userRobotCards'>Robots</Navbar.Brand>
          <Navbar.Brand  className='boldNavItem' href='results'>Results</Navbar.Brand>
          </div>
          <div style={{flat: 'right'}}>
          <Navbar.Brand  className='smallNavItem'>Admin</Navbar.Brand>
          <Navbar.Brand  className='smallNavItem'>Logout</Navbar.Brand>
          </div>
        </Container>
      </Navbar>

)}

