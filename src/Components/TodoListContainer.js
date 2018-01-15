import { connect } from 'react-redux'
import TodoList from './TodoList'
import toggleTodo from '../Actions/toggleTodo'

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

const mapStateToProps = (state, ownProps) => ({
    todos: getVisibleTodos(
        state.todos,
        ownProps.filter
    )
})

const mapDispatchToProps = (dispatch) => ({
    onToggleTodo(id){
        dispatch(toggleTodo(id))
    }
})

const TodoListConainter = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default TodoListConainter