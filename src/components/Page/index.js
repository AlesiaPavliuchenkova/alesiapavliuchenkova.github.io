// Core
import React, { Component } from 'react';

// Instruments
import PropTypes from 'prop-types';
import Styles from './styles.scss';
import Header from '../../components/Header';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import avatar from '../../theme/assets/avatar.jpg';
import fbIcon from '../../theme/assets/fb.PNG';
import inIcon from '../../theme/assets/in.png';
import githubIcon from '../../theme/assets/github.png';
import Experience from '../Experience/index';

// Constants
const fbLink = 'https://www.facebook.com/lisenok.aesya';
const inLink = 'https://www.linkedin.com/in/alesia-pavliuchenkova-29303b83/';
const githubLink = 'https://github.com/AlesiaPavliuchenkova';
const targetVal = '_blank';
const apiUser = 'https://api.github.com/users/AlesiaPavliuchenkova';
const apiEvents = 'https://api.github.com/users/AlesiaPavliuchenkova/events/public';

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

    constructor () {
        super();

        this.setContainerContent = ::this._setContainerContent;
    }

    state = {
        container:   {},
        profileData: {},
        email:       ''
    };

    getChildContext () {
        const { profileData, email } = this.state;

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
            phone: '+38(097)746-21-98',
            targetVal
        };
    }

    componentWillMount () {
        this.setContainerContent(<Experience />);

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
                    profileData: data
                });
            })
            .catch(({ message }) => console.log(message));// eslint-disable-line

        fetch(apiEvents, {
            method: 'GET'
        })
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('Posts were not loaded');
                }

                return response.json();
            })
            .then((data) => {
                if (typeof data !== undefined) {
                    this.setState({
                        email: data[0].payload.commits[0].author.email
                    });
                }
            })
            .catch(({ message }) => console.log(message));// eslint-disable-line
    }

    _setContainerContent = (obj) => {
        this.setState({
            container: obj
        });
    };

    render () {
        const { container } = this.state;

        //console.log('render page'); //eslint-disable-line

        return (
            <section className = { Styles.page }>
                <Header
                    container = { container }
                    setContainerContent = { this.setContainerContent }
                />
                <Container
                    container = { container }
                />
                <Footer />
            </section>
        );
    }
}
