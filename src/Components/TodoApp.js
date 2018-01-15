import React from 'react'
import AddTodo from './AddTodo'
import TodoListConainter from './TodoListContainer'
import FilterTodos from './FilterTodos'

const TodoApp = ({ match }) => (
    <div>
        <AddTodo/>
        <TodoListConainter filter={match.params.filter || 'all'}/>
        <FilterTodos/>
    </div>
)

export default TodoApp