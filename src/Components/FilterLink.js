import React from 'react'

const FilterLink = ({ onClick, filter, currentFilter, children }) => {
    if(currentFilter === filter){
        return (
            <span>{children}</span>
        )
    }
    return (
        <a
            href='#'
            onClick={
                e => {
                    e.preventDefault()
                    onClick(filter)
                }
            }>
            {children}
        </a>
    )
}

export default FilterLink
