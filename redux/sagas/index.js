import {fork} from 'redux-saga/effects';

import authSagas from './getCurrenctList';

export default function* rootSaga() {
  yield fork(authSagas);
}
