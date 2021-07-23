import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import $ from 'jquery';

export const UserRobotCard = () => {
    const [robots, setRobots] = useState();

    fetch({
        "method": "GET",
        "url": "https://mondo-robot-art-api.herokuapp.com/robots/",
        "headers": {
          "content-type": "application/octet-stream",
          "x-rapidapi-host": "quotes15.p.rapidapi.com",
          "x-rapidapi-key": 'f4265e66163a8dafe13eff42b011af83'
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
      
    // useEffect(() => {
    //     fetch("https://mondo-robot-art-api.herokuapp.com/auth/session/")

    //         .then(data => console.log(data))

    //   }, [])

    const addNewRobot = () => {
        fetch('https://mondo-robot-art-api.herokuapp.com/robots/', {
        method: 'POST',
        headers: {
            'X-Auth-Token': 'f4265e66163a8dafe13eff42b011af83',
            "Content-Type": "application/json"
        },
        body: JSON.stringify()
    })
    .then(response => response.json())
}

    

    return (
        <>
    <Card style={{ width: '18rem' }} className='m-3'>
        <Card.Body className='text-center'>
        <Card.Title>Card Title</Card.Title>
        <Card.Img variant="top" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.g0lBQ9PENwUwiTLx6oKGgwHaGL%26pid%3DApi&f=1" />
        <Button variant="primary" className='m-3'>Delete</Button>
        </Card.Body>
    </Card>
    <Button onClick={addNewRobot}>Add New</Button>
    </>
)}
