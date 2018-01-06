import React from 'react'

const AddTodo = ({ onAddTodo }) => {
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
                        if (txtInput.value) onAddTodo(txtInput.value)
                        txtInput.value = ''
                    }
                }
            >
                Add a new Todo
            </button>
        </div>
    )
}

export default AddTodo