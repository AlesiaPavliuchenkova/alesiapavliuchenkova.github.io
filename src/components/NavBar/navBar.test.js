import React from 'react';
import NavBar from './'; //eslint-disable-line
import { shallow } from 'enzyme';
import { list } from './'; //eslint-disable-line
import Styles from './styles.scss';
import { getUniqueID } from '../../helpers';
import { NavLink } from 'react-router-dom';


const result = shallow(<NavBar />);

describe('NavBar component:', () => {
    test('Should have 1 \'section\' element', () => {
        expect(result.find('section').length).toBe(1);
    });

    test('Should have 1 \'ul\' element', () => {
        expect(result.find('ul').length).toBe(1);
    });

    test('Should have at least 1 \'NavLink\' element', () => {
        expect(result.find(NavLink).length).toBeGreaterThan(0);
    });

});
