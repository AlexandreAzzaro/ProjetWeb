import React from 'react';
import './css/Feed.css';
import Menu from './Menu';

export default function Feed() {

    console.log("username : " + localStorage.getItem('username'));
    console.log("password : " + localStorage.getItem('password'));
    console.log("token : " + localStorage.getItem('token'));
    console.log("loggedIn : " + localStorage.getItem('loggedIn'));

    return (
        <div >
            <Menu currentPage='feed'/>
            <h1>feeeeeeeeeeed</h1>
        </div>
    );
    
}