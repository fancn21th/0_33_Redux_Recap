import React from 'react'
import FilterTodoLink from './FilterTodoLink'

const FilterTodos = (
    {
        currentFilter,
        onFilterTodos
    }) => (
    <div>
        Show:
        <FilterTodoLink
            currentFilter={currentFilter}
            filter='SHOW_ALL'
            onClick={onFilterTodos}
        >
            All
        </FilterTodoLink>
        <FilterTodoLink
            currentFilter={currentFilter}
            filter='SHOW_ACTIVE'
            onClick={onFilterTodos}
        >
            ACTIVE
        </FilterTodoLink>
        <FilterTodoLink
            currentFilter={currentFilter}
            filter='SHOW_COMPLETED'
            onClick={onFilterTodos}
        >
            COMPLETED
        </FilterTodoLink>
    </div>
)

export default FilterTodos