// Core
import React, { Component } from 'react';

// Instruments
import PropTypes from 'prop-types';
import Styles from './styles.scss';
import { getUniqueID } from '../../helpers/index';

//Constants
export const experience = [
    {
        company:   'Luxoft',
        position:  'Oracle Developer',
        startYear: 'Jan 2015',
        endYear:   'till now'
    },
    {
        company:   'Luxoft',
        position:  'Junior Oracle Developer',
        startYear: 'Mar 2014',
        endYear:   'Jan 2015'
    },
    {
        company:   'Private Entrepreneur (not related with IT)',
        position:  'self-employed',
        startYear: '2012',
        endYear:   '2013'
    }
];

export default class Experience extends Component {
    static contextTypes = {
        avatar: PropTypes.string.isRequired
    };

    shouldComponentUpdate () {
        return false;
    }

    render () {
        const { avatar } = this.context;

        return (
            <section className = { Styles.experience }>
                <img src = { avatar } />
                <div>
                    <h1>Experience</h1>
                    <ul>
                        { experience.map((item) => (
                            <li key = { getUniqueID(15) }>
                                <span className = { Styles.header }>Company: { item.company }</span>
                                <span>Position: { item.position }</span>
                                <span>Years: { item.startYear } - { item.endYear }</span>
                            </li>)) }
                    </ul>
                </div>
            </section>
        );
    }
}
