// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.scss';
import { Transition } from 'react-transition-group';
import TweenMax from 'gsap';

//Constants
const exception = 'Ooops! Email was not sent! =( Try again.';
const success = 'Email was successfully sent =)';

export default class Form extends Component {

    constructor () {
        super();

        this.sendMessage = ::this._sendMessage;
        this.handleChange = ::this._handleChange;
        this.hideMessage = ::this._hideMessage;
    }

    state = {
        message:         '',
        subject:         '',
        email:           '',
        name:            '',
        sendEmailResult: <span />,
        hideFlag:        false,
        loader:          <span className = { Styles.loaderHide } />
    };

    componentWillUnmount () {
        clearTimeout(this.clearMessage);
    }

    _sendMessage = (e) => {
        e.preventDefault();

        this.setState({
            loader: <span className = { Styles.loaderShow }>Sending...</span>
        });

        fetch('/sendEmail', {
            method:  'POST',
            headers: {
                'Accept':       'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                name:    this.state.name,
                email:   this.state.email,
                subject: this.state.subject,
                message: this.state.message
            })
        })
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error(response.status);
                }
                this.setState({
                    sendEmailResult: <span className = { Styles.success }>{ success }</span>,
                    hideFlag:        true,
                    loader:          <span className = { Styles.loaderHide } />
                });
            })
            .catch(() => {
                this.setState({
                    sendEmailResult: <span className = { Styles.exception }>{ exception }</span>,
                    hideFlag:        true,
                    loader:          <span className = { Styles.loaderHide } />
                });
            });

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

    _hideMessage = () => {
        const { text } = this;

        clearTimeout(this.clearMessage);

        TweenMax.fromTo(
            text,
            15,
            { opacity: 1 },
            { opacity: 0 }
        );

        this.setState({
            hideFlag: false
        });

        this.clearMessage = setTimeout(() =>
            this.setState({
                sendEmailResult: <span /> }), 30000);

    };

    render () {
        const {
            message,
            name,
            email,
            subject,
            sendEmailResult,
            hideFlag,
            loader
        } = this.state;

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
                    <Transition
                        in = { hideFlag }
                        timeout = { 15000 }
                        onEnter = { this.hideMessage }>
                        <span ref = { (text) => this.text = text }>
                            { sendEmailResult }
                        </span>
                    </Transition>
                    { loader }
                </form>
            </section>
        );
    }
}
