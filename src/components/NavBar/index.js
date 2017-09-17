// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.scss';
import { getUniqueID } from '../../helpers';
import { NavLink } from 'react-router-dom';

//Constants
export const list = ['Experience', 'Skills', 'Education', 'Contact'];

export default class NavBar extends Component {
    state = {
        items: []
    };

    componentWillMount () {

        this.setState({
            items: list.map((item) => (
                <NavLink
                    activeClassName = { Styles.active }
                    className = { Styles.list }
                    key = { getUniqueID(15) }
                    to = { `/${item}` }>{ item }
                </NavLink>))
        });
    }

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
