import React from 'react';
import { shallow } from 'enzyme';
import Education from './';          //eslint-disable-line
import { testData } from '../../helpers/testData.js';
import { getUniqueID } from '../../helpers/index';
import { education } from './index'; //eslint-disable-line
import Styles from './styles.scss';

const { avatar } = testData;
const result = shallow(<Education />, {
    context: { avatar }
});
const state = {
    educationList: education.map((item) => (
        <li key = { getUniqueID(15) }>
            <span className = { Styles.header }>University: { item.name }</span>
            <span>Speciality: { item.speciality }</span>
            <span>Degree: { item.degree }</span>
            <span>Years: { item.startYear } - { item.endYear }</span>
        </li>))
};

describe('Education component:', () => {
    test('Should have 1 \'section\' element', () => {
        expect(result.find('section').length).toBe(1);
    });

    test('Should have 1 \'img\' element', () => {
        expect(result.find('img').length).toBe(1);
    });

    test('Should have 1 \'div\' element', () => {
        expect(result.find('div').length).toBe(1);
    });

    test('Should have 1 \'h1\' element', () => {
        expect(result.find('h1').length).toBe(1);
    });

    test('Should have 1 \'ul\' element', () => {
        expect(result.find('ul').length).toBe(1);
    });

    test('Should have \'li\' elements equal to the length of education items', () => {
        expect(result.find('li').length).toBe(education.length);
    });

    test('Should have at least 1 \'li\' element', () => {
        expect(result.find('li').length).toBeGreaterThan(0);
    });

    test('Should have \'span\' elements equal to the length ' +
        'of education * (education attributes count - 1)', () => {
        expect(result.find('span').length).toBe(education.length * (Object.keys(education[0]).length - 1));
    });

    test('Validate initial state', () => {
        expect.extend({
            toBe () {
                return this.equals(result.state(), state);
            }
        });
    });

});
