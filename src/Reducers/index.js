// this is a list of reducer methods
import { combineReducers } from "redux";
import todos from './todos';
import visibilityFilter from './visibilityFilter';

const todoApp = combineReducers({
    todos,
    visibilityFilter
});

export default todoApp;

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