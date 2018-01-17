import { v4 } from 'node-uuid';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const fakeTodos = {
    todos: [
        {
            id: v4(),
            text: 'I want to do this 1stly',
            completed: false
        },
        {
            id: v4(),
            text: 'I want to do this 2ndly',
            completed: true
        },
        {
            id: v4(),
            text: 'I want to do this 3rdly',
            completed: false
        },
    ]
};

export const fetchTodos = (filter) => delay(500).then(() => {
    console.log('500 million seconds passed!');
    switch (filter) {
        case 'all': return fakeTodos.todos;
        case 'active': return fakeTodos.todos.filter(t => !t.completed);
        case 'completed': return fakeTodos.todos.filter(t => t.completed);
        default:
            throw new Error(`Unknown filter: ${filter}`);
    }
});