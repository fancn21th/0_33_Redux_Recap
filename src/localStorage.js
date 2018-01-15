export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if(!serializedState) return undefined;
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
}

export const saveState = (state) => {
    try {
        const serialziedState = JSON.stringify(state);
        localStorage.setItem('state', serialziedState);
    } catch (err) {
        // ignore errors
    }
}