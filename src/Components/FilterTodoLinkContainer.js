import { connect } from 'react-redux'
import FilterTodoLink from './FilterTodoLink'
import setVisibilityFilter from '../Actions/setVisibilityFilter'

const mapStateToProps = (state, ownProps) => {
    return {
        active: state.visibilityFilter === ownProps.filter,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick(filter) {
        dispatch(setVisibilityFilter(ownProps.filter))
    }
})

const FilterTodoLinkContainer = connect(mapStateToProps, mapDispatchToProps)(FilterTodoLink)

export default FilterTodoLinkContainer
