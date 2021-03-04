import React, { useState, useRef } from 'react';
import './css/Login.css';
import { useHistory } from 'react-router-dom';
import {Form, Button} from 'react-bootstrap';


export default function Login() {
    const usernameInput = useRef(null),
		passwordInput = useRef(null);

	const { push } = useHistory();

    const [errorMessage, setErrorMessage] = useState("");

    console.log("username : " + localStorage.getItem('username'));
    console.log("password : " + localStorage.getItem('password'));
    console.log("token : " + localStorage.getItem('token'));
    console.log("loggedIn : " + localStorage.getItem('loggedIn'));

    function onSubmitLogin(event) {
        let usernameTest = "toto";
        let passwordTest = "tata";

        let username = usernameInput.current.value;
        let password = passwordInput.current.value;

        event.preventDefault();

        if(usernameTest === username && passwordTest === password) {
            localStorage.setItem('username',username);
            localStorage.setItem('password',password);
            localStorage.setItem('token','tbn9yIHDFB');
            localStorage.setItem('loggedIn',true);
            
            setErrorMessage("");

            push("/feed");
            
        } else {
            setErrorMessage("Le nom d'utilisateur et/ou le mot de passe ne sont pas corrects. Veuillez réessayer.");
        }        
    }

    function onSubmitSubscribe(event) {
        event.preventDefault();
        alert("inscription à faire plus tard");
    }

    
    
    return ( 
        <div id="login">
            <h1>Foto</h1>

            <Form className="loginForm" onSubmit={onSubmitLogin}>
                <Form.Group controlId="formUsername">
                    <Form.Label>Nom d'utilisateur<br/></Form.Label>
                    <Form.Control type="text" placeholder="Username" ref={usernameInput} required />
                </Form.Group>

                <Form.Group controlId="formPassword">
                    <Form.Label>Mot de passe<br/></Form.Label>
                    <Form.Control type="password" placeholder="Password" ref={passwordInput} required />
                </Form.Group>

                <Form.Text className="formError">
                    {errorMessage}<br/>
                </Form.Text>

                <Button variant="primary" type="submit">
                    Se connecter
                </Button>
            </Form>
            <Form onSubmit={onSubmitSubscribe}>
                <Button variant="primary" type="submit">
                        S'inscrire
                </Button>
            </Form>
        </div>
        
    );
}