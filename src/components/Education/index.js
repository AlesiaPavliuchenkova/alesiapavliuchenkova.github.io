// Core
import React, { Component } from 'react';

// Instruments
import PropTypes from 'prop-types';
import Styles from './styles.scss';

export default class Education extends Component {
    static contextTypes = {
        avatar: PropTypes.string.isRequired
    };

    render () {
        const { avatar } = this.context;

        return (
            <section className = { Styles.education }>
                <img src = { avatar } />
                <div>
                    <h1>Education</h1>
                    <p>Take it from Linkedin api</p>
                </div>
            </section>
        );
    }
}
