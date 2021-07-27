import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import "../App.css";
import { ProgressBar } from "react-bootstrap";

export const Results = () => {
  const [votes, setVotes] = useState(5);
  const [totalVotes, setTotalVotes] = useState(10);

  useEffect(() => {
    fetch("https://mondo-robot-art-api.herokuapp.com/robots/{id}/votes", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setVotes(data));

    fetch("https://mondo-robot-art-api.herokuapp.com/users", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setTotalVotes(data));
  });

  return (
    <div id="robotCardDiv">
      <Card style={{ width: "18rem" }} className="m-3">
        <Card.Body className="text-center">
          <Card.Title>Robot Name</Card.Title>
          <Card.Img
            variant="top"
            className="robotImage"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.g0lBQ9PENwUwiTLx6oKGgwHaGL%26pid%3DApi&f=1"
          />
          <h5 style={{ padding: "10px" }}>
            {votes}/{totalVotes}
          </h5>
          <ProgressBar now={votes} />
        </Card.Body>
      </Card>
    </div>
  );
};
