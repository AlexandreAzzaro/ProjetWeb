import React from 'react';
import { Row,Col, Container, Image } from 'react-bootstrap';
import './css/Profile.css';
import Menu from './Menu';
import profile from './img/profile.svg';
import edit from './img/edit.svg'
import { NavLink, Redirect } from 'react-router-dom';

export default function Profile() {

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
                    
                        <Image  
                            src={profile} 
                            width='50px'
                            height='50px'/>
                        {'@' + localStorage.getItem('username')}
                    
                        <NavLink 
                            className="edit"
                            to="/profile">
                            <Image  
                                    src={edit} 
                                    width='50px'
                                    height='50px'/>
                            Modifier votre profil
                        </NavLink>
                </Row>
                <Row style={{marginTop: '5%'}}>
                    <NavLink to="/profile">Vos images</NavLink>
                </Row>
                <Row>
                    <NavLink to="/profile">Likes</NavLink>
                </Row>
                <Row>
                    <NavLink to="/profile">Tags</NavLink>
                </Row>
                <Row>
                    <NavLink to="/profile/addPicture">Ajouter une photo</NavLink>
                </Row>
            </Container>
        </div>
    );
    
}