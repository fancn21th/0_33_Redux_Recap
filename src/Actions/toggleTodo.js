const toogleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id,
    }
}

export default toogleTodo