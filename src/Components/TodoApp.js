import React from 'react'
import FilterLink from './FilterLink'

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
                    <li
                        key={todo.id}
                        onClick={
                            () => props.onToogle(todo.id)
                        }
                        style={{
                            textDecoration: todo.completed ? 'line-through' : 'none'
                        }}
                    >
                        {todo.text}
                    </li>
                ))
            }
            </ul>
        </div>
        <div>
            Show:
            &nbsp;&nbsp;
            <FilterLink
                filter='SHOW_ALL'
                onClick={props.onFilter}
                currentFilter={props.currentFilter}
            >
                All
            </FilterLink>
            &nbsp;&nbsp;
            <FilterLink
                filter='SHOW_ACTIVE'
                onClick={props.onFilter}
                currentFilter={props.currentFilter}
            >
                ACTIVE
            </FilterLink>
            &nbsp;&nbsp;
            <FilterLink
                filter='SHOW_COMPLETED'
                onClick={props.onFilter}
                currentFilter={props.currentFilter}
            >
                COMPLETED
            </FilterLink>
        </div>
    </div>
)

export default TodoApp