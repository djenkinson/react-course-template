import expensesReducer from '../../reducers/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add expense provided', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: expenses[0]
    };
    const state = expensesReducer(undefined, action);
    expect(state).toEqual([expenses[0]]);
});

test('should edit expense with id', () => {
    const updates = {
        ...expenses[0],
        description: 'new text'
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([updates, expenses[1], expenses[2]]);
});

test('should not edit expense if id not found', () => {
    const updates = {
        ...expenses[0],
        description: 'new text'
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    };
    const state = expensesReducer([expenses[0]], action);
    expect(state).toEqual([expenses[1]]);
});