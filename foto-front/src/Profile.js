import React from 'react';
import './css/Feed.css';
import Menu from './Menu';

export default function Profile() {

    console.log("username : " + localStorage.getItem('username'));
    console.log("password : " + localStorage.getItem('password'));
    console.log("token : " + localStorage.getItem('token'));
    console.log("loggedIn : " + localStorage.getItem('loggedIn'));

    return (
        <div >
            <Menu currentPage='profile'/>
            <h1>profiiiiiiiiiile</h1>
        </div>
    );
    
}