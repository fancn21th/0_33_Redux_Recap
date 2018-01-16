import * as api from "../Api";

const receiveTodos = (filter, response) => ({
    type: 'RECEIVE_TODOS',
    filter,
    response,
});

const fetchTodos = (filter) =>
    api.fetchTodos(filter).then(response => receiveTodos(filter, response));

// asynchronous action creator.
export default fetchTodos;