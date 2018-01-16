import React from 'react'
import AddTodo from './AddTodo'
import TodoListContainer from './TodoListContainer'
import FilterTodos from './FilterTodos'

const TodoApp = () => (
    <div>
        <AddTodo/>
        <TodoListContainer/>
        <FilterTodos/>
    </div>
)

export default TodoApp