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
                    <span>
                        <a
                            className = { Styles.phone }
                            href = { `tel:${phone}` }>{ phone }
                        </a>
                    </span>
                    <span>&copy; 2017 { profileData.name }</span>
                    <span>
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
                    </span>
                </div>
            </section>
        );
    }
}
