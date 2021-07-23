import React, {useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import '../App.css';
import logo from '../Assets/logo.png';

export const Register = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState();

    const handleRegister = (e) => {
        // e.preventDefault();
        // fetch('https://mondo-robot-art-api.herokuapp.com/auth/register', {
        //     method: 'POST',
        //     headers: {
        //         'Authorization': `Bearer ${token}`}
        //     }).then(res => res.json()).then(json => setResult(json));
    }

    const emailEntered = (e) => {
        setEmail(e.target.value);
    }

    const nameEntered = (e) => {
        setName(e.target.value);
    }

    const passwordEntered = (e) => {
        setPassword(e.target.value);
    }

    return (
        <Container fluid className='text-center containerDiv'>
        <Form id='loginForm'>
        <img src={logo} alt='Mondo Robot Logo' style={{padding: '30px 10px 30px 10px'}}/>
        <Form.Group className="mb-3 formGroup" controlId="exampleForm.ControlTextarea1">
        <Form.Label className='formLabel'>Full Name</Form.Label>
        <Form.Control as="textarea" rows={1} value={name} onChange={nameEntered} placeholder="Enter full name" />
        </Form.Group>
        <Form.Group className="mb-3 formGroup" controlId="formBasicEmail" >
            <Form.Label className='formLabel'>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email"  value={email} onChange={emailEntered} />
        </Form.Group>
        <Form.Group className="mb-3 formGroup" controlId="formBasicPassword">
        <Form.Label className='formLabel'>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={passwordEntered} />
        </Form.Group>
        <div>
            <Button id="logInButton" type="submit" href='login'>
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
    )}

    
