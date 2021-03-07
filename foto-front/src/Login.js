import React, { useState, useRef } from 'react';
import './css/Login.css';
import { useHistory } from 'react-router-dom';
import {Form, Button} from 'react-bootstrap';


export default function Login() {
    const usernameInput = useRef(null),
		passwordInput = useRef(null);

	const { push } = useHistory();

    const [errorMessage, setErrorMessage] = useState("");

    console.log("id : " + localStorage.getItem('id'));
    console.log("username : " + localStorage.getItem('username'));
    console.log("loggedIn : " + localStorage.getItem('loggedIn'));

    async function onSubmitLogin(event) {
        

        let username = usernameInput.current.value;
        let password = passwordInput.current.value;
        let id;

        event.preventDefault();

         const form = {
             username: username,
             password: password
         }

        await fetch('http://localhost:5000/api/user/login',{
             method:'POST',
             body:JSON.stringify(form),
             headers: {"Content-type": "application/json; charset=UTF-8"}
         })
             .then(response => console.log(JSON.stringify(response)))
        
        if(id) {
            
            localStorage.setItem("id",id);
            localStorage.setItem("username",username);
            localStorage.setItem("loggedIn",'true');

            setErrorMessage("");

            push("/feed");
            
        } else {
            setErrorMessage("Le nom d'utilisateur et/ou le mot de passe ne sont pas corrects. Veuillez réessayer.");
        }        
    }

    function onSubmitSubscribe(event) {
        event.preventDefault();
        
        push("/subcription");
    }

    
    
    return ( 
        <div className="login">
            <h1>Foto</h1>

            <Form className="loginForm" onSubmit={onSubmitLogin}>
                <Form.Group controlId="formUsername">
                    <Form.Label>Nom d'utilisateur<br/></Form.Label>
                    <Form.Control type="text" placeholder="Entrez votre pseudo" ref={usernameInput} required />
                </Form.Group>

                <Form.Group controlId="formPassword">
                    <Form.Label>Mot de passe<br/></Form.Label>
                    <Form.Control type="password" placeholder="Entrez votre mot de passe" ref={passwordInput} required />
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