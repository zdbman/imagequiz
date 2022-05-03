import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//import dataService from '../data_access_layer/local_temporarily_storage';
import apiAccess from '../communication/APIAccess';


const Login = (props) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    /*let onNameChange = (e) => {
        setUsername(e.target.value);
    }*/

    let onEmailChange = (e) => {
        setEmail(e.target.value);
    }

    let onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    let onSubmitHandler = (e) => {
        e.preventDefault();
        apiAccess.login(email, password)
        .then(x => {
            if(x.done){
                props.userLoggedIn(email);
                navigate('/');
            }else{
                alert("Invalid Credentials");
            }
        })
        .catch(e => {
            console.log(e);
            alert('Something went wrong.');
        });
    }

    return (
        <Form onSubmit={onSubmitHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="Enter Username" value={email} onChange={onEmailChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Password" value={password} onChange={onPasswordChange} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
    );
}

export default Login;