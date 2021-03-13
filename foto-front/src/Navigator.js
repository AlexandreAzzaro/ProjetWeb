import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './Login';
import Feed from './Feed';
import Profile from './Profile';
import Subcription from './Subcription';
import Admin from './Admin'
import AddPicture from './AddPicture';
import PostDetail from './PostDetail';


export default function Navigator () {
    return (
        <Switch>
            <Route exact path="/">
                <Redirect to="/login" />
            </Route>

            <Route exact path="/admin">
                <Admin />
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

            <Route exact path="/subcription">
                <Subcription />
            </Route>

            <Route exact path="/profile/addPicture">
                <AddPicture />
            </Route>

            <Route exact path="/post/:id">
				<PostDetail />
			</Route>

        </Switch>
    );

}
