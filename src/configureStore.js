import { createStore } from 'redux';
import todoApp from './Reducers';

const logger = (store) => (next) => {
    /* eslint-disable no-console */
    if (!console.group) {
        return next;
    }

    return (action) => {
        console.group(action.type);
        console.log('%c prev state', 'color: gray', store.getState());
        console.log('%c action', 'color: blue', action);
        const returnValue = next(action);
        console.log('%c next state', 'color: green', store.getState());
        console.groupEnd(action.type);
        return returnValue;
    };
    /* eslint-enable no-console */
};

// by default dispatch can only return a plain object
// so we need to make it works for Promise either
const promise = (store) => (next) => (action) => {
    if(typeof action.then === 'function'){
        return action.then(next);
    }
    return next;
};

const wrapDispatchWithMiddlewares = (store, middlewares) =>
    middlewares.slice().reverse().forEach(middleware => {
        store.dispatch = middleware(store)(store.dispatch);
    });

const configureStore = () => {
  const store = createStore(
      todoApp,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  const middlewares = [promise];

  // specify the order in which the action propagates through the middlewares
  middlewares.push(logger)

  wrapDispatchWithMiddlewares(store, middlewares);

  return store;
};

export default configureStore;
