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
    console.log("loggedIn : " + localStorage.getItem('loggedIn'));

    async function onSubmitLogin(event) {
        
        let username = usernameInput.current.value;
        let password = passwordInput.current.value;

        event.preventDefault();

          const form = {
              username: username,
              password: password
          }

         let reqLog = await fetch('http://localhost:5000/api/user/login',{
              method:'POST',
              body:JSON.stringify(form),
              headers: {"Content-type": "application/json; charset=UTF-8"}
          })

        if(reqLog.status === 200) {

            let admin = 'false';
            let reqAdmin = await fetch(`http://localhost:5000/api/user/isAdmin/${username}`);
        
            if(reqAdmin.status === 200) {
                admin = 'true';
            }

            localStorage.setItem("username",username);
            localStorage.setItem("loggedIn",'true');
            localStorage.setItem("admin",admin)

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
                    <Form.Label className="label">Nom d'utilisateur<br/></Form.Label>
                    <Form.Control className="text" type="text" placeholder="Entrez votre pseudo" ref={usernameInput} required />
                </Form.Group>

                <Form.Group controlId="formPassword">
                    <Form.Label className="label">Mot de passe<br/></Form.Label>
                    <Form.Control className="text" type="password" placeholder="Entrez votre mot de passe" ref={passwordInput} required />
                </Form.Group>
                

                <Form.Text className="formError">
                    {errorMessage}
                </Form.Text>
                <br/>
                <Button className="button" variant="primary" type="submit">
                    Se connecter
                </Button>
            </Form><br/>
            <Form onSubmit={onSubmitSubscribe}>
                <Button className="button" variant="primary" type="submit">
                        S'inscrire
                </Button>
            </Form>
        </div>
        
    );
}