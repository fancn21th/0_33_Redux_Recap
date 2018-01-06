import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import './index.css'
import TodoApp from './Components/TodoApp'

// this is a reducer
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

const todoApp = combineReducers({
    todos,
    visibilityFilter
});

const store = createStore(
    todoApp,
    // https://github.com/zalmoxisus/redux-devtools-extension#usage
    // enable redux-devtools-extension
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const render = () => {
    ReactDOM.render(
        <TodoApp
            {...store.getState()}
            onToggleTodo={
                id => store.dispatch({
                    type: 'TOGGLE_TODO',
                    id,
                })
            }
            onAddTodo={
                text => store.dispatch({
                    type: 'ADD_TODO',
                    id: Date.now(),
                    text,
                })
            }
            onFilterTodos={
                filter => store.dispatch({
                    type: 'SET_VISIBILITY_FILTER',
                    filter,
                })
            }
        />,
        document.getElementById('root')
    );
}

store.subscribe(render);
render();
