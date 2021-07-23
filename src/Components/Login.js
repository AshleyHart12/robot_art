import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import '../App.css';
import PropTypes from 'prop-types';
import logo from '../Assets/logo.png';

async function loginUser(credentials) {
    return fetch('https://mondo-robot-art-api.herokuapp.com/auth/session/', {
        method: 'POST',
        headers: {
            'X-Auth-Token': 'f4265e66163a8dafe13eff42b011af83',
            "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
    })
    .then(response => response.json())
}

export const Login = ({setToken}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            email, password
        });
        setToken(token);
    }

    const emailEntered = (e) => {
        setEmail(e.target.value);
    }

    const passwordEntered = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    }

    return (
        <Container fluid className='text-center'>
        <Form onSubmit={handleSubmit} id='loginForm'>
        <img src={logo} alt='Mondo Robot Logo' style={{padding: '30px 10px 30px 10px'}}/>
        <Form.Group className="mb-3 formGroup" controlId="formBasicEmail" >
            <Form.Label className='formLabel'>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email"  value={email} onChange={emailEntered} />
            {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text> */}
        </Form.Group>

        <Form.Group className="mb-3 formGroup" controlId="formBasicPassword">
        <Form.Label className='formLabel'>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={passwordEntered} />
        </Form.Group>
        <div>
            <Button id="logInButton" type="submit">
            Log In
            </Button>
            </div>
            <div>
            <Button id="registerButton" type="submit">
            Register
            </Button>
        </div>
        </Form>
        </Container>
    )}

    Login.propTypes = {
        setToken: PropTypes.func.isRequired
      }