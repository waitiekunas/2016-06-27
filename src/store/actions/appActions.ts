import { createAction } from '@reduxjs/toolkit';

import { User } from './../../types';

export const setUserAction = createAction<User | undefined>(
  "SET_SELECTED_USER"
);
