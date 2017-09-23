// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.scss';
import { NavLink } from 'react-router-dom';

export default class NavBar extends Component {

    render () {

        return (
            <section className = { Styles.navBar }>
                <ul>
                    <NavLink
                        activeClassName = { Styles.active }
                        className = { Styles.list }
                        to = { '/Experience' }>Experience
                    </NavLink>
                    <NavLink
                        activeClassName = { Styles.active }
                        className = { Styles.list }
                        to = { '/Skills' }>Skills
                    </NavLink>
                    <NavLink
                        activeClassName = { Styles.active }
                        className = { Styles.list }
                        to = { '/Education' }>Education
                    </NavLink>
                    <NavLink
                        activeClassName = { Styles.active }
                        className = { Styles.list }
                        to = { '/Contact' }>Contact
                    </NavLink>
                </ul>
            </section>
        );
    }
}
