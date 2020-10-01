import React, { Component } from "react";

import "./AddModalForm.scss";
import {Button, Form, Modal} from "react-bootstrap";

export default class AddModalForm extends Component {

    state = {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        image: "https://icons-for-free.com/iconfiles/png/512/facebook+profile+user+profile+icon-1320184041317225686.png",
        isOpened: false,
    };

    constructor(props) {
        super(props);
    }

    onClose = () => {
        this.setState({ isOpened: false });
    };

    onOpen = () => {
        this.setState({
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            image: "https://icons-for-free.com/iconfiles/png/512/facebook+profile+user+profile+icon-1320184041317225686.png",
            isOpened: true
        });
    };

    onChangeFirstName = (e) => {
          this.setState({firstName: e.target.value});
    };

    onChangeLastName = (e) => {
        this.setState({lastName: e.target.value});
    };

    onChangeEmail = (e) => {
        this.setState({email: e.target.value});
    };

    onChangePhone = (e) => {
        this.setState({phone: e.target.value});
    };

    onChangeImage = (e) => {
        this.setState({image: e.target.value});
    };

    render() {

        const { onSubmitAddForm } = this.props;
        const { isOpened, firstName, lastName, email, image, phone } = this.state;

        return <>
            <Button variant="primary" onClick={ this.onOpen }>
                Додати користувача
            </Button>
            <Modal show={isOpened} onHide={this.onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Додавання користувача</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Control onChange={(e) => this.onChangeFirstName(e)} value={firstName} className="mt-3" type="text" placeholder="Name" />
                            <Form.Control onChange={(e) => this.onChangeLastName(e)} value={lastName} className="mt-3" type="text" placeholder="Surname" />
                            <Form.Control onChange={(e) => this.onChangeEmail(e)} value={email} className="mt-3" type="email" placeholder="Email" />
                            <Form.Control onChange={(e) => this.onChangePhone(e)} value={phone} className="mt-3" type="tel" placeholder="Phone" />
                            <Form.Control onChange={(e) => this.onChangeImage(e)} value={image} className="mt-3" type="text" placeholder="Image url" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.onClose}>
                        Скасувати
                    </Button>
                    <Button variant="primary" onClick={() => {
                        this.onClose();
                        onSubmitAddForm(this.state);
                    }}>
                        Зберегти
                    </Button>
                </Modal.Footer>
            </Modal>
        </>;
    }
}