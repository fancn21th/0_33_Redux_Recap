import React, { Component } from 'react'
import FilterTodoLink from './FilterTodoLink'

// data init and behavior handler
class FilterTodoLinkContainer extends Component {
    componentDidMount() {
        const { store } = this.props
        this.unsubscribe = store.subscribe(() => this.forceUpdate())
    }

    componentWillUnmount(){
        this.unsubscribe()
    }

    render(){
        const { store, filter, children } = this.props
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

export default FilterTodoLinkContainer
