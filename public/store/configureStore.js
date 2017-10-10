import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers';

function configureStore(intitalState) {
  const middlewares = [
    // Middlewares goes here
    thunk,
  ];

  // Support for Redux Dev Tools: https://github.com/gaearon/redux-devtools
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    intitalState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );

  return store;
}

export default configureStore;
