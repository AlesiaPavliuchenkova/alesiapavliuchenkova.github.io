// Core
import React, { Component } from 'react';

// Instruments
import PropTypes from 'prop-types';
import Styles from './styles.scss';
import Form from '../../components/Form';

export default class Contact extends Component {
    static contextTypes = {
        email:       PropTypes.string.isRequired,
        fbIcon:      PropTypes.string.isRequired,
        fbLink:      PropTypes.string.isRequired,
        githubIcon:  PropTypes.string.isRequired,
        githubLink:  PropTypes.string.isRequired,
        inIcon:      PropTypes.string.isRequired,
        inLink:      PropTypes.string.isRequired,
        profileData: PropTypes.object.isRequired,
        phone:       PropTypes.string.isRequired,
        targetVal:   PropTypes.string.isRequired
    };

    render () {
        const {
            email,
            fbIcon,
            fbLink,
            githubIcon,
            githubLink,
            inIcon,
            inLink,
            profileData,
            phone,
            targetVal
        } = this.context;

        return (
            <section className = { Styles.contact }>
                <div>
                    <h1>Contact</h1>
                    <p>{ profileData.location }</p>
                    <p><a
                        href = { `mailto:${email}` }
                        target = '_top'>{ email }</a>
                    </p>
                    <p>{ phone }</p>
                    <p>
                        <a href = { fbLink } target = { targetVal }><img src = { fbIcon } /></a>
                        <a href = { githubLink } target = { targetVal }><img src = { githubIcon } /></a>
                        <a href = { inLink } target = { targetVal }><img src = { inIcon } /></a>
                    </p>
                </div>
                <Form />
            </section>
        );
    }
}
