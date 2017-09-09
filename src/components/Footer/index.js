// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.scss';
import PropTypes from 'prop-types';

export default class Footer extends Component {

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
            <section className = { Styles.footer }>
                <div className = { Styles.center }>
                    <span>{ profileData.location }</span>
                    <span>
                        <a
                            href = { `mailto:${email}` }
                            target = '_top'>{ email }
                        </a>
                    </span>
                    <span>{ phone }</span>
                    <span>&copy; 2017 { profileData.name }</span>
                    <span>
                        <a href = { fbLink } target = { targetVal }><img src = { fbIcon } /></a>
                        <a href = { githubLink } target = { targetVal }><img src = { githubIcon } /></a>
                        <a href = { inLink } target = { targetVal }><img src = { inIcon } /></a>
                    </span>
                </div>
            </section>
        );
    }
}
