import React from 'react';
import './css/Admin.css';
import Menu from './Menu';
import { Redirect } from 'react-router-dom';

class Row extends React.Component {
    render() {
        console.log(this.props)
            return(
                <tr>
                    <td>{this.props.username}</td>
                    {/* <td>{this.props.password}</td>
                    <td>{this.props.mail}</td> */}
                    <td>password</td>
                    <td>mail</td>
                    <td>delete</td>
                </tr>
            )
    }
}

class Table extends React.Component {

    render() {
        const users = ['Alexandre', 'Alexandre', 'Julien', 'Vladimir'];
        const data = {
            user1: {
                username: "Alexandre",
                password: "toto",
                mail: "alexandre.ansel@gmail.com"
            },
            user2: {
                username: "Alexandre",
                password: "titi",
                mail: "alexandre.azzaro@gmail.com"

            },
            user3: {
                username: "Julien",
                password: "tata",
                mail: "julien.dupuis@gmail.com"
            },

        }
        let rows = [];

        Object.keys(data).map((e, i) => {
            rows.push(
            <Row user={e} />
            )
        });

        // data.map(user => {
        //     console.log(user)
        // })

        // users.forEach(user => {
        //     // console.log(user)
        //     rows.push(
        //         <tr>
        //             <td>{user}</td>
        //             <td>mail</td>
        //             <td>mdp</td>
        //             <td>delete</td>
        //         </tr>
        //     )
        // });


        return (
            <table>
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Mail</th>
                        <th>Password</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        )
    }
}

export default function Admin() {

    console.log("id : " + localStorage.getItem('id'));
    console.log("username : " + localStorage.getItem('username'));
    console.log("loggedIn : " + localStorage.getItem('loggedIn'));

    // if(localStorage.getItem('loggedIn') !== 'true') {
    if (localStorage.getItem('loggedIn') === 'true') {
        return <Redirect to="/login" />
    }

    return (
        <div >
            <Menu currentPage='admin' />
            <h1>Admin Panel</h1>
            <Table />

        </div>
    );



}