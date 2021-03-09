import React, { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';
import profile from './img/profile.svg';
import logout from './img/logout.svg';
import { NavLink } from 'react-router-dom';
import './css/Menu.css';

export default function Menu () {
    
    function onSubmitLogout() {
        localStorage.setItem('id',null);
        localStorage.setItem('username',null);
        localStorage.setItem('password',null);
        localStorage.setItem('token',null);
        localStorage.setItem('loggedIn',false);
    }


	return (
        <div className="menu">
            <NavLink
                to="/feed" 
                style={{
                    textDecoration: 'none',
                    color: 'black',
                    marginLeft: '3%'
                }}>
                <span className="foto">Foto</span>
            </NavLink>

            <NavLink className="toProfile"
                to="/profile"
                style={{
                    verticalAlign: 'middle',
                    marginLeft: '50%'
                }}>
                <Image
                    className="toProfile" 
                    src={profile} 
                    width='35px'
                    height='35px'/>
            </NavLink>

            <NavLink className="toLogin"
                onClick={onSubmitLogout}
                to="/login" 
                style={{
                    verticalAlign: 'middle',
                    marginLeft: '5%'
                }}>
                <Image src={logout} 
                    width='35px'
                    height='35px'/>
            </NavLink>     
        </div>
    );
}
