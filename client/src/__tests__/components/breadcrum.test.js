import React from 'react';
import { mount } from 'enzyme';
import Breadcrum from '../../components/breadcrum';

describe('Breadcrum', () => {
    let wrapper;
    const defaultProps = {
        values: ['foo', 'bar']
    }

    it('render with props', () => {
        wrapper = mount(<Breadcrum {...defaultProps} />);
        expect((wrapper.find('span')).text()).toBe('foo > bar');
    });
});