import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../compnents/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('should render ExpenseList with expenses', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[1]}/>);
    expect(wrapper).toMatchSnapshot();
});