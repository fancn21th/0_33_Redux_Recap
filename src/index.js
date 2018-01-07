import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import './index.css'
import TodoApp from './Components/TodoApp'

// this is a list of reducer methods
const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state;
            }
            return {
                ...state,
                completed: !state.completed
            };
        default:
            return state;
    }
};

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ];
        case 'TOGGLE_TODO':
            return state.map(t =>
                todo(t, action)
            );
        default:
            return state;
    }
};

const visibilityFilter = (
    state = 'SHOW_ALL',
    action
) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
};

const todoApp = combineReducers({
    todos,
    visibilityFilter
});

ReactDOM.render(
    <Provider
        store={
            createStore(
                todoApp,
                // https://github.com/zalmoxisus/redux-devtools-extension#usage
                // enable redux-devtools-extension
                window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
            )
        }
    >
        <TodoApp/>
    </Provider>,
    document.getElementById('root')
);

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
