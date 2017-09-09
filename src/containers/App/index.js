// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.scss';
import Page from '../../components/Page';

export default class App extends Component {

    render () {
        return (
            <section className = { Styles.app }>
                <Page />
            </section>
        );
    }
}
