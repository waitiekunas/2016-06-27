import { createReducer } from '@reduxjs/toolkit';

import { setUsernameResultsAction } from '../actions/apiActions';
import { User } from './../../types';

export interface ApiDataState {
  users: User[] | undefined;
}

export const initialApiDataState: ApiDataState = {
  users: undefined,
};

export const apiReducer = createReducer<ApiDataState>(
  initialApiDataState,
  (builder) => {
    builder.addCase(setUsernameResultsAction, (state, { payload }) => ({
      ...state,
      users: payload,
    }));
  }
);
