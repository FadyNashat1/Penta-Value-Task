import {call, put, all, takeLatest, fork} from 'redux-saga/effects';
import * as Api from '../api/getCurrency';
import * as Types from '../types/Types';
import * as actions from '../actions/getCurrency';

// GET CURRENCY LIST
function* getCurrencyListSaga() {
  try {
    const response = yield call(Api.getCurrency);
    console.log('response from saga ', response?.data);
    yield put(actions.getCurrencySuccess(response?.data)); //OR
    // yield put({type: Types.GET_CURRENCY_SUCCESS, payload: response?.data});
  } catch (e) {
    console.error('error when get currency list', e);
    yield put(actions.getCurrencyFail());
    // yield put({type: Types.GET_CURRENCY_FAIL, error: e.response});
  }
}

export default function* authSagas() {
  yield takeLatest(Types.GET_CURRENCY_REQUEST, getCurrencyListSaga);
}
