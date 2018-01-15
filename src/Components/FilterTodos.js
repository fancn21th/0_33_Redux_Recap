import React from 'react'
import FilterLink from './FilterLink'

const FilterTodos = () => (
    <div>
        Show:
        &nbsp;&nbsp;
        <FilterLink filter='all'>
            All
        </FilterLink>
        &nbsp;&nbsp;
        <FilterLink filter='active'>
            ACTIVE
        </FilterLink>
        &nbsp;&nbsp;
        <FilterLink filter='completed'>
            COMPLETED
        </FilterLink>
    </div>
)

export default FilterTodos