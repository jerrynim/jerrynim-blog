import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import createSagaMiddleware from 'redux-saga';
import user from './user';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  user,
});

export const store = createStore(
  reducer,
  //connect saga
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

// then run the saga
sagaMiddleware.run(rootSaga);
