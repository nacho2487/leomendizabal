import React from 'react';
import { mount } from 'enzyme';
import Button from '../../components/button';

describe('Button', () => {
    let wrapper;
    const defaultProps = {
        className: 'class',
        clickHandler: jest.fn(),
        value: 'foo'
    }

    it('render with props', () => {
        wrapper = mount(<Button {...defaultProps} />);
        expect(wrapper.exists('input')).toBe(true);
        expect(wrapper.hasClass(defaultProps.className)).toBe(true);
        expect(wrapper.find('input').instance().value).toBe(defaultProps.value);
    });
});