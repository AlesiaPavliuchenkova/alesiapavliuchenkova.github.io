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
                    <p>
                        <a
                            className = { Styles.phone }
                            href = { `tel:${phone}` }>{ phone }
                        </a>
                    </p>
                    <p>
                        <a href = { fbLink } target = { targetVal }>
                            <span className = { Styles.circle }>
                                <img src = { fbIcon } />
                            </span>
                        </a>
                        <a href = { githubLink } target = { targetVal }>
                            <span className = { Styles.circle }>
                                <img src = { githubIcon } />
                            </span>
                        </a>
                        <a href = { inLink } target = { targetVal }>
                            <span className = { Styles.circle }>
                                <img src = { inIcon } />
                            </span>
                        </a>
                    </p>
                </div>
                <Form />
            </section>
        );
    }
}
