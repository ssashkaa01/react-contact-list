import React, { Component } from "react";

import "./EditModalForm.scss";
import {Button, Form, Modal} from "react-bootstrap";

export default class EditModalForm extends Component {

    state = {
        id: '',
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

    onOpen = (userData) => {
        this.setState({
            id: userData.id,
            firstName: userData.firstName,
            lastName: userData.lastName,
            phone: userData.phone,
            email: userData.email,
            image: userData.image,
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

        const { onSubmitEditForm, userData } = this.props;
        const { isOpened, firstName, lastName, email, image, phone } = this.state;

        return <>
            <Button variant="primary" onClick={ () => this.onOpen(userData) }>
                Редагувати
            </Button>
            <Modal show={isOpened} onHide={this.onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Редагувати</Modal.Title>
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
                        onSubmitEditForm(this.state);
                    }}>
                        Зберегти
                    </Button>
                </Modal.Footer>
            </Modal>
        </>;
    }
}