import React from 'react'

const FilterTodoLink = (
    {
        currentFilter,
        filter,
        children,
        onClick
    }) => {

    if (filter === currentFilter) {
        return (
            <span>{children}</span>
        )
    }

    return (
        <a
            href='#'
            onClick={
                e => {
                    e.preventDefault(filter)
                    onClick(filter)
                }
            }
        >
            {children}
        </a>
    )
}

export default FilterTodoLink