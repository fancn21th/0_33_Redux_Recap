const addTodo = text => ({
    type: 'ADD_TODO',
    id: Date.now(),
    text,
})

export default addTodo