import React from 'react';
import { Row,Col, Container, Image } from 'react-bootstrap';
import './css/Profile.css';
import Menu from './Menu';
import profile from './img/profile.svg';
import edit from './img/edit.svg'
import { Redirect } from 'react-router-dom';

export default function Profile() {

    console.log("id : " + localStorage.getItem('id'));
    console.log("username : " + localStorage.getItem('username'));
    console.log("loggedIn : " + localStorage.getItem('loggedIn'));

    if(localStorage.getItem('loggedIn') !== 'true') {
        return <Redirect to="/login" />
    }

    return (
        <div>
            <Menu currentPage='profile'/>
            <Container className="container">
                <Row>
                    <Col>
                        <Image  
                            src={profile} 
                            width='50px'
                            height='50px'/>
                        {'@' + localStorage.getItem('username')}
                    </Col>
                    <Col>
                        <Image  
                                src={edit} 
                                width='50px'
                                height='50px'/>
                        Modifier votre profil
                    </Col>
                </Row>
            </Container>
        </div>
    );
    
}