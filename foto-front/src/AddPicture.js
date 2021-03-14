import React, { useRef, useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import "./css/AddPicture.css";
import { Form, Button, InputGroup } from "react-bootstrap";
import Menu from "./Menu";

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

  let photoUrl = "";
  
  function uploadfile(event) {

    var input = document.querySelector('input[type="file"]')

    var data = new FormData()
    
    data.append('photo', input.files[0])

    fetch("http://localhost:5000/uploadfile", {
      method: "POST",
      body: data 
    });
  }

  async function onSubmitAddPicture(event) {
    event.preventDefault();
    
    const username = localStorage.getItem("username");
    const title = titleInput.current.value;
    const tags = document
      .getElementsByClassName("tagsInput")[0]
      .value.split(";");
    const diffusion = document
      .getElementsByClassName("diffusionInput")[0]
      .value.split(";");
    const caption = captionInput.current.value;

    const form = {
      username: username,
      title: title,
      imageUrl: "C:/Users/juju-/Documents/ISEN/ProjetWeb/backend/uploads/images/98c6e90557e64a5c296d1951f035571b", 
      tags: tags,
      diffusion: diffusion,
      caption: caption,
      likes: 0,
      dislikes: 0,
      creation_date: Date.now()
    };

    await fetch("http://localhost:5000/api/postImg/createImg", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });

    alert("Votre photo a bien été publiée !");
    push("/profile");
  }

  function addTag() {
    if (addTagsInput.current.value !== "" && countTags === 0) {
      document.getElementsByClassName("tagsInput")[0].value +=
        addTagsInput.current.value;
    } else if (addTagsInput.current.value !== "") {
      document.getElementsByClassName("tagsInput")[0].value +=
        ";" + addTagsInput.current.value;
    }
    countTags++;
    addTagsInput.current.value = "";
  }

  function addPerson() {
    if (addPersonInput.current.value !== "" && countPerson === 0) {
      document.getElementsByClassName("diffusionInput")[0].value +=
        addPersonInput.current.value;
    } else if (addPersonInput.current.value !== "") {
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
            <input id="image-file" type="file" onChange={uploadfile} />
            {/* <Form.File
              className="text"
              ref={photoInput}
              onChange={uploadfile}
              required
            /> */}
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
