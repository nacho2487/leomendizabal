import React from 'react';
import { mount } from 'enzyme';
import Welcome from '../../views/welcome';

describe('View', () => {
    let wrapper;
    describe('Welcome', () => {
        it('render', () => {
            wrapper = mount(<Welcome />);
            expect(wrapper.exists('Header')).toBe(true);
        });
    });
});
