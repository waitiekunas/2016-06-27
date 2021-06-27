import { createReducer } from '@reduxjs/toolkit';

import { setRepositoryInfoAction, setUserResultsAction } from '../actions/apiActions';
import { User } from './../../types';
import { UserRepository } from './../../types';

export interface ApiDataState {
  users?: User[];
  repository?: UserRepository[];
}

export const initialApiDataState: ApiDataState = {
  users: undefined,
  repository: undefined,
};

export const apiReducer = createReducer<ApiDataState>(
  initialApiDataState,
  (builder) => {
    builder
      .addCase(setUserResultsAction, (state, { payload }) => ({
        ...state,
        users: payload,
      }))
      .addCase(setRepositoryInfoAction, (state, { payload }) => ({
        ...state,
        repository: payload,
      }));
  }
);
