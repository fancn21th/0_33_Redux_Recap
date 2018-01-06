import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FilterTodoLink from './FilterTodoLink'

// data init and behavior handler
class FilterTodoLinkContainer extends Component {
    componentDidMount() {
        const { store } = this.context
        this.unsubscribe = store.subscribe(() => this.forceUpdate())
    }

    componentWillUnmount(){
        this.unsubscribe()
    }

    render(){
        const { filter, children } = this.props
        const { store } = this.context
        return (
            <FilterTodoLink
                active={ store.getState().visibilityFilter === filter }
                onClick={
                    () => {
                        store.dispatch({
                            type: 'SET_VISIBILITY_FILTER',
                            filter,
                        })
                    }
                }
            >
                {children}
            </FilterTodoLink>
        )
    }
}

FilterTodoLinkContainer.contextTypes = {
    store: PropTypes.object
}

export default FilterTodoLinkContainer
