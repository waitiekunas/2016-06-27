import { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { all, call, debounce, put, takeLatest } from 'redux-saga/effects';

import {
  getUserRepositoriesAction,
  searchUserAction,
  setRepositoryInfoAction,
  setUserResultsAction,
} from './actions/apiActions';

export default function* rootSaga(): Generator {
  yield debounce(1000, searchUserAction, searchUsernameSaga);
  yield all([takeLatest(getUserRepositoriesAction, getUserRepositoriesSaga)]);
}

export function* searchUsernameSaga({ payload }: PayloadAction<string>) {
  try {
    const { data } = yield call(() =>
      axios.get("https://api.github.com/search/users", {
        params: {
          q: payload,
        },
      })
    );
    yield put(setUserResultsAction(data.items));
  } catch (error) {
    console.log(error);
  }
}
export function* getUserRepositoriesSaga({ payload }: PayloadAction<string>) {
  yield console.log(payload);
  try {
    const { data } = yield call(() =>
      axios.get(`https://api.github.com/users/${payload}/repos`)
    );
    yield put(setRepositoryInfoAction(data));
  } catch (error) {
    console.log(error);
  }
}
