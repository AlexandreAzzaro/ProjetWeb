import React, { useRef } from 'react';
import './css/AddPicture.css';
import {Form, Button, InputGroup} from 'react-bootstrap';
import Menu from './Menu'


export default function AddPicture() {

  const titleInput = useRef(null),
    photoInput = useRef(null),
    addTagsInput = useRef(null),
    captionInput = useRef(null);

  let tagsInput = "";
  let count = 0;


  function onSubmitAddPicture() {
    const title = titleInput.current.value;
    const tags = document.getElementsByClassName("tagsInput")[0].value.split(";");
    const caption = captionInput.current.value;

    

    const form = {
      title: title,
      tags: tags,
      caption: caption
    }

    alert(photoInput.current.value)
    
  }

  function addTag() {
    if (addTagsInput.current.value != "" && count == 0) {
      document.getElementsByClassName("tagsInput")[0].value += addTagsInput.current.value;
    } else if (addTagsInput.current.value != ""){
      document.getElementsByClassName("tagsInput")[0].value += ';' + addTagsInput.current.value;
    }
    count++;
    addTagsInput.current.value = "";
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
              //custom
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