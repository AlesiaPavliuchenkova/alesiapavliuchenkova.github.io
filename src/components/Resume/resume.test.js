import React from 'react';
import Container from './';
import { shallow } from 'enzyme';
import { Transition } from 'react-transition-group';
import { Switch } from 'react-router-dom';

const state = {
    isMoving: true
};
const result = shallow(<Container />);

describe('Resume component:', () => {
    test('Should have 1 \'section\' element', () => {
        expect(result.find('section').length).toBe(1);
    });

    test('Should have 2 \'div\' element', () => {
        expect(result.find('div').length).toBe(2);
    });

    test('Should have 1 \'Transition\' element', () => {
        expect(result.find(Transition).length).toBe(1);
    });

    test('Should have 1 \'Switch\' element', () => {
        expect(result.find(Switch).length).toBe(1);
    });

    test('Should have function handleMoveContainer', () => {
        expect(typeof result.instance().handleMoveContainer).toBe('function');
    });

    test('Validate initial state', () => {
        expect(result.state()).toEqual(state);
    });

});
