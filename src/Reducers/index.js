// this is a list of reducer methods
import { combineReducers } from "redux";
import todos, * as fromTodos from './todos';

const todoApp = combineReducers({
    todos,
});

export default todoApp;

// named export is for selectors (so how we call it)
// the state refers to the state of just the corresponding reducer
export const getVisibleTodos = (state, filter) =>
    fromTodos.getVisibleTodos(state.todos, filter);

// const combineReducers = (reducers) => {
//     return (state = {}, action) => {
//         return Object.keys(reducers).reduce(
//             (nextState, key) => {
//                 nextState[key] = reducers[key](state[key], action)
//                 return nextState
//             },
//             {}
//         )
//     }
// };