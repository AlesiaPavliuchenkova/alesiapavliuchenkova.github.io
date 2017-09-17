// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.scss';
import { Transition } from 'react-transition-group';
import TweenMax from 'gsap';
import { Route, Switch } from 'react-router-dom';
import Experience from '../../components/Experience';
import Skills from '../../components/Skills';
import Education from '../../components/Education';
import Contact from '../../components/Contact';

export default class Container extends Component {

    constructor () {
        super();

        this.handleMoveContainer = ::this._handleMoveContainer;
    }

    state = {
        isMoving: true
    };

    _handleMoveContainer = (flag) => {
        const { content } = this;

        TweenMax.fromTo(
            content,
            1.5,
            { x: window.innerWidth },
            { x: 0 });

        this.setState({
            isMoving: flag
        });
    };

    render () {
        const { isMoving } = this.state;

        return (
            <section className = { Styles.container }>
                <div>
                    <Transition
                        appear
                        in = { isMoving }
                        timeout = { 1500 }
                        onEnter = { () => this.handleMoveContainer(false) }
                        onExit = { () => this.handleMoveContainer(true) }>
                        <div ref = { (content) => this.content = content }>
                            <Switch>
                                <Route exact component = { Experience } path = '/Experience' />
                                <Route component = { Skills } path = '/Skills' />
                                <Route component = { Education } path = '/Education' />
                                <Route component = { Contact } path = '/Contact' />
                                <Route component = { Experience } path = '*' />
                            </Switch>
                        </div>
                    </Transition>
                </div>
            </section>
        );
    }
}
