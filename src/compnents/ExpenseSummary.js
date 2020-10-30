import React from 'react';
import { connect} from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectSummary from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpenseSummary = (props) => (
    <div>
        {
            props.expensesCount === 1 ? (
                <p>Viewing 1 expense totalling {'£' + numeral(props.expensesTotal/100).format('0,0.00')}</p>
            ) : (
                props.expensesCount > 0 ? (
                    <p>Viewing {props.expensesCount} expenses totalling {'£' + numeral(props.expensesTotal/100).format('0,0.00')}</p>
                ) : (
                    <p></p>
                )
            )
        }
    </div>
);



const mapStateToProps = (state) => {
    const expenses = selectExpenses(state.expenses, state.filters)
    return {
        expensesCount: expenses.length,
        expensesTotal: selectSummary(expenses)
    }
};

export default connect(mapStateToProps)(ExpenseSummary);