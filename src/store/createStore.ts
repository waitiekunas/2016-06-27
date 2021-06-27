import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import allReducers from './reducers/allReducers';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: allReducers,
  middleware: [sagaMiddleware],
  devTools: true,
});

sagaMiddleware.run(rootSaga);

export default store;
