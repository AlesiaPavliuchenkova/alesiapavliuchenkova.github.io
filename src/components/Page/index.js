// Core
import React, { Component } from 'react';

// Instruments
import PropTypes from 'prop-types';
import Styles from './styles.scss';
import Header from '../../components/Header';
import Resume from '../Resume';
import Footer from '../../components/Footer';
import avatar from '../../theme/assets/avatar.jpg';
import fbIcon from '../../theme/assets/fb.PNG';
import inIcon from '../../theme/assets/in.png';
import githubIcon from '../../theme/assets/github.png';
import { resumeData } from '../../config/frontend';

// Constants
const spinnerLink = 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif';

export default class Page extends Component {
    static childContextTypes = {
        avatar:      PropTypes.string.isRequired,
        email:       PropTypes.string.isRequired,
        fbIcon:      PropTypes.string.isRequired,
        fbLink:      PropTypes.string.isRequired,
        githubIcon:  PropTypes.string.isRequired,
        githubLink:  PropTypes.string.isRequired,
        inIcon:      PropTypes.string.isRequired,
        inLink:      PropTypes.string.isRequired,
        profileData: PropTypes.object.isRequired,
        phone:       PropTypes.string.isRequired,
        targetVal:   PropTypes.string.isRequired
    };

    state = {
        profileData: {},
        renderFlag:  false
    };

    getChildContext () {
        const { profileData } = this.state;
        const { email, fbLink, githubLink, inLink, phone, targetVal } = resumeData;

        return {
            avatar,
            email,
            fbIcon,
            fbLink,
            githubIcon,
            githubLink,
            inIcon,
            inLink,
            profileData,
            phone,
            targetVal
        };
    }

    componentWillMount () {
        const { apiUser } = resumeData;

        fetch(apiUser, {
            method: 'GET'
        })
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('Posts were not loaded');
                }

                return response.json();
            })
            .then((data) => {
                this.setState({
                    profileData: data,
                    renderFlag:  true
                });
            })
            .catch(({ message }) => console.log(message));// eslint-disable-line
    }

    render () {

        if (!this.state.renderFlag) {
            //write my own spinner
            return (<img
                className = { Styles.spinner }
                src = { spinnerLink }
            />);
        }

        return (
            <section className = { Styles.page }>
                <Header />
                <Resume />
                <Footer />
            </section>
        );
    }
}
