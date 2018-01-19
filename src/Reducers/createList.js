import { combineReducers } from 'redux';

const createList = (filter) => {
    const ids = (state = [], action) => {
        switch (action.type) {
            case 'FETCH_TODOS_SUCCESS':
                return action.filter === filter ?
                    action.response.result :
                    state;
            case 'ADD_TODO_SUCCESS':
                return filter !== 'completed' ?
                    [...state, action.response.result] :
                    state;
            case 'TOGGLE_TODO_SUCCESS':
                return filter !== 'all' ?
                    state.filter(id => id !== action.response.result) :
                    state;
            default:
                return state;
        }
    };

    const isFetching = (state = false, action) => {
        if(action.filter !== filter) {
            return state;
        }
        switch (action.type) {
            case 'REQUEST_TODOS':
                return true;
            case 'FETCH_TODOS_REQUEST':
            case 'FETCH_TODOS_FAILURE':
                return false;
            default:
                return state;
        }
    };

    const errorMessage = (state = null, action) => {
        if(action.filter !== filter) {
            return state;
        }
        switch (action.type) {
            case 'FETCH_TODOS_FAILURE':
                return action.message;
            case 'REQUEST_TODOS':
            case 'FETCH_TODOS_REQUEST':
                return null;
            default:
                return state;
        }
    };

    return combineReducers({
        ids,
        isFetching,
        errorMessage
    });
};

export default createList;

// keep the knowledge about the state shape colocated with the newly extracted reducers
export const getIds = state => state.ids;

export const getIsFetching = state => state.isFetching;

export const getErrorMessage = state => state.errorMessage;
