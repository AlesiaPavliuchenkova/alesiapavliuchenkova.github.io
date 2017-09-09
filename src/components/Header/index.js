// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.scss';
import PropTypes from 'prop-types';
import NavBar from '../../components/NavBar';

export default class Header extends Component {
    static propTypes = {
        container:           PropTypes.object.isRequired,
        setContainerContent: PropTypes.func.isRequired
    };

    static contextTypes = {
        profileData: PropTypes.object.isRequired
    };

    render () {
        const { container, setContainerContent } = this.props;
        const { profileData } = this.context;

        //console.log('render header whyyyy');//eslint-disable-line

        return (
            <section className = { Styles.header }>
                <div>
                    <h1>{ profileData.name }</h1>
                    <h2>{ profileData.company }</h2>
                    <NavBar
                        content = { container }
                        setContainerContent = { setContainerContent }
                    />
                </div>
                <div />
            </section>
        );
    }
}
