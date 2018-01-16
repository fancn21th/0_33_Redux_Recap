import { combineReducers } from 'redux';
import todo from './todo';

const byId = (state = {}, action) => {
  switch (action.type) {
      case 'ADD_TODO':
      case 'TOGGLE_TODO':
          return {
              ...state,
              [action.id]: todo(state[action.id], action),
          };
      default:
          return state;
  }
};

const allIds = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                action.id,
            ];
        default:
            return state;
    }
};

const todos = combineReducers({
   byId,
   allIds,
});

// as convention export default is for reducer itself
export default todos;

export const getAllTodos = state => state.allIds.map(id => state.byId[id]);

// named export is for selectors (so how we call it)
// all the state shape knowledge is encapsulated in the selector.
// components no need to update when state shape evolve
export const getVisibleTodos = (state, filter) => {
    var allTodos = getAllTodos(state);
    switch (filter) {
        case 'all':
            return allTodos;
        case 'active':
            return allTodos.filter(todo => !todo.completed);
        case 'completed':
            return allTodos.filter(todo => todo.completed);
        default:
            throw new Error(`Unknown filter: ${filter}.`);
    }
};