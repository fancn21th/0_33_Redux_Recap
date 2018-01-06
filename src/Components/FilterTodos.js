import React from 'react'
import FilterTodoLinkContainer from './FilterTodoLinkContainer'

const FilterTodos = () => (
    <div>
        Show:
        &nbsp;&nbsp;
        <FilterTodoLinkContainer filter='SHOW_ALL'>
            All
        </FilterTodoLinkContainer>
        &nbsp;&nbsp;
        <FilterTodoLinkContainer filter='SHOW_ACTIVE'>
            ACTIVE
        </FilterTodoLinkContainer>
        &nbsp;&nbsp;
        <FilterTodoLinkContainer filter='SHOW_COMPLETED'>
            COMPLETED
        </FilterTodoLinkContainer>
    </div>
)

export default FilterTodos