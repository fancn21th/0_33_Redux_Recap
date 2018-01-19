import { normalize } from 'normalizr';
import * as schema from './schema';
import * as api from "../Api";

const toogleTodo = id => (dispatch) => {
  api.toggleTodo(id).then(response => {
      dispatch({
          type: 'TOGGLE_TODO_SUCCESS',
          response: normalize(response, schema.todo),
      });
  });
};

export default toogleTodo