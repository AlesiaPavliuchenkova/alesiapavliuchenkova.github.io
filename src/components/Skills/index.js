// Core
import React, { Component } from 'react';

// Instruments
import PropTypes from 'prop-types';
import Styles from './styles.scss';
import { Transition, TransitionGroup } from 'react-transition-group';
import TweenMax from 'gsap';

// Constants
export const skills = [
    'Oracle',
    'SQL',
    'PL/SQL',
    'Java Core',
    'Tortoise SVN',
    'Github',
    'HTML',
    'CSS',
    'JavaScript',
    'React.js',
    'Collabnet'];

export default class Skills extends Component {
    static contextTypes = {
        avatar: PropTypes.string.isRequired
    };

    constructor () {
        super();

        this.handleLiTransition = ::this._handleLiTransition;
    }

    state = {
        skillsList: []
    };

    componentWillMount () {
        this.setState({
            skillsList: skills.map((item) => (
                <Transition
                    appear
                    in
                    key = { item }
                    timeout = { 1700 }
                    onEntered = { () => this.handleLiTransition(item) }>
                    <li
                        key = { item }
                        ref = { (skill) => this[item] = skill }><span>{item}</span>
                    </li>
                </Transition>
            ))
        });
    }

    _handleLiTransition = (obj) => {
        const skill = this[obj];
        const index = skills.indexOf(obj);

        TweenMax.fromTo(
            skill,
            1.7,
            { x: 0 },
            { x: index % 2 === 0 ? 30 : -30 });
    };

    render () {
        const { avatar } = this.context;
        const { skillsList } = this.state;

        return (
            <section className = { Styles.skills }>
                <img src = { avatar } />
                <div>
                    <h1>Skills</h1>
                    <TransitionGroup>
                        { skillsList }
                    </TransitionGroup>
                </div>
            </section>
        );
    }
}
