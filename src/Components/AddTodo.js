import React from 'react'
import PropTypes from 'prop-types'

const AddTodo = ( props, { store }) => {
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
                            store.dispatch({
                                type: 'ADD_TODO',
                                id: Date.now(),
                                text: txtInput.value,
                            })
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

AddTodo.contextTypes = {
    store: PropTypes.object
}

export default AddTodo