import React, { Component } from "react";

import "./UserList.scss";
import User from "../User";

export default class UserList extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { users, onDelete, onSubmitEditForm } = this.props;

        const listUser = users.map((item) => <li className="list-group-item p-0 mt-4">
            <User key={item.id} data={item} onDelete={onDelete} onSubmitEditForm={onSubmitEditForm}/>
        </li>);

        return <div className="col-md-12">
            <ul className="list-group list-group-flush">{listUser}</ul>
        </div>;
    }
};