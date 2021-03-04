import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import Feed from './Feed';
import Profile from './Profile';

export default function Navigator (){

    return (
        <Switch>
            <Route exact path="/">
                <Feed />
            </Route>
            <Route exact path="/feed">
                <Feed />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route exact path="/profile">
                <Profile />
            </Route>
        </Switch>
    );

}
