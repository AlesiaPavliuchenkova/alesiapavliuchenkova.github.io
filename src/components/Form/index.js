// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.scss';

export default class Form extends Component {

    constructor () {
        super();

        this.sendMessage = ::this._sendMessage;
        this.handleChange = ::this._handleChange;
    }

    state = {
        message: '',
        subject: '',
        email:   '',
        name:    ''
    };

    _sendMessage = (e) => {
        e.preventDefault();
        alert('Not ready yet =) ' + //eslint-disable-line
            'Please use email from contacts');
        this.setState({
            message: '',
            subject: '',
            email:   '',
            name:    ''
        });
    };

    _handleChange = ({ target }) => {
        this.setState({
            [target.name]: target.value
        });
    };

    render () {
        const { message, name, email, subject } = this.state;

        return (
            <section className = { Styles.form }>
                <form onSubmit = { this.sendMessage }>
                    <input
                        required
                        name = 'name'
                        placeholder = 'Name'
                        type = 'text'
                        value = { name }
                        onChange = { this.handleChange }
                    />
                    <input
                        required
                        name = 'email'
                        placeholder = 'Email'
                        type = 'email'
                        value = { email }
                        onChange = { this.handleChange }
                    />
                    <input
                        required
                        name = 'subject'
                        placeholder = 'Subject'
                        type = 'text'
                        value = { subject }
                        onChange = { this.handleChange }
                    />
                    <textarea
                        required
                        name = 'message'
                        placeholder = 'Message'
                        rows = '3'
                        value = { message }
                        onChange = { this.handleChange }
                    />
                    <input
                        className = { Styles.submit }
                        type = 'submit'
                        value = 'Send'
                    />
                </form>
            </section>
        );
    }
}
