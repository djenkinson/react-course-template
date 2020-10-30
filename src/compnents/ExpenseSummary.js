import React from 'react';
import { connect} from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectSummary from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpenseSummary = ({ expensesCount, expensesTotal}) => {
    const expenseWord = expensesCount === 1 ? 'expense' : 'expenses' ;
    const amount = '£' + numeral(expensesTotal/100).format('0,0.00');

    return (
        <div>
            <h1>Viewing {expensesCount} {expenseWord} totalling {amount}</h1>
        </div>
    )
};



const mapStateToProps = (state) => {
    const expenses = selectExpenses(state.expenses, state.filters)
    return {
        expensesCount: expenses.length,
        expensesTotal: selectSummary(expenses)
    }
};

export default connect(mapStateToProps)(ExpenseSummary);