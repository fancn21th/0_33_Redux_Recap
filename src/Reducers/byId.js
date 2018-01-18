const byId = (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_TODOS_SUCCESS':
            const nextState = { ...state };
            action.response.forEach(todo => {
                nextState[todo.id] = todo;
            });
            return nextState;
        default:
            return state;
    }
};

export default byId;

// keep the knowledge about the state shape colocated with the newly extracted reducers
export const getTodo = (state, id) => state[id];