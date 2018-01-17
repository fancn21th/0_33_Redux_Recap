import { combineReducers } from 'redux';

const byId = (state = {}, action) => {
    switch (action.type) {
        case 'RECEIVE_TODOS':
            const nextState = { ...state };
            action.response.forEach(todo => {
                nextState[todo.id] = todo;
            });
            return nextState;
        default:
            return state;
    }
};

const allIds = (state = [], action) => {
    if(action.filter !== 'all') {
        return state;
    }
    switch (action.type) {
        case 'RECEIVE_TODOS':
            return action.response.map(todo => todo.id);
        default:
            return state;
    }
};

const activeIds = (state = [], action) => {
    if(action.filter !== 'active') {
        return state;
    }
    switch (action.type) {
        case 'RECEIVE_TODOS':
            return action.response.map(todo => todo.id);
        default:
            return state;
    }
};

const completedIds = (state = [], action) => {
    if(action.filter !== 'completed') {
        return state;
    }
    switch (action.type) {
        case 'RECEIVE_TODOS':
            return action.response.map(todo => todo.id);
        default:
            return state;
    }
};

const idsByFilter = combineReducers({
    all: allIds,
    active: activeIds,
    completed: completedIds,
});

const todos = combineReducers({
    byId,
    idsByFilter,
});


export default todos;

export const getVisibleTodos = (state, filter) => state.idsByFilter[filter].map(id => state.byId[id]);