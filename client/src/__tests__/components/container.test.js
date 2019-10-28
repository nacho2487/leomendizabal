import React from 'react';
import { mount } from 'enzyme';
import Container from '../../components/container';

describe('Container', () => {
    let wrapper;
    const defaultProps = {
        className: 'class',
        children: <span>foo</span>
    }

    it('render with props', () => {
        wrapper = mount(<Container {...defaultProps} />);
        expect(wrapper.exists('div')).toBe(true);
        expect(wrapper.exists('span')).toBe(true);
        expect(wrapper.hasClass(defaultProps.className)).toBe(true);
    });
});