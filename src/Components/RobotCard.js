import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../App.css';
// import $ from 'jquery';

export const UserRobotCard = () => {
    const [robots, setRobots] = useState();

    fetch({
        "method": "GET",
        "url": "https://mondo-robot-art-api.herokuapp.com/robots/",
        "headers": {
          "content-type": "application/octet-stream",
          "x-rapidapi-host": "quotes15.p.rapidapi.com",
        }, "params": {
          "language_code": "en"
        }
      })
      .then((response) => {
        console.log(response);
        setRobots(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
      
 const voteForRobot = () => {

    //  fetch('https://mondo-robot-art-api.herokuapp.com/votes/', {
    //     method: 'POST',
    //     headers: {
    //        "Content-Type": "application/json"
    //     },
    // })
}

    return (
        <>
        <Card style={{ width: '18rem' }} className='m-3'>
        <Card.Body className='text-center'>
        <Card.Title>Card Title</Card.Title>
        <Card.Img variant="top" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.g0lBQ9PENwUwiTLx6oKGgwHaGL%26pid%3DApi&f=1" />
        <Button variant="primary" className='m-3' >Vote</Button>
        </Card.Body>
        </Card>
    </>
)}

// ADMIN CARD FOR DELETING AND ADDING

export const AdminRobotCard = () => {
    const [robots, setRobots] = useState();
    const [robotName, setRobotName] = useState();
    const [robotImage, setRobotImage] = useState();
    const [disabled, setDisabled] = useState(true);
      
    // useEffect(() => {
    //     fetch("https://mondo-robot-art-api.herokuapp.com/auth/session/")

    //         .then(data => console.log(data))

    //   }, [])

    const addNewRobot = () => {
        fetch('https://mondo-robot-art-api.herokuapp.com/robots/', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
}

    const robotNameEntered = (e) => {
        setRobotName(e.target.value);
        setDisabled(false);
    }

    const clearEntry = () => {
        setRobotName('');
        setDisabled(true);
        // setRobotImage('');
    }

    return (
        <Row>
    <Card style={{ width: '18rem' }} className='m-3'>
        <Card.Body className='text-center'>
        <Card.Title>Card Title</Card.Title>
        <Card.Img variant="top" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.g0lBQ9PENwUwiTLx6oKGgwHaGL%26pid%3DApi&f=1" />
        <Button variant="primary" className='m-3'>Delete</Button>
        </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className='m-3'>
        <Card.Body className='text-center'>
        <Card.Title>Add Robot</Card.Title>
        <Form>
        <Form.Group className="mb-3 formGroup" controlId="exampleForm.ControlTextarea1">
        <Form.Label className='formLabel'>Name</Form.Label>
        <Form.Control type="text" value={robotName} onChange={robotNameEntered} />
        </Form.Group>
        </Form>
        <Card.Img variant="top" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.g0lBQ9PENwUwiTLx6oKGgwHaGL%26pid%3DApi&f=1" />
        <div>
        <p id='clearRobot' onClick={clearEntry} className='m-3'>Clear</p>
        <Button id='addNewRobotButton' className='m-3' disabled={disabled}>Add Robot</Button>
        </div>
        </Card.Body>
    </Card>
    </Row>
)}
