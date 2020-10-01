import React, {Component} from "react";

import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import UserList from "../UserList";
import Search from "../Search";
import {Button, Modal} from "react-bootstrap";
import AddModalForm from "../AddModalForm";

export default class App extends Component {

    state = {
        users: [
            {
                id: 1,
                firstName: "Josh",
                lastName: "Dou",
                phone: "+100 200 300",
                email: "demo@josh.com",
                image: "https://icons-for-free.com/iconfiles/png/512/facebook+profile+user+profile+icon-1320184041317225686.png"
            },
            {
                id: 2,
                firstName: "Vasya",
                lastName: "Pupkin",
                phone: "+100 200 200",
                email: "demo@pupkin.com",
                image: "https://icons-for-free.com/iconfiles/png/512/facebook+profile+user+profile+icon-1320184041317225686.png"
            },
            {
                id: 3,
                firstName: "Andrey",
                lastName: "Pupkin",
                phone: "+100 200 202",
                email: "andrey@pupkin.com",
                image: "https://icons-for-free.com/iconfiles/png/512/facebook+profile+user+profile+icon-1320184041317225686.png"
            }
        ],
        search: ""
    };

    constructor(props)
    {
        super(props);
    }

    onSearchChange = (value) => {
        this.setState({ search: value });
    };

    onUserDelete = (id) => {
        this.setState(({users}) => {
            const idx = users.findIndex((item) => item.id === id);

            const newArray = [
                ...users.slice(0, idx),
                ...users.slice(idx + 1)
            ];

            return {
                users: newArray
            }
        });
    };

    onSubmitAddForm = (data) => {

        this.setState(({users}) => {

            const user = users[users.length - 1];

            const idx = (user !== undefined) ? user.id + 1 : 1;

            const newArray = [

                ...users,
                {
                    id: idx,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    phone: data.phone,
                    email: data.email,
                    image: data.image
                }
            ];

            return {
                users: newArray
            }
        });
    };

    onSubmitEditForm = (data) => {

        this.setState(({users}) => {

            const idx = users.findIndex((item) => item.id === data.id);

            const newArray = [
                ...users.slice(0, idx),
                {
                    id: data.id,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    phone: data.phone,
                    email: data.email,
                    image: data.image
                },
                ...users.slice(idx + 1)
            ];

            return {
                users: newArray
            }
        });
    };

    render() {

        const { users, search } = this.state;

        let userFilter = users.filter(user => (user.firstName + user.lastName).toUpperCase().includes(search.toUpperCase()));

        return <div className="container">
            <div className="row">
                <Search onSearchChange={ this.onSearchChange }/>
                <div className="col-md-12 mt-4">
                    <AddModalForm onSubmitAddForm={this.onSubmitAddForm}/>
                </div>

                <UserList
                    users={ userFilter }
                    onDelete={ this.onUserDelete }
                    onSubmitEditForm={ this.onSubmitEditForm }
                />
            </div>
        </div>;
    }
}