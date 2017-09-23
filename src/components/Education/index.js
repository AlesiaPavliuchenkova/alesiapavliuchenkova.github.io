// Core
import React, { Component } from 'react';

// Instruments
import PropTypes from 'prop-types';
import Styles from './styles.scss';
import { getUniqueID } from '../../helpers/index';

//Constants
export const education = [
    {
        name:       'National Aviation University',
        speciality: 'Software systems',
        degree:     'specialist',
        startYear:  '2016',
        endYear:    '2018'
    },
    {
        name:       'National Technical University of Ukraine \'Kyiv Polytechnic Institute\'',
        speciality: 'Electrochemical engineer-technologist',
        degree:     'specialist',
        startYear:  '2005',
        endYear:    '2011'
    }
];

export default class Education extends Component {
    static contextTypes = {
        avatar: PropTypes.string.isRequired
    };

    shouldComponentUpdate () {
        return false;
    }

    render () {
        const { avatar } = this.context;

        return (
            <section className = { Styles.education }>
                <img src = { avatar } />
                <div>
                    <h1>Education</h1>
                    <ul>
                        { education.map((item) => (
                            <li key = { getUniqueID(15) }>
                                <span className = { Styles.header }>University: { item.name }</span>
                                <span>Speciality: { item.speciality }</span>
                                <span>Degree: { item.degree }</span>
                                <span>Years: { item.startYear } - { item.endYear }</span>
                            </li>)) }
                    </ul>
                </div>
            </section>
        );
    }
}
