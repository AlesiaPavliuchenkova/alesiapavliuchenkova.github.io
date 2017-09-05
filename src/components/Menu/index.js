// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.scss';

export default class Menu extends Component {
    render () {
        return (
          <section className = { Styles.menu }>
              <ul>
                  <li><button>EXPERIENCE</button></li>
                  <li><button>SKILLS</button></li>
                  <li><button>EDUCATION</button></li>
                  <li><button>CONTACT</button></li>
              </ul>
          </section>
        );
    }
}