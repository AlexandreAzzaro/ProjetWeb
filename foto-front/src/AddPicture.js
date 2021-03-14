import React, { useRef, useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import "./css/AddPicture.css";
import { Form, Button, InputGroup } from "react-bootstrap";
import Menu from "./Menu";
import axios from 'axios';

export default function AddPicture() {
  const [img, setImg] = useState(null);
  const titleInput = useRef(null),
    photoInput = useRef(null),
    addTagsInput = useRef(null),
    addPersonInput = useRef(null),
    captionInput = useRef(null);

  const { push } = useHistory();

  let countTags = 0;
  let countPerson = 0;

  async function loadImage(e) {
    setImg(e.target.files[0]);
  }

  async function onSubmitAddPicture(e) {
    e.preventDefault();
    const username = localStorage.getItem("username");
    const title = titleInput.current.value;
    const tags = document
      .getElementsByClassName("tagsInput")[0]
      .value.split(";");
    const diffusion = document
      .getElementsByClassName("diffusionInput")[0]
      .value.split(";");
    const caption = captionInput.current.value;

   // const formData = new FormData();
   // formData.append('file', img)
    const form = {
      username: username,
      title: title,
      imageUrl:
        "https://blog.groupeastek.com/wp-content/uploads/2015/10/observatoires-photographiques-du-paysage.jpeg", // faut changer ça
      tags: tags,
      diffusion: diffusion,
      caption: caption,
      likes: 0,
      dislikes: 0,
      creation_date: Date.now(),
    };
   // formData.append('data', JSON.stringify(form))

    await fetch("http://localhost:5000/api/postImg/createImg", {
      method: "POST",
      data: form,
      //headers: { "Content-Type": "multipart/form-data" },
      headers:{ "Content-Type": "application/json; charset=UTF-8" },
    });

    // requête au back
    alert("Votre photo a bien été publiée !");
    push("/profile");
  }

  function addTag() {
    if (addTagsInput.current.value != "" && countTags == 0) {
      document.getElementsByClassName("tagsInput")[0].value +=
        addTagsInput.current.value;
    } else if (addTagsInput.current.value != "") {
      document.getElementsByClassName("tagsInput")[0].value +=
        ";" + addTagsInput.current.value;
    }
    countTags++;
    addTagsInput.current.value = "";
  }

  function addPerson() {
    if (addPersonInput.current.value != "" && countPerson == 0) {
      document.getElementsByClassName("diffusionInput")[0].value +=
        addPersonInput.current.value;
    } else if (addPersonInput.current.value != "") {
      document.getElementsByClassName("diffusionInput")[0].value +=
        ";" + addPersonInput.current.value;
    }
    countPerson++;
    addPersonInput.current.value = "";
  }

  if (localStorage.getItem('loggedIn') !== 'true') {
    return <Redirect to="/login" />
  }
  
  return (
    <div className="addPicture">
      <Menu />
      <h1>Ajouter une photo</h1>

      <Form className="subscribeForm" onSubmit={onSubmitAddPicture}>
        <div className="subscribe-border">
          <Form.Group controlId="formTitle" style={{ marginBottom: "5%" }}>
            <Form.Label className="label">
              Titre
              <br />
            </Form.Label>
            <Form.Control
              className="text"
              type="text"
              placeholder="Choisissez un titre"
              ref={titleInput}
              required
            />
          </Form.Group>

          <Form.Group controlId="formPicture" style={{ marginBottom: "5%" }}>
            <Form.Label className="label">
              Photo
              <br />
            </Form.Label>
            <Form.File
              onChange={loadImage}
              className="text"
              ref={photoInput}
              required
            />
          </Form.Group>

          <Form.Group controlId="formTags" style={{ marginBottom: "5%" }}>
            <Form.Label className="label">
              Tags
              <br />
            </Form.Label>

            <InputGroup className="text">
              <Form.Control
                type="text"
                placeholder="Entrez vos tags"
                ref={addTagsInput}
              />

              <InputGroup.Append>
                <Button className="button" onClick={addTag}>
                  Ajouter
                </Button>
              </InputGroup.Append>
            </InputGroup>

            <Form.Control className="tagsInput" type="text" required />
          </Form.Group>

          <Form.Group controlId="formDiffusion" style={{ marginBottom: "5%" }}>
            <Form.Label className="label">
              Liste de diffusion :
              <br />
            </Form.Label>

            <InputGroup className="text">
              <Form.Control
                type="text"
                placeholder="Ajoutez des personnes (optionnel)"
                ref={addPersonInput}
              />

              <InputGroup.Append>
                <Button className="button" onClick={addPerson}>
                  Ajouter
                </Button>
              </InputGroup.Append>
            </InputGroup>

            <Form.Control className="diffusionInput" type="text" />
          </Form.Group>

          <Form.Group controlId="formCaption">
            <Form.Label className="label">
              Description
              <br />
            </Form.Label>
            <Form.Control
              className="caption"
              type="text"
              placeholder="Ecrivez une description"
              as="textarea"
              ref={captionInput}
              required
            />
          </Form.Group>
        </div>
        <Button
          className="button"
          style={{ fontSize: "2em" }}
          variant="primary"
          type="submit"
        >
          Publier
        </Button>
      </Form>
    </div>
  );
}
