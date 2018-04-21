import { normalize } from 'normalizr';
import * as schema from './schema';
import * as api from "../Api";
import { getIsFetching } from '../Reducers';

// normally an action is a plain object
// then it could be a promise supported by middleware like redux-promise
// and then it could be a function by middleware like redux-thunk
// the function take dispatch as well as getState as arguments
// A thunk is a function that wraps an expression to delay its evaluation.

const fetchTodos = (filter) => (dispatch, getState) => {
    if (getIsFetching(getState(), filter)) {
        return Promise.resolve();
    }

    dispatch({
        type: 'FETCH_TODOS_REQUEST',
        filter,
    });

    // The return value of the thunk becomes the return value of dispatching this thunk,
    // and I can use this to wait for the asynchronous operation to finish inside my component
    // in order to show a message or start an animation.
    return api.fetchTodos(filter).then(
        response => {
            dispatch({
                type: 'FETCH_TODOS_SUCCESS',
                filter,
                response: normalize(response, schema.arrayOfTodos),
            });
        },
        error => {
            dispatch({
                type: 'FETCH_TODOS_FAILURE',
                filter,
                message: error.message || 'Something went wrong.',
            });
        });
}

export default fetchTodos;