import React from 'react'
import AddTodo from './AddTodo'
import TodoListConainter from './TodoListContainer'
import FilterTodos from './FilterTodos'

const TodoApp = ({ store }) => (
    <div>
        <AddTodo store={store}/>
        <TodoListConainter store={store}/>
        <FilterTodos store={store}/>
    </div>
)

export default TodoApp