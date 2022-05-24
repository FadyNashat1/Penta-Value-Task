import {combineReducers} from 'redux';
import getCurrencyList from './getCurrency';
const rootReducer = combineReducers({
  getCurrencyList,
});

export default rootReducer;
//importstate name and put it in combine reducers
