import React from 'react';
import './css/Feed.css';
import Menu from './Menu';
import { Redirect } from 'react-router-dom';

export default function Feed() {
    
    console.log("id : " + localStorage.getItem('id'));
    console.log("username : " + localStorage.getItem('username'));
    console.log("loggedIn : " + localStorage.getItem('loggedIn'));

    if(localStorage.getItem('loggedIn') !== 'true') {
        return <Redirect to="/login" />
    }

    return (
        <div >
            <Menu currentPage='feed'/>
            <h1>feeeeeeeeeeed</h1>
        </div>
    );
    
}