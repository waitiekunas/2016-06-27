import { createAction } from '@reduxjs/toolkit';

import { User } from './../../types';

export const searchUserAction = createAction<string>("SEARCH_USERNAME");
export const setUserResultsAction = createAction<User[]>("SET_USERNAMES");
export const getUserRepositoriesAction = createAction<string>(
  "GET_USER_REPOSITORIES"
);
export const setRepositoryInfoAction = createAction<any[]>("SET_REPOSITORY");
