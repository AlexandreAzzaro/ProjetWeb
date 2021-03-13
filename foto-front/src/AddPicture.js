import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import './css/AddPicture.css';
import {Form, Button, InputGroup} from 'react-bootstrap';
import Menu from './Menu';


export default function AddPicture() {

  const titleInput = useRef(null),
    photoInput = useRef(null),
    addTagsInput = useRef(null),
    addPersonInput = useRef(null),
    captionInput = useRef(null);

  const { push } = useHistory();

  let countTags = 0;
  let countPerson = 0;

  function onSubmitAddPicture() {
    const user = localStorage.getItem('username');
    const title = titleInput.current.value;
    const tags = document.getElementsByClassName("tagsInput")[0].value.split(';');
    const diffusion = document.getElementsByClassName("diffusionInput")[0].value.split(';');
    const caption = captionInput.current.value;


    const form = {
      user : user,
      title: title,
      photo: photoInput.current.value, // faut changer ça
      tags: tags,
      diffusion: diffusion,
      caption: caption
    }


    // requête au back
    alert("Votre photo a bien été publiée !");
    push("/profile");
    
  }

  function addTag() {
    if (addTagsInput.current.value != "" && countTags == 0) {
      document.getElementsByClassName("tagsInput")[0].value += addTagsInput.current.value;
    } else if (addTagsInput.current.value != ""){
      document.getElementsByClassName("tagsInput")[0].value += ';' + addTagsInput.current.value;
    }
    countTags++;
    addTagsInput.current.value = "";
  }

  function addPerson() {
    if (addPersonInput.current.value != "" && countPerson == 0) {
      document.getElementsByClassName("diffusionInput")[0].value += addPersonInput.current.value;
    } else if (addPersonInput.current.value != ""){
      document.getElementsByClassName("diffusionInput")[0].value += ';' + addPersonInput.current.value;
    }
    countPerson++;
    addPersonInput.current.value = "";
  }

  return (
      
      <div className="addPicture">
        <Menu />
        <h1>Ajouter une photo</h1>
  
        <Form className="subscribeForm" onSubmit={onSubmitAddPicture}>
          
        <Form.Group controlId="formTitle">
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

          <Form.Group controlId="formPicture">
            <Form.Label>
              Photo
              <br />
            </Form.Label>
            <Form.File 
              className="text"
              ref={photoInput}
              required
           />
          </Form.Group>

          <Form.Group controlId="formTags">
            <Form.Label>
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
                <Button className="button" onClick={addTag}>Ajouter</Button>
              </InputGroup.Append>
              
            </InputGroup>
            
            
            <Form.Control
              className="tagsInput"
              type="text"
              required
            />
          </Form.Group>

          <Form.Group controlId="formDiffusion">
            <Form.Label>
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
                <Button className="button" onClick={addPerson}>Ajouter</Button>
              </InputGroup.Append>
              
            </InputGroup>
            
            
            <Form.Control
              className="diffusionInput"
              type="text"
            />
          </Form.Group>

          <Form.Group controlId="formCaption">
            <Form.Label>
              Description
              <br />
            </Form.Label>
            <Form.Control
              className="caption"
              type="text"
              placeholder="Ecrivez une description"
              as='textarea'
              ref={captionInput}
              required
            />
          </Form.Group>

          <Button className="button" variant="primary" type="submit">
            Publier
          </Button>
        </Form>
      </div>
    );
}