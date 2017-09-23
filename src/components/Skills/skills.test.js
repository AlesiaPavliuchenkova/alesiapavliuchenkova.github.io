import React from 'react';
import { shallow } from 'enzyme';
import Skills from './';          //eslint-disable-line
import { testData } from '../../config/testData.js';
import { skills } from './index'; //eslint-disable-line
import { Transition, TransitionGroup } from 'react-transition-group';

const { avatar } = testData;
const result = shallow(<Skills />, {
    context: { avatar }
});
const state = {
    skillsList: skills.map((item) => (
        <Transition
            appear
            in
            key = { item }
            timeout = { 1700 }
            onEntered = { () => result.handleLiTransition(item) }>
            <li
                key = { item }
                ref = { (skill) => this[item] = skill }><span>{item}</span>
            </li>
        </Transition>))
};

describe('Skills component:', () => {
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

    test('Should have 1 \'TransitionGroup\' element', () => {
        expect(result.find(TransitionGroup).length).toBe(1);
    });

    test('Should have \'li\' elements equal to the length of skills', () => {
        expect(result.find('li').length).toBe(skills.length);
    });

    test('Should have at least 1 \'li\' element', () => {
        expect(result.find('li').length).toBeGreaterThan(0);
    });

    test('Should have \'Transition\' elements count equal to skills length', () => {
        expect(result.find(Transition).length).toBe(skills.length);
    });

    test('Should have function handleLiTransition', () => {
        expect(typeof result.instance().handleLiTransition).toBe('function');
    });

    test('Validate initial state', () => {
        expect.extend({
            toBe () {
                return this.equals(result.state(), state);
            }
        });
    });

});
