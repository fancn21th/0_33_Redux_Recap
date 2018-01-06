import React from 'react'
import FilterTodoLink from './FilterTodoLink'

const FilterTodos = (
    {
        currentFilter,
        onFilterTodos
    }) => (
    <div>
        Show:
        &nbsp;&nbsp;
        <FilterTodoLink
            currentFilter={currentFilter}
            filter='SHOW_ALL'
            onClick={onFilterTodos}
        >
            All
        </FilterTodoLink>
        &nbsp;&nbsp;
        <FilterTodoLink
            currentFilter={currentFilter}
            filter='SHOW_ACTIVE'
            onClick={onFilterTodos}
        >
            ACTIVE
        </FilterTodoLink>
        &nbsp;&nbsp;
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