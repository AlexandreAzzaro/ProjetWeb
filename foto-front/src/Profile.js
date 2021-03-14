import React from 'react';
import { Image } from 'react-bootstrap';
import './css/Profile.css';
import Menu from './Menu';
import profile from './img/profile.svg';
import add from './img/add.svg';
import image from './img/image.svg';
import like from './img/like.svg';
import { NavLink, Redirect } from 'react-router-dom';

export default function Profile() {

    if(localStorage.getItem('loggedIn') !== 'true') {
        return <Redirect to="/login" />
    }

    return (
        <div className="profile">
            <Menu />
            <h1>Profil</h1>
            <div className="profile-container">
                
                
                <Image 
                    className="profile-logo" 
                    src={profile} 
                    width='50px'
                    height='50px'/>
                <b>{'@' + localStorage.getItem('username')} </b><br/><br/>
                
                <NavLink 
                    to="/profile" 
                    style={{
                        textDecoration: 'none',
                        color: '#D9D9D9'
                    }}>
                    <Image 
                        className="logo"
                        src={image} 
                        width='30px'
                        height='30px'/>
                    Vos images
                </NavLink><br/><br/>

                <NavLink 
                    to="/profile" 
                    style={{
                        textDecoration: 'none',
                        color: '#D9D9D9'
                    }}>
                    <Image 
                        className="logo"
                        src={like} 
                        width='30px'
                        height='30px'/>
                    Vos likes
                </NavLink><br/><br/>
                
                <NavLink 
                    to="/profile/addPicture" 
                    style={{
                        textDecoration: 'none',
                        color: '#D9D9D9'
                    }}>
                    <Image 
                        className="logo"
                        src={add} 
                        width='30px'
                        height='30px'/>
                    Ajouter une photo
                </NavLink>
            </div>                
        </div>
    );
    
}