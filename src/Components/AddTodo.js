import React from 'react'

const AddTodo = ({ store }) => {
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

export default AddTodo