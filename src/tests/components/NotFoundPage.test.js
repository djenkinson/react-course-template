import React from 'react';
import { shallow } from 'enzyme';
import NotFountPage from '../../compnents/NotFoundPage';

test('should render Not Found Page correctly', () => {
    const wrapper = shallow(<NotFountPage />);
    expect(wrapper).toMatchSnapshot();
})