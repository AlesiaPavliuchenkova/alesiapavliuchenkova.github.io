// Core
import React, { Component } from 'react';

// Instruments
import PropTypes from 'prop-types';
import Styles from './styles.scss';
import { Transition } from 'react-transition-group';
import TweenMax from 'gsap';

// Constants
// this list should be replaced with Linkedin data
const skills = ['Oracle', 'SQL', 'PL/SQL', 'Java Core', 'HTML', 'CSS'];

export default class Skills extends Component {
    static contextTypes = {
        avatar: PropTypes.string.isRequired
    };

    constructor () {
        super();

        this.handleUlTransition = ::this._handleUlTransition;
    }

    //rewrite ul items will move odd/even different sides
    _handleUlTransition = () => {
        const { list } = this;

        TweenMax.fromTo(
            list,
            1.7,
            { x: 0 },
            { x: -40 });
    };

    render () {
        const { avatar } = this.context;

        return (
            <section className = { Styles.skills }>
                <img src = { avatar } />
                <div>
                    <h1>Skills</h1>
                    <Transition
                        appear
                        in
                        timeout = { 1700 }
                        onEntered = { this.handleUlTransition }>
                        <div ref = { (list) => this.list = list }>
                            <ul>
                                { skills.map((item) => <li key = { item }>{ item }</li>) }
                            </ul>
                        </div>
                    </Transition>
                    <p>List should be taken from Linkedin api</p>
                    <p>UL items will move odd/even different sides</p>
                </div>
            </section>
        );
    }
}
