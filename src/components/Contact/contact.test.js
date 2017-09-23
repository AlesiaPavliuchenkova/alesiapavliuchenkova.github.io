import React from 'react';
import { shallow } from 'enzyme';
import Contact from './';
import Form from '../../components/Form';
import { testData } from '../../config/testData.js';

const {
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
} = testData;

const result = shallow(<Contact />, {
    context: {
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
    }
});

describe('Contact component:', () => {
    test('Should have 1 \'section\' element', () => {
        expect(result.find('section').length).toBe(1);
    });

    test('Should have 1 \'Form\' element', () => {
        expect(result.find(Form).length).toBe(1);
    });

    test('Form Component does not receive any props', () => {
        const TestForm = result.find(Form);

        expect(Object.keys(TestForm.props()).length).toBe(0);
    });

    test('Should have 1 \'div\' element', () => {
        expect(result.find('div').length).toBe(1);
    });

    test('Should have 1 \'h1\' element', () => {
        expect(result.find('h1').length).toBe(1);
    });

    test('Should have 4 \'p\' element', () => {
        expect(result.find('p').length).toBe(4);
    });

    test('Should have 5 \'a\' element', () => {
        expect(result.find('a').length).toBe(5);
    });

    test('Should have 3 \'span\' element', () => {
        expect(result.find('span').length).toBe(3);
    });

    test('Should have 3 \'img\' element', () => {
        expect(result.find('img').length).toBe(3);
    });

});
