import { normalize } from 'normalizr';
import * as schema from './schema';
import * as api from "../Api";

const addTodo = text => (dispatch) =>
    api.addTodo(text).then(response => {
        dispatch({
            type: 'ADD_TODO_SUCCESS',
            response: normalize(response, schema.todo),
        });
    });

export default addTodo;