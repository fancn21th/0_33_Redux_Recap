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

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ACTIVE':
            return todos.filter(todo => !todo.completed);
        case 'SHOW_COMPLETED':
            return todos.filter(todo => todo.completed);
        case 'SHOW_ALL':
        default:
            return todos;
    }
}

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
    const todos = getVisibleTodos(
        store.getState().todos,
        store.getState().visibilityFilter
    )
    ReactDOM.render(
        <TodoApp
            onClick={
                title => {
                    store.dispatch({
                        type: 'ADD_TODO',
                        text: title,
                        id: Date.now()
                    })
                }
            }
            onToogle={
                todoId => {
                    store.dispatch({
                        type: 'TOGGLE_TODO',
                        id: todoId
                    })
                }
            }
            onFilter={
                filter => {
                    store.dispatch({
                        type: 'SET_VISIBILITY_FILTER',
                        filter,
                    })
                }
            }
            todos={todos}
            currentFilter={store.getState().visibilityFilter}
        />,
        document.getElementById('root')
    );
}

store.subscribe(render);
render();
