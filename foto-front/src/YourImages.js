import React from 'react';
import './css/YourImages.css';
import Menu from './Menu';
import { Redirect } from 'react-router-dom';
import PostList from './PostList';

export default function YourImages() {

    if(localStorage.getItem('loggedIn') !== 'true') {
        return <Redirect to="/login" />
    }

    return (
        <div className="yourImages">
            <Menu />
            <PostList type='yourImages' title='Vos images' />
        </div>
    );
    
}