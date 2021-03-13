import React from 'react';
import './css/Admin.css';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import SyncIcon from '@material-ui/icons/Sync';
import Menu from './Menu';
import { Redirect } from 'react-router-dom';

class Table extends React.Component {

    render() {

        function remove(user) {
            console.log("Remove", user)
        }

        function changepw(user) {
            console.log("Change password", user)
        }

        const data = [
            {
                username: "Alexandre",
                password: "toto",
                mail: "alexandre.ansel@gmail.com"
            },
            {
                username: "Alexandre",
                password: "titi",
                mail: "alexandre.azzaro@gmail.com"

            },
            {
                username: "Julien",
                password: "tata",
                mail: "julien.dupuis@gmail.com"
            },

        ]

        let rows = [];

        data.map((user) =>
            rows.push(
                <tr>
                    <td>{user.username}</td>
                    <td>{user.mail}</td>
                    <td>
                        <IconButton aria-label="delete" onClick={() => changepw(user.username)}>
                            <SyncIcon fontSize="large" />
                        </IconButton>
                    </td>
                    <td>
                        <IconButton aria-label="delete" onClick={() => remove(user.username)}>
                            <DeleteIcon fontSize="large" />
                        </IconButton>
                    </td>
                </tr>
            )
        );


        // for (let key in data) {
        //     console.log(key);
        //     rows.push(
        //         <tr>
        //             <td>{data[key].username}</td>
        //             <td>{data[key].mail}</td>
        //             <td>{data[key].password}</td>
        //             <td>
        //                 <IconButton aria-label="delete" onClick={remove}>
        //                     <DeleteIcon fontSize="large" />
        //                 </IconButton>
        //             </td>
        //         </tr>
        //     );
        // };


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

    if(localStorage.getItem('loggedIn') !== 'true') {
    // if (localStorage.getItem('loggedIn') === 'true') {
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