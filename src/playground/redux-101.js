import { createStore } from 'redux';

const incrementCount = ({ incremnetBy = 1} = {}) => ({
    type: 'INCREMENT',
    incremnetBy
});
const decremntCount = ({ decremntBy = 1} = {}) => ({
    type: 'DECREMENT',
    decremntBy
});
const setCount = ({count}) => ({
    type: 'SET',
    count
})
const resetCount = () => ({
    type: 'RESET'
});

// Reducers

const countReducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incremnetBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decremntBy
            };
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({ incremnetBy: 5}));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decremntCount({
    decremntBy: 12
}));

store.dispatch(decremntCount());

store.dispatch(setCount({count: 100}));