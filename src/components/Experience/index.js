// Core
import React, { Component } from 'react';

// Instruments
import PropTypes from 'prop-types';
import Styles from './styles.scss';

export default class Experience extends Component {
    static contextTypes = {
        avatar:      PropTypes.string.isRequired,
        profileData: PropTypes.object
    };

    render () {
        const { avatar } = this.context;

        return (
            <section className = { Styles.experience }>
                <img src = { avatar } />
                <div>
                    <h1>Experience</h1>
                    <p>Take it from Linkedin api</p>
                </div>
            </section>
        );
    }
}
