import React, { Component } from "react";

import "./User.scss";
import EditModalForm from "../EditModalForm";

export default class User extends Component {

    constructor(props)
    {
        super(props);
    }

    render() {

        const { data, onDelete, onSubmitEditForm} = this.props;

        return <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col-md-2">
                        <img className="card-img-top" src={data.image} />
                    </div>
                    <div className="col-md-10">
                        <h5 className="card-title">{data.firstName} {data.lastName}</h5>
                        <ul className="mb-5">
                            <li><strong>Email:</strong> {data.email}</li>
                            <li><strong>Phone:</strong> {data.phone}</li>
                        </ul>
                        <button onClick={() => onDelete(data.id)} className="btn btn-primary mr-3">Видалити</button>
                        <EditModalForm onSubmitEditForm={onSubmitEditForm} userData={data}/>
                    </div>
                </div>
            </div>
        </div>;
    }
}