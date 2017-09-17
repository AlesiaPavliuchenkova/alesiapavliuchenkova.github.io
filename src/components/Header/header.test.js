import React from 'react';
import Header from './';
import { shallow } from 'enzyme';
import { testData } from '../../helpers/testData.js';
import NavBar from '../../components/NavBar';

const { profileData } = testData;

const result = shallow(<Header />, {
    context: {
        profileData
    }
});

describe('Header component:', () => {
    test('Should have 1 \'section\' element', () => {
        expect(result.find('section').length).toBe(1);
    });

    test('Should have 2 \'div\' elements', () => {
        expect(result.find('div').length).toBe(2);
    });

    test('Should have 1 \'h1\' element', () => {
        expect(result.find('h1').length).toBe(1);
    });

    test('Should have 1 \'h2\' element', () => {
        expect(result.find('h2').length).toBe(1);
    });

    test('Should have 1 \'NavBar\' element', () => {
        expect(result.find(NavBar).length).toBe(1);
    });

    test('NavBar component does not receive any props', () => {
        const TestNavBar = result.find(NavBar);

        expect(Object.keys(TestNavBar.props).length).toBe(0);
    });
});
