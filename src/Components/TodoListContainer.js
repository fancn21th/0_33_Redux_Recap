import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoList from './TodoList'

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

class TodoListConainter extends Component {
    componentDidMount() {
        const { store } = this.context
        this.unsubscribe = store.subscribe(() => this.forceUpdate())
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

    render() {
        const { store } = this.context
        return (
           <TodoList
                todos={
                    getVisibleTodos(
                        store.getState().todos,
                        store.getState().visibilityFilter
                    )
                }
                onToggleTodo={
                    id => store.dispatch({
                        type: 'TOGGLE_TODO',
                        id,
                    })
                }
           />
        )
    }
}

TodoListConainter.contextTypes = {
    store: PropTypes.object
}

export default TodoListConainter