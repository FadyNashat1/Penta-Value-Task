import * as Types from '../types/Types';
const initialState = {
  CurrencyList: [],
  loading: false,
};

export default function getCurrencyList(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case Types.GET_CURRENCY_REQUEST:
      return {
        ...state,
        CurrencyList: payload,
        loading: true,
      };
    case Types.GET_CURRENCY_SUCCESS:
      return {
        ...state,
        CurrencyList: payload,
        loading: false,
      };
    case Types.GET_CURRENCY_FAIL:
      return {
        ...state,
        loading: false,
      };

    default:
      return {...state};
  }
}
