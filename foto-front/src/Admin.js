import React from 'react';
import './css/Admin.css';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import SyncIcon from '@material-ui/icons/Sync';
import Menu from './Menu';
import { Redirect } from 'react-router-dom';
import { Form } from 'react-bootstrap';

class Table extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            passWord: ""
        };
    }

    passwordInput;

    componentDidMount() {
        this.getAllUser();
    }

    async getAllUser() {
        // GET request using fetch with async/await
        await fetch('http://localhost:5000/api/user/getAllUsr')
            .then(response => response.json())
            .then(result => {
                this.setState({ data: result })
            })
        // console.log(data);
        // data = JSON.stringify(data);
    };

    remove = (user) => {
        console.log("Remove", user)
    }

    changepw = (user) => {
        const input = document.getElementById("newMdp"+user);
        const newPW = input.value;
        if (newPW === "") {
            alert("Password can not be empty !");
            return;
        }
        input.value = "";
        console.log("New password", newPW);
        console.log("Change password", user);
    }

    render() {

        if (localStorage.getItem('loggedIn') !== 'true') {
            return <Redirect to="/login" />
        }

        if (localStorage.getItem('admin') !== 'true') {
            return <Redirect to="/feed" />
        }

        let rows = [];

        const users = this.state.data;

        // console.log(users)

        users.map((user) =>
            rows.push(
                <tr>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>

                        <Form className="changeMdp">
                            <Form.Control
                                id={"newMdp"+user.username}
                                className="text"
                                placeholder="Nouveau mot de passe"
                                required
                            ></Form.Control>

                            <IconButton aria-label="change" onClick={() => this.changepw(user.username)}>
                                <SyncIcon fontSize="large" />
                            </IconButton>
                        </Form>
                    </td>
                    <td className="test">
                        <IconButton aria-label="delete" onClick={() => this.remove(user.username)}>
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

    if (localStorage.getItem('loggedIn') !== 'true') {
        // if (localStorage.getItem('loggedIn') === 'true') {
        return <Redirect to="/login" />
    }

    return (
        <div >
            <Menu currentPage='admin' />
            <h1 className="adminTitle">Admin Panel</h1>
            <Table />

        </div>
    );



}