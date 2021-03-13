import React from 'react';
import './css/Feed.css';
import Menu from './Menu';
import { Redirect } from 'react-router-dom';
import PostList from './PostList';

export default function Feed() {

    console.log("username : " + localStorage.getItem('username'));
    console.log("loggedIn : " + localStorage.getItem('loggedIn'));

    if(localStorage.getItem('loggedIn') !== 'true') {
        return <Redirect to="/login" />
    }

    return (
        <div className="feed">
            <Menu />
            <PostList />
        </div>
    );
    
}