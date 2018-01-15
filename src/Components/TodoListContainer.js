import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TodoList from './TodoList';
import toggleTodo from '../Actions/toggleTodo';

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'active':
            return todos.filter(todo => !todo.completed);
        case 'completed':
            return todos.filter(todo => todo.completed);
        case 'all':
        default:
            return todos;
    }
}

const mapStateToProps = (state, { match }) => ({
    todos: getVisibleTodos(
        state.todos,
        match.params.filter
    )
})

const mapDispatchToProps = (dispatch) => ({
    onToggleTodo(id){
        dispatch(toggleTodo(id))
    }
})

const TodoListConainter = withRouter(
    connect(mapStateToProps, mapDispatchToProps)(TodoList)
);

export default TodoListConainter