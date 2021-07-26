import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import '../App.css';
import logo from '../Assets/logo.png';

export const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    // const token = 'f4265e66163a8dafe13eff42b011af83';
    // const [result, setResult] = useState();

    // useEffect(() => {
    //     fetch('https://mondo-robot-art-api.herokuapp.com/auth/session/', {
    //         method: 'POST',
    //         headers: {
    //             'Authorization': `Bearer ${token}`}
    //         }).then(res => res.json()).then(json => setResult(json));
    //         console.log(result)
    // }, [])

    const handleSubmit = (e) => {
        const token = "f4265e66163a8dafe13eff42b011af83";
        e.preventDefault();
        fetch('https://mondo-robot-art-api.herokuapp.com/auth/session', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            }
            })
            .then(res => console.log(res.json()))
            .then(json => console.log(json));
        }


    const emailEntered = (e) => {
        setEmail(e.target.value);
    }

    const passwordEntered = (e) => {
        setPassword(e.target.value);
    }

    return (
        <Container fluid className='text-center containerDiv'>
        <Form id='loginForm'>
        <img src={logo} alt='Mondo Robot Logo' style={{padding: '30px 10px 30px 10px', maxWidth: '75%'}}/>
        <Form.Group className="mb-3 formGroup" controlId="formBasicEmail" >
            <Form.Label className='formLabel'>Email</Form.Label>
            <Form.Control type="email"  className='formInputBox' placeholder="Enter email"  value={email} onChange={emailEntered} />
        </Form.Group>
        <Form.Group className="mb-3 formGroup" controlId="formBasicPassword">
        <Form.Label className='formLabel'>Password</Form.Label>
        <Form.Control type="password" className='formInputBox' placeholder="Password" value={password} onChange={passwordEntered} />
        </Form.Group>
        <div>
            <Button id="logInButton" type="submit" onClick={handleSubmit}>
            Log In
            </Button>
            </div>
            <div>
            <Button id="registerButton" type="submit" href='register'>
            Register
            </Button>
        </div>
        </Form>
        </Container>
    )}


