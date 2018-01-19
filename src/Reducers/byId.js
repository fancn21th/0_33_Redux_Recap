const byId = (state = {}, action) => {
    if(action.response) {
        return {
            ...state,
            ...action.response.entities.todos,
        };
    }
    return state;
};

export default byId;

// keep the knowledge about the state shape colocated with the newly extracted reducers
export const getTodo = (state, id) => state[id];