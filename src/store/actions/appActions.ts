import { createAction } from '@reduxjs/toolkit';

import { User } from './../../types';

export const setUserAction = createAction<User>("SET_SELECTED_USER");
