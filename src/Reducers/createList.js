const createList = (filter) => (state = [], action) => {
    if(action.filter !== filter) {
        return state;
    }
    switch (action.type) {
        case 'RECEIVE_TODOS':
            return action.response.map(todo => todo.id);
        default:
            return state;
    }
};

export default createList;

// keep the knowledge about the state shape colocated with the newly extracted reducers
export const getIds = state => state;
