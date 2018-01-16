import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getVisibleTodos } from "../Reducers";
import TodoList from './TodoList';
import toggleTodo from '../Actions/toggleTodo';

const mapStateToProps = (state, { match }) => ({
    // for now the component do not rely on the state shape anymore
    todos: getVisibleTodos(state, match.params.filter || 'all')
})

// const mapDispatchToProps = (dispatch) => ({
//     onToggleTodo(id){
//         dispatch(toggleTodo(id))
//     }
// })

const TodoListContainer = withRouter(
    connect(mapStateToProps, {
        onToggleTodo: toggleTodo, // mapDispatchToProps shorthand notation
    })(TodoList)
);

export default TodoListContainer