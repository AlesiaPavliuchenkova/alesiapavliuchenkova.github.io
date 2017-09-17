//Core
import React from 'react';
import { shallow } from 'enzyme';
import App from './';
import Page from '../../components/Page';
import { BrowserRouter as Router } from 'react-router-dom';

const result = shallow(<App />);

describe('App component:', () => {
    test('Should have 1 \'section\' element', () => {
        expect(result.find('section').length).toBe(1);
    });

    test('Should have 1 \'Router\' element', () => {
        expect(result.find(Router).length).toBe(1);
    });

    test('Should have 1 \'Page\' element', () => {
        expect(result.find(Page).length).toBe(1);
    });

});
