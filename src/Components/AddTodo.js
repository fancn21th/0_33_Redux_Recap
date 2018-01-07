import React from 'react'
import { connect } from 'react-redux'
import addTodo from '../Actions/addTodo'

let AddTodo = ({ dispatch }) => {
    let txtInput;
    return (
        <div>
            <input
                type="text"
                ref={
                    input => txtInput = input
                }
            />
            <button
                onClick={
                    () => {
                        if(txtInput.value){
                            dispatch(addTodo(txtInput.value))
                            txtInput.value = ''
                        }
                    }
                }
            >
                Add a new Todo
            </button>
        </div>
    )
}

AddTodo = connect(
    null, // no need to subscribe to store
    null, // dispatch as props by default
    // dispatch => {
    //     return {
    //         dispatch,
    //     }
    // }
)(AddTodo)

export default AddTodo