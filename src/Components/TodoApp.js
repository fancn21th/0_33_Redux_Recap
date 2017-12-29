import React from 'react'

const TodoApp = (props) => (
    <div>
        <div>
            <h4>a Simple TODO List</h4>
        </div>
        <div>
            <button onClick={props.onClick} >Add a random todo</button>
        </div>
        <div>
            <ul>
            {
                props.todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.text}
                    </li>
                ))
            }
            </ul>
        </div>
    </div>
)

export default TodoApp