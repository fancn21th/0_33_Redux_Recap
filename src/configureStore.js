import { createStore } from 'redux';
import todoApp from './Reducers';

// by default dispatch can only return a plain object
// so we need to make it works for Promise either
const addPromiseSupportToDispatch = (store) => {
  const rawDispatch = store.dispatch;

  return (action) => {
    if(typeof action.then === 'function'){
      return action.then(rawDispatch);
    }
    return rawDispatch;
  }
};

const configureStore = () => {
  const store = createStore(
      todoApp,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  store.dispatch = addPromiseSupportToDispatch(store);

  return store;
};

export default configureStore;
