import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import profile from './img/profile.svg';
import logout from './img/logout.svg';
import adminlogo from './img/admin.svg';
import { NavLink } from 'react-router-dom';
import './css/Menu.css';

export default function Menu () {

    const [admin,setAdmin] = useState("");

    useEffect( () => {
		if(localStorage.getItem('admin') === 'true') {
            setAdmin(<NavLink className="toAdmin"
            to="/admin" 
            style={{
                verticalAlign: 'middle',
                marginLeft: '2%'
            }}>
            <Image src={adminlogo} 
                width='40px'
                height='40px'/>
        </NavLink>)
        }
	}, []);
    
    function onSubmitLogout() {
        localStorage.setItem('username',null);
        localStorage.setItem('loggedIn','false');
        localStorage.setItem('admin','false');
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
                    marginLeft: '30%'
                }}>
                <Image
                    className="toProfile" 
                    src={profile} 
                    width='40px'
                    height='40px'/>
            </NavLink>
            
            {admin}
            
            <NavLink className="toLogin"
                onClick={onSubmitLogout}
                to="/login" 
                style={{
                    verticalAlign: 'middle',
                    marginLeft: '2%'
                }}>
                <Image src={logout} 
                    width='40px'
                    height='40px'/>
            </NavLink>     
        </div>
    );
}
