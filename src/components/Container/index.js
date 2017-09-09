// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.scss';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import TweenMax from 'gsap';

export default class Container extends Component {
    static propTypes = {
        container: PropTypes.object.isRequired
    };

    constructor () {
        super();

        this.handleMoveContainer = ::this._handleMoveContainer;
    }

    state = {
        isMoving: true
    };

    shouldComponentUpdate (nextProps) {
        return nextProps.container.type.name !== this.props.container.type.name;
    }

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
        const { container } = this.props;
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
                            { container }
                        </div>
                    </Transition>
                </div>
            </section>
        );
    }
}
