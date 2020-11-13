import {login, logout } from '../../actions/auth';


test('setup login action object', () => {
    const action = login('123abc');
    expect(action).toEqual({
        type: 'LOGIN',
        uid: '123abc'
    });
});

test('setup logout action object', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});