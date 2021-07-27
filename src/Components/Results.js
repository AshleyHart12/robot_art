import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
// import Row from "react-bootstrap/Row";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import "../App.css";
import { ProgressBar } from "react-bootstrap";

export const Results = () => {
  const [results, setResults] = useState();
  const [totalVotes, setTotalVotes] = useState([0]);

  useEffect(() => {
    fetch("https://mondo-robot-art-api.herokuapp.com/robots/", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((json) => setResults(json));
    console.log(results);
  });

  return (
    <div id="robotCardDiv">
      <Card style={{ width: "18rem" }} className="m-3">
        <Card.Body className="text-center">
          <Card.Title>Robot Name</Card.Title>
          <Card.Img
            variant="top"
            class='robotImage'
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.g0lBQ9PENwUwiTLx6oKGgwHaGL%26pid%3DApi&f=1"
          />
          <h5 style={{ padding: "10px" }}>
            {totalVotes}/{totalVotes}
          </h5>
          <ProgressBar now={totalVotes} />
        </Card.Body>
      </Card>
    </div>
  );
};
