import React from 'react';
import { Image } from 'react-bootstrap';
import profile from './img/profile.svg';
import logout from './img/logout.svg';
import { NavLink } from 'react-router-dom';
import './css/Menu.css';

export default function Menu () {
    
    function onSubmitLogout() {
        localStorage.setItem('username',null);
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
                    width='40px'
                    height='40px'/>
            </NavLink>

            <NavLink className="toLogin"
                onClick={onSubmitLogout}
                to="/login" 
                style={{
                    verticalAlign: 'middle',
                    marginLeft: '5%'
                }}>
                <Image src={logout} 
                    width='40px'
                    height='40px'/>
            </NavLink>     
        </div>
    );
}
