import * as api from "../Api";
import { getIsFetching } from '../Reducers';
import requestTodos from '../Actions/requestTodos';

const receiveTodos = (filter, response) => ({
    type: 'RECEIVE_TODOS',
    filter,
    response,
});

// normally a action is a plain object
// then it could be a promise supported by middleware like redux-promise
// and then it could be a function by middleware like redux-thunk

// Redux Thunk middleware allows you to write action creators that return a function instead of an action.
// The thunk can be used to delay the dispatch of an action,
// or to dispatch only if a certain condition is met.
// The inner function receives the store methods dispatch and getState as parameters.

// the function take dispatch as well as getState as arguments
// A thunk is a function that wraps an expression to delay its evaluation.

const fetchTodos = (filter) => (dispatch, getState) => {
    if (getIsFetching(getState(), filter)) {
        return Promise.resolve();
    }

    dispatch(requestTodos(filter));

    // The return value of the thunk becomes the return value of dispatching this thunk,
    // and I can use this to wait for the asynchronous operation to finish inside my component
    // in order to show a message or start an animation.
    return api.fetchTodos(filter).then(response => {
        dispatch(receiveTodos(filter, response));
    });
}

export default fetchTodos;