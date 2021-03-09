import React from 'react';
import { Row,Col, Container, Image } from 'react-bootstrap';
import './css/Profile.css';
import Menu from './Menu';
import profile from './img/profile.svg';
import add from './img/add.svg'
import { NavLink, Redirect } from 'react-router-dom';

export default function Profile() {

    console.log("username : " + localStorage.getItem('username'));
    console.log("loggedIn : " + localStorage.getItem('loggedIn'));

    if(localStorage.getItem('loggedIn') !== 'true') {
        return <Redirect to="/login" />
    }

    return (
        <div className="profile">
            <Menu />
            
            <div className="profile-container">
                <h1>Profil</h1>
                
                <Image 
                    className="profile-logo" 
                    src={profile} 
                    width='50px'
                    height='50px'/>
                {'@' + localStorage.getItem('username')} <br/><br/>
                    
                <NavLink 
                    to="/profile" 
                    style={{
                        textDecoration: 'none',
                        color: 'black'
                    }}>
                    Vos images
                </NavLink><br/>
                <NavLink 
                    to="/profile" 
                    style={{
                        textDecoration: 'none',
                        color: 'black'
                    }}>
                    Vos Likes
                </NavLink><br/>
                <NavLink 
                    to="/profile" 
                    style={{
                        textDecoration: 'none',
                        color: 'black'
                    }}>
                    Vos Tags
                </NavLink><br/><br/>
                
                <NavLink 
                    to="/profile/addPicture" 
                    style={{
                        textDecoration: 'none',
                        color: 'black'
                    }}>
                    <Image src={add} 
                        width='30px'
                        height='30px'/>
                    &nbsp;Ajouter une photo
                </NavLink>
            </div>                
        </div>
    );
    
}