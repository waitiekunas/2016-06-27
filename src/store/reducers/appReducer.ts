import { createReducer } from '@reduxjs/toolkit';

import { setUserAction } from '../actions/appActions';
import { User } from './../../types';

export interface AppDataState {
  user: User | undefined;
}

export const initialAppDataState: AppDataState = {
  user: undefined,
};

export const appReducer = createReducer<AppDataState>(
  initialAppDataState,
  (builder) => {
    builder.addCase(setUserAction, (state, { payload }) => ({
      ...state,
      user: payload,
    }));
  }
);
