import React, { useState, useRef } from "react";
import "./css/Subscription.css";
import { Form, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from "react-router-dom";

export default function Subcription() {
  const [errorMessage, setErrorMessage] = useState("");
  const [birthdayInput, setBirthdayInput] = useState(new Date());
  const { push } = useHistory();

  const usernameInput = useRef(null),
    emailInput = useRef(null),
    passwordInput = useRef(null),
    verificationPasswordInput = useRef(null);

  async function onSubmitSubscribe(event) {
    event.preventDefault();

    let username = usernameInput.current.value;
    let email = emailInput.current.value;
    let birthday = birthdayInput.getUTCDate();
    let password = passwordInput.current.value;
    let verificationPassword = verificationPasswordInput.current.value;

    let reqUsername = await fetch(`http://localhost:5000/api/user/isUsernameExist/${username}`);
    let reqEmail = await fetch(`http://localhost:5000/api/user/isEmailExist/${email}`);


    if(reqUsername.status === 200) {
      setErrorMessage("Ce nom d'utilisateur existe déjà !");
    } else if(reqEmail.status === 200) {
      setErrorMessage("Cet email existe déjà !");
    } else if (password !== verificationPassword) {
      setErrorMessage("Les deux mots de passe ne correspondent pas !");
    } else {
      setErrorMessage("");

      const form = {
        username: username,
        email: email,
        birthday: birthday,
        password: password,
        admin: false,
        published_photos: [],
        liked_photos: [],
        subscribed_tags: [],
        creation_date: Date.now(),
      };

      await fetch("http://localhost:5000/api/user/signup", {
        method: "POST",
        body: JSON.stringify(form),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });

      alert("Votre compte a bien été créé ! Connectez-vous pour en profiter !");

      push('/login');
    }
  }

  return (
    <div className="subscription">
      <h1>Foto</h1>

      <Form className="subscribeForm" onSubmit={onSubmitSubscribe}>
        <Form.Group controlId="formUsername">
          <Form.Label>
            Nom d'utilisateur
            <br />
          </Form.Label>
          <Form.Control
            className="text"
            type="text"
            placeholder="Entrez votre pseudo"
            ref={usernameInput}
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>
            Email
            <br />
          </Form.Label>
          <Form.Control
            type="email"
            className="text"
            placeholder="Entrez votre email"
            ref={emailInput}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBirthday">
          <Form.Label>
            Date de naissance
          </Form.Label><br/>
          <DatePicker
          className="date"
            selected={birthdayInput}
            onChange={(date) => setBirthdayInput(date)}
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>
            Mot de passe
            <br />
          </Form.Label>
          <Form.Control
          className="text"
            type="password"
            placeholder="Entrez votre mot de passe"
            ref={passwordInput}
            required
          />
        </Form.Group>

        <Form.Group controlId="formVerificationPassword">
          <Form.Label>
            Vérification mot de passe
            <br />
          </Form.Label>
          <Form.Control
          className="text"
            type="password"
            placeholder="Entrez de nouveau votre mot de passe"
            ref={verificationPasswordInput}
            required
          />
        </Form.Group>

        <Form.Text className="formError">
          {errorMessage}
        </Form.Text>
        <br/>
        <Button className="button" variant="primary" type="submit">
          S'inscrire
        </Button>
      </Form>
    </div>
  );
}
