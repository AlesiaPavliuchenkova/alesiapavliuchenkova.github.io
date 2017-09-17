// Core
import React, { Component } from 'react';

// Instruments
import Page from '../../components/Page';
import { BrowserRouter as Router } from 'react-router-dom';

export default class App extends Component {

    render () {
        return (
            <section>
                <Router>
                    <Page />
                </Router>
            </section>
        );
    }
}
