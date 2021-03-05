import React from 'react';
import { Row,Col, Container, Image } from 'react-bootstrap';
import './css/Profile.css';
import Menu from './Menu';
import profile from './img/profile.svg';

export default function Profile() {

    console.log("id : " + localStorage.getItem('id'));
    console.log("username : " + localStorage.getItem('username'));
    console.log("password : " + localStorage.getItem('password'));
    console.log("token : " + localStorage.getItem('token'));
    console.log("loggedIn : " + localStorage.getItem('loggedIn'));

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
                    
                </Row>
            </Container>
        </div>
    );
    
}