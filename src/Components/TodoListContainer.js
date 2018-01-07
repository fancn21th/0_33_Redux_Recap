import { connect } from 'react-redux'
import TodoList from './TodoList'
import toggleTodo from '../Actions/toggleTodo'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ACTIVE':
            return todos.filter(todo => !todo.completed);
        case 'SHOW_COMPLETED':
            return todos.filter(todo => todo.completed);
        case 'SHOW_ALL':
        default:
            return todos;
    }
}

const mapStateToProps = (state) => ({
    todos: getVisibleTodos(
        state.todos,
        state.visibilityFilter
    )
})

const mapDispatchToProps = (dispatch) => ({
    onToggleTodo: id => dispatch(toggleTodo(id))
})

const TodoListConainter = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default TodoListConainter