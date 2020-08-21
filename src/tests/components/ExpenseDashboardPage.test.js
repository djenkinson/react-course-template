import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboardPage from '../../compnents/ExpenseDashboardPage';

test('should render Expense Dashboard correctly', () => {
    const wrapper = shallow(<ExpenseDashboardPage />);
    expect(wrapper).toMatchSnapshot();
})