// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.scss';
import PropTypes from 'prop-types';
import NavBar from '../../components/NavBar';

export default class Header extends Component {
    static contextTypes = {
        profileData: PropTypes.object.isRequired
    };

    render () {
        const { profileData } = this.context;

        return (
            <section className = { Styles.header }>
                <div>
                    <h1>{ profileData.name }</h1>
                    <h2>{ profileData.company }</h2>
                    <NavBar />
                </div>
                <div />
            </section>
        );
    }
}
