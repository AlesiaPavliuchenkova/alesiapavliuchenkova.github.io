import React from 'react';
import Page from './';
import { shallow } from 'enzyme';
import Header from '../../components/Header';
import Container from '../../components/Container';
import Footer from '../../components/Footer';

const result = shallow(<Page />);

describe('Page component', () => {
    result.setState({
        renderFlag: true
    });

    test('Should have 1 \'section\' element after data fetch', () => {
        expect(result.find('section').length).toBe(1);

    });

    test('Should have 1 \'Header\' element after data fetch', () => {
        expect(result.find(Header).length).toBe(1);
    });

    test('Should have 1 \'Container\' element after data fetch', () => {
        expect(result.find(Container).length).toBe(1);
    });

    test('Should have 1 \'Footer\' element after data fetch', () => {
        expect(result.find(Footer).length).toBe(1);
    });
});
