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
        await fetch('http://localhost:5000/api/user/getAllUsr')
            .then(response => response.json())
            .then(result => {
                this.setState({ data: result })
            })
    };

    async remove(user) {
        if(user != 'admin') { 
            fetch('http://localhost:5000/api/user/deleteUsr/' + user, {
                method: 'DELETE',
            })
                .then(alert("L'utilisateur " + user + " a été supprimé"))
        } else {
            alert("Vous ne pouvez pas supprimer l'admin !")
        }
    }

    async changepw(user) {
        const input = document.getElementById("newMdp" + user);
        const newPW = input.value;
        if (newPW === "") {
            alert("Password can not be empty !");
            return;
        }
        input.value = "";

        const data = {
            username: user,
            password: newPW
        }

        console.log(data);

        // Ca ne marche pas

        //     await fetch('http://localhost:5000/api/user/modifyUsr/' + user, {
        //         method: 'PUT',
        //         body: JSON.stringify(data),
        //         headers: { "Content-type": "application/json; charset=UTF-8" }
        //     })
        //         .then(alert("Le mot de passe a bien été modifié"))
        //         // .catch(alert("Erreur lors de la modification du mot de passe"))
    }

    render() {

        let rows = [];

        const users = this.state.data;

        users.map((user) =>
            rows.push(
                <tr>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>

                        <Form className="changeMdp">
                            <Form.Control
                                id={"newMdp" + user.username}
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

    if (localStorage.getItem('loggedIn') !== 'true') {
        return <Redirect to="/login" />
    }

    if (localStorage.getItem('admin') !== 'true') {
        return <Redirect to="/feed" />
    }

    return (
        <div >
            <Menu currentPage='admin' />
            <h1 className="adminTitle">Admin Panel</h1>
            <Table />

        </div>
    );



}