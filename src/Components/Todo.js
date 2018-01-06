import React from 'react'

const Todo = ({todo, onClick}) => (
    <li
        onClick={onClick}
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
    >
        {todo.text}
    </li>
)

export default Todo