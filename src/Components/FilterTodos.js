import React from 'react'
import FilterTodoLinkContainer from './FilterTodoLinkContainer'

const FilterTodos = ({ store }) => (
    <div>
        Show:
        &nbsp;&nbsp;
        <FilterTodoLinkContainer store={store} filter='SHOW_ALL'>
            All
        </FilterTodoLinkContainer>
        &nbsp;&nbsp;
        <FilterTodoLinkContainer store={store} filter='SHOW_ACTIVE'>
            ACTIVE
        </FilterTodoLinkContainer>
        &nbsp;&nbsp;
        <FilterTodoLinkContainer store={store} filter='SHOW_COMPLETED'>
            COMPLETED
        </FilterTodoLinkContainer>
    </div>
)

export default FilterTodos