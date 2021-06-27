import { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { call, debounce, put } from 'redux-saga/effects';

import { searchUsernameAction, setUsernameResultsAction } from './actions/apiActions';

export default function* rootSaga(): Generator {
  yield debounce(1000, searchUsernameAction, searchUsernameSaga);
}

export function* searchUsernameSaga({ payload }: PayloadAction<string>) {
  yield console.log(payload);
  try {
    const { data } = yield call(() =>
      axios.get("https://api.github.com/search/users", {
        params: {
          q: payload,
        },
      })
    );
    yield put(setUsernameResultsAction(data.items));
  } catch (error) {
    yield console.log(error);
  }
}
