import React from 'react';
import { shallow } from 'enzyme';
import Footer from './';
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

const result = shallow(<Footer />, {
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

describe('Footer component:', () => {
    test('Should have 1 \'section\' element', () => {
        expect(result.find('section').length).toBe(1);
    });

    test('Should have 1 \'div\' element', () => {
        expect(result.find('div').length).toBe(1);
    });

    test('Should have 8 \'span\' element', () => {
        expect(result.find('span').length).toBe(8);
    });

    test('Should have 5 \'a\' element', () => {
        expect(result.find('a').length).toBe(5);
    });

    test('Should have 3 \'img\' element', () => {
        expect(result.find('img').length).toBe(3);
    });

});
