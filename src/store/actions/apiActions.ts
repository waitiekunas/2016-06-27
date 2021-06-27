import { createAction } from '@reduxjs/toolkit';

import { User } from './../../types';

export const searchUsernameAction = createAction<string>("SEARCH_USERNAME");
export const setUsernameResultsAction = createAction<User[]>("SET_USERNAMES");
