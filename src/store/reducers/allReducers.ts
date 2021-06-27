import { combineReducers } from 'redux';

import { ApiDataState, apiReducer } from './apiReducers';
import { AppDataState, appReducer } from './appReducer';

export interface RootState {
  apiData: ApiDataState;
  appData: AppDataState;
}

const allReducers = combineReducers({
  apiData: apiReducer,
  appData: appReducer,
});
export default allReducers;
