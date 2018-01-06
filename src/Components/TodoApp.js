import React from 'react'
import AddTodo from './AddTodo'
import TodoListConainter from './TodoListContainer'
import FilterTodos from './FilterTodos'

const TodoApp = () => (
    <div>
        <AddTodo/>
        <TodoListConainter/>
        <FilterTodos/>
    </div>
)

export default TodoApp