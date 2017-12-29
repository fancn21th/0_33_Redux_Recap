import React from 'react'

const TodoApp = (props) => (
    <div>
        <div>
            <h4>a Simple TODO List</h4>
        </div>
        <div>
            <input
                type="text"
                ref={node => this.input = node}
            />
            <button
                onClick={
                    () => {
                        props.onClick(this.input.value)
                        this.input.value = ''
                    }
                } >
                Add a Todo
            </button>
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