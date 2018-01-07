import { connect } from 'react-redux'
import FilterTodoLink from './FilterTodoLink'

const mapStateToProps = (state, ownProps) => {
    return {
        active: state.visibilityFilter === ownProps.filter,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: filter => {
            dispatch({
                type: 'SET_VISIBILITY_FILTER',
                filter: ownProps.filter,
            })
        }
    }
}

const FilterTodoLinkContainer = connect(mapStateToProps, mapDispatchToProps)(FilterTodoLink)

export default FilterTodoLinkContainer
