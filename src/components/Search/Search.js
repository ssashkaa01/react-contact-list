import React, { Component } from "react";

import "./Search.scss";

export default class Search extends Component {

    state = {
        value: ''
    };

    constructor(props) {
        super(props);
    }

    onChangeInput = (e) => {
        const value = e.target.value;

        if(/^[A-Za-z\s]{0,30}$/.test(value))
        {
            this.setState({ value });
            this.props.onSearchChange(value);
        }
    };

    render() {
        return <div className="col-md-12">
            <div className="row">
                <div className="col-md-12 mt-5">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Почніть вводити ім'я"
                        value={this.state.value}
                        onChange={this.onChangeInput}
                    />
                </div>
            </div>
        </div>;
    }
}