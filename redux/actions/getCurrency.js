import * as types from '../types/Types';

// GET CURRENCY LIST
export const getCurrencyRequest = () => {
  return {
    type: types.GET_CURRENCY_REQUEST,
  };
};
export const getCurrencySuccess = data => {
  return {
    type: types.GET_CURRENCY_SUCCESS,
    payload: data,
  };
};
export const getCurrencyFail = () => {
  return {
    type: types.GET_CURRENCY_FAIL,
  };
};
