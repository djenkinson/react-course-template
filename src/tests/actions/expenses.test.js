import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
});

test('setup edit expense action object', () => {
    const action = editExpense('id1', { note: 'new note'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'id1',
        updates: {note: 'new note'}
    });
});

test('setup add expense with added values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 112000,
        createdAt: 1000,
        notes: 'This was last months rent!'
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('setup add expense with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        expense: {
            description: '', 
            notes: '', 
            amount: 0, 
            createdAt: 0, 
            id: expect.any(String)
        },
        type: 'ADD_EXPENSE'        
    });
});
