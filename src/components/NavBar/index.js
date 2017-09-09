// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.scss';
import PropTypes from 'prop-types';
import { getUniqueID } from '../../helpers';
import Experience from '../../components/Experience';
import Skills from '../../components/Skills';
import Education from '../../components/Education';
import Contact from '../../components/Contact';

export default class NavBar extends Component {
    static propTypes = {
        content:             PropTypes.object.isRequired,
        setContainerContent: PropTypes.func.isRequired
    };

    constructor () {
        super();

        this.handleClick = ::this._handleClick;
    }

    state = {
        list: [{
            val:       'Experience',
            component: <Experience />
        }, {
            val:       'Skills',
            component: <Skills />
        }, {
            val:       'Education',
            component: <Education />
        }, {
            val:       'Contact',
            component: <Contact />
        }],
        items: []
    };


    componentWillMount () {
        const { content } = this.props;

        this.handleClick(content);
    }

    _handleClick = (obj) => {
        const { setContainerContent } = this.props;
        const { list } = this.state;

        this.setState({
            items: list.map((item) => (<li
                className = { item.val === obj.type.name ? Styles.active : null }
                key = { getUniqueID(15) }
                onClick = { () => this.handleClick(item.component) }>{ item.val }</li>)
            )
        });
        setContainerContent(obj);
    };

    render () {
        const { items } = this.state;

        return (
            <section className = { Styles.navBar }>
                <ul>
                    { items }
                </ul>
            </section>
        );
    }
}
