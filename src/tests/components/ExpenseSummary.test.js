import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../compnents/ExpenseSummary';

test('should render ExpenseSummary with 1 expense', () => {
    const wrapper = shallow(<ExpenseSummary expensesCount={1} expensesTotal={9434}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseSummary with 3 expenses', () => {
    const wrapper = shallow(<ExpenseSummary expensesCount={2} expensesTotal={9434}/>);
    expect(wrapper).toMatchSnapshot();
});