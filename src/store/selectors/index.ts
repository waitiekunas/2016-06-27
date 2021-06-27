import { RootState } from './../reducers/allReducers';

export const selectUserNames = (state: RootState) => state.apiData.users;
export const selectUser = (state: RootState) => state.appData.user;
