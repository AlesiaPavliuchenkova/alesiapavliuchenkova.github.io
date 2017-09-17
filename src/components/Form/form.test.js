import React from 'react';
import Form from './';
import { shallow } from 'enzyme';

const result = shallow(<Form />);

describe('Form component:', () => {
    test('Should have 1 \'section\' element', () => {
        expect(result.find('section').length).toBe(1);
    });

    test('Should have 1 \'form\' element', () => {
        expect(result.find('form').length).toBe(1);
    });

    test('Should have 1 \'textarea\' element', () => {
        expect(result.find('textarea').length).toBe(1);
    });

    test('Should have 4 \'input\' element', () => {
        expect(result.find('input').length).toBe(4);
    });
});
