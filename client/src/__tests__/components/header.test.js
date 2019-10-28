import React from 'react';
import { mount } from 'enzyme';
import Header from '../../components/header';

describe('Header', () => {
    let wrapper;

    it('render', () => {
        wrapper = mount(<Header />);
        expect(wrapper.exists('header')).toBe(true);
        expect(wrapper.exists('Logo')).toBe(true);
        expect(wrapper.exists('Search')).toBe(true);
        expect(wrapper.exists('Image')).toBe(true);
    });
});