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

    state = {
        educationList: []
    };

    componentWillMount () {
        this.setState({
            educationList: education.map((item) => (
                <li key = { getUniqueID(15) }>
                    <span className = { Styles.header }>University: { item.name }</span>
                    <span>Speciality: { item.speciality }</span>
                    <span>Degree: { item.degree }</span>
                    <span>Years: { item.startYear } - { item.endYear }</span>
                </li>))
        });
    }

    render () {
        const { avatar } = this.context;
        const { educationList } = this.state;

        return (
            <section className = { Styles.education }>
                <img src = { avatar } />
                <div>
                    <h1>Education</h1>
                    <ul>
                        { educationList }
                    </ul>
                </div>
            </section>
        );
    }
}
