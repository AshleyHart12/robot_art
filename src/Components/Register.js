import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "../App.css";
import logo from "../Assets/logo.png";

export const Register = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [validated, setValidated] = useState(false);

  const handleRegister = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopProgation();
    } else {
      setValidated(true);
      e.preventDefault();
      const token = "f4265e66163a8dafe13eff42b011af83";
      fetch("https://mondo-robot-art-api.herokuapp.com/auth/register", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: { name },
          email: { email },
          password: { password },
        }),
      })
        .then((res) => res.json())
        .catch((err) => console.log(err));
    }
  };

  const emailEntered = (e) => {
    setEmail(e.target.value);
  };

  const nameEntered = (e) => {
    setName(e.target.value);
  };

  const passwordEntered = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Container fluid className="text-center containerDiv">
      <Form id="loginForm" noValidate validated={validated}>
        <img
          src={logo}
          alt="Mondo Robot Logo"
          style={{ padding: "30px 10px 30px 10px" }}
        />
        <Form.Group
          className="mb-3 formGroup"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label className="formLabel">Full Name</Form.Label>
          <Form.Control
            as="textarea"
            rows={1}
            className="formInputBox"
            value={name}
            onChange={nameEntered}
            placeholder="Enter full name"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please enter a name
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3 formGroup" controlId="formBasicEmail">
          <Form.Label className="formLabel">Email address</Form.Label>
          <Form.Control
            type="email"
            className="formInputBox"
            placeholder="Enter email"
            value={email}
            onChange={emailEntered}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please enter an email
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3 formGroup" controlId="formBasicPassword">
          <Form.Label className="formLabel">Password</Form.Label>
          <Form.Control
            type="password"
            className="formInputBox"
            placeholder="Password"
            value={password}
            onChange={passwordEntered}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please enter a password
          </Form.Control.Feedback>
        </Form.Group>
        <div>
          <Button id="logInButton" type="submit" href="/">
            Back to Login
          </Button>
        </div>
        <div>
          <Button id="registerButton" type="submit" onClick={handleRegister}>
            Register
          </Button>
        </div>
      </Form>
    </Container>
  );
};
