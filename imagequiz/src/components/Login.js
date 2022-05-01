import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import dataService from '../data_access_layer/local_temporarily_storage';


const Login = (props) => {
    const [username, setUsername] = useState('');
    //const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    let onNameChange = (e) => {
        setUsername(e.target.value);
    }

    /*let onEmailChange = (e) => {
        setEmail(e.target.value);
    }*/

    let onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    let onSubmitHandler = (e) => {
        e.preventDefault();
        let found = dataService.users.find(x => 
            (x.username.toLowerCase() === username.toLowerCase()) && x.password === password);
        if(found){
            props.userLoggedIn(username)
            navigate('/');
        }else{
            alert("The credentials are not valid!");
        }   
    }

    return (
        <Form onSubmit={onSubmitHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter Username" value={username} onChange={onNameChange} />
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