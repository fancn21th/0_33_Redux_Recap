import React from 'react'
import Todo from './Todo'

const TodoList = ({todos, onToggleTodo}) => (
    <ul>
        {
            todos.map(todo => (
                <Todo
                    key={todo.id}
                    {...todo}
                    onClick={ () => onToggleTodo(todo.id) }
                />
            ))
        }
    </ul>
)

export default TodoList