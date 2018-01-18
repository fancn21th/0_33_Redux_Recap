import * as api from "../Api";

const toogleTodo = id => (dispatch) => {
  api.toggleTodo(id).then(response => {
      dispatch({
          type: 'TOGGLE_TODO_SUCCESS',
          response,
      });
  });
};

export default toogleTodo