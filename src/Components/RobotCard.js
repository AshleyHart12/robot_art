import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../App.css";

// USER ROBOT CARD CONTAINING OPTION TO VOTE
export const UserRobotCard = () => {
  const [robots, setRobots] = useState();
  const [vote, setVote] = useState();
  const token = "f4265e66163a8dafe13eff42b011af83";

  useEffect(() => {
    fetch("https://mondo-robot-art-api.herokuapp.com/robots/", {
    method: "GET",
    headers: {
      Authorization: `bearerAuth [${token}]`,
    },
  })
    .then((res) => {
      setRobots(res.data);
      console.log(robots);
    })
    .catch((error) => {
      console.log(error);
    });
  })

  const voteForRobotButton = () => {
    // GRAB ROBOT ID
     fetch('https://mondo-robot-art-api.herokuapp.com/votes/', {
        method: 'POST',
        body: {
           robot: ''
        },
    })
    .then((res) => res.json())
    .then(res => console.log(res.data))
    .catch((err) => console.log(err));
  };

  return (
    <div id="robotCardDiv">
      <Card style={{ width: "18rem" }} className="m-3">
        <Card.Body className="text-center">
          <Card.Title>Card Title</Card.Title>
          <Card.Img
            variant="top"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.g0lBQ9PENwUwiTLx6oKGgwHaGL%26pid%3DApi&f=1"
          />
          <Button variant="primary" className="m-3" id="voteForRobotButton" onClick={voteForRobotButton}>
            Vote
          </Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }} className="m-3">
        <Card.Body className="text-center">
          <Card.Title>Card Title</Card.Title>
          <Card.Img
            variant="top"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.g0lBQ9PENwUwiTLx6oKGgwHaGL%26pid%3DApi&f=1"
          />
          <Button variant="primary" className="m-3">
            Vote
          </Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }} className="m-3">
        <Card.Body className="text-center">
          <Card.Title>Card Title</Card.Title>
          <Card.Img
            variant="top"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.g0lBQ9PENwUwiTLx6oKGgwHaGL%26pid%3DApi&f=1"
          />
          <Button variant="primary" className="m-3">
            Vote
          </Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }} className="m-3">
        <Card.Body className="text-center">
          <Card.Title>Card Title</Card.Title>
          <Card.Img
            variant="top"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.g0lBQ9PENwUwiTLx6oKGgwHaGL%26pid%3DApi&f=1"
          />
          <Button variant="primary" className="m-3">
            Vote
          </Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }} className="m-3">
        <Card.Body className="text-center">
          <Card.Title>Card Title</Card.Title>
          <Card.Img
            variant="top"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.g0lBQ9PENwUwiTLx6oKGgwHaGL%26pid%3DApi&f=1"
          />
          <Button variant="primary" className="m-3">
            Vote
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

// ADMIN CARD FOR DELETING AND ADDING ROBOTS
export const AdminRobotCard = () => {
  // const [robots, setRobots] = useState();
  const [robotName, setRobotName] = useState();
  const [disabled, setDisabled] = useState(true);
  const [image, setImage] = useState();
  const [robots, setRobots] = useState({});

  // GET ALL CURRENT ROBOTS FROM DATABASE
  useEffect(() => {
    fetch("https://mondo-robot-art-api.herokuapp.com/robots/", {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin" : "*", 
        "Access-Control-Allow-Credentials" : true,
        "X-Client-Auth-Token": 'f4265e66163a8dafe13eff42b011af83'
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setRobots(res.data);
        console.log(robots);
      });
  },[robots]);

  // ADD A NEW ROBOT TO DATABASE
  const addNewRobot = () => {
    fetch("https://mondo-robot-art-api.herokuapp.com/robots/", {
      method: "POST",
      body: {
        name: {robotName} ,
        image: {image} ,
      },
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  };

  const deleteRobot = () => {
    fetch("https://mondo-robot-art-api.herokuapp.com/robots/", {
      method: "DELETE",
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  }

  const robotNameEntered = (e) => {
    setRobotName(e.target.value);
    setDisabled(false);
  };

  const clearEntry = () => {
    setRobotName("");
    setDisabled(true);
    setImage("");
  };

  const onChangePicture = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div id="robotCardDiv">
      {/* {robots.map((bot) => {
        <Card style={{ width: "18rem" }} className="m-3">
        <Card.Body className="text-center">
          <Card.Title>{bot.name}</Card.Title>
          <Card.Img
            variant="top"
            src="{bot.image}"
          />
          <Button variant="primary" className="m-3" id="editRobotButton">
            Edit
          </Button>
          <Button variant="primary" className="m-3" id="deleteRobotButton" onClick={deleteRobot}>
            Delete
          </Button>
        </Card.Body>
        </Card>
      })} */}
      <Card style={{ width: "18rem" }} className="m-3">
        <Card.Body className="text-center">
          <Card.Title>Card Title</Card.Title>
          <Card.Img
            variant="top"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.g0lBQ9PENwUwiTLx6oKGgwHaGL%26pid%3DApi&f=1"
          />
          <Button variant="primary" className="m-3" id="editRobotButton">
            Edit
          </Button>
          <Button variant="primary" className="m-3" id="deleteRobotButton">
            Delete
          </Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }} className="m-3">
        <Card.Body className="text-center">
          <Card.Title>Add Robot</Card.Title>
          <Form>
            <Form.Group
              className="mb-3 formGroup"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="formLabel">Name</Form.Label>
              <Form.Control
                type="text"
                value={robotName}
                onChange={robotNameEntered}
              />
            </Form.Group>
          </Form>
          <div>
            <input id="profilePic" type="file" onChange={onChangePicture} />
          </div>
          <div className="previewProfilePic">
            <img
              alt="robot selected to be uploaded"
              src={image}
              style={{ maxWidth: "100px", margin: "10px" }}
            />
          </div>
          <div>
            <p id="clearRobot" onClick={clearEntry} className="m-3">
              Clear
            </p>
            <Button
              id="addNewRobotButton"
              className="m-3"
              disabled={disabled}
              onClick={addNewRobot}
            >
              Add Robot
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
