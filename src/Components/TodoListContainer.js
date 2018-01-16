import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getVisibleTodos } from "../Reducers";
import TodoList from './TodoList';
import toggleTodo from '../Actions/toggleTodo';
import fetchTodos from '../Actions/fetchTodos';

class TodoListContainer extends Component {
    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps) {
        if(this.props.filter !== prevProps.filter) {
            this.fetchData();
        }
    }

    fetchData() {
        const { filter, fetchTodos } = this.props;
        fetchTodos(filter);
    }

    render() {
        return (
           <TodoList
               {...this.props}
           />
        );
    }
}

const mapStateToProps = (state, { match }) => {
    const filter = match.params.filter || 'all';
    return {
        // for now the component do not rely on the state shape anymore
        todos: getVisibleTodos(state, filter),
        filter,
    }
};

// const mapDispatchToProps = (dispatch) => ({
//     onToggleTodo(id){
//         dispatch(toggleTodo(id))
//     }
// })

TodoListContainer = withRouter(
    connect(mapStateToProps, {
        onToggleTodo: toggleTodo, // mapDispatchToProps shorthand notation, no need to call dispatch explicitly
        fetchTodos,
    })(TodoListContainer)
);

export default TodoListContainer;