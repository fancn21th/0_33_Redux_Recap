import React from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import FilterTodos from './FilterTodos'

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

const TodoApp = (
    {
        todos,
        visibilityFilter,
        onToggleTodo,
        onAddTodo,
        onFilterTodos
    }) => (
    <div>
        <AddTodo
            onAddTodo={onAddTodo}
        />
        <TodoList
            todos={getVisibleTodos(todos, visibilityFilter)}
            onToggleTodo={onToggleTodo}
        />
        <FilterTodos
            currentFilter={visibilityFilter}
            onFilterTodos={onFilterTodos}
        />
    </div>
)

export default TodoApp