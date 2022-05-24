import { REDUX_LOGIN, } from '../../CONSTANTS';

export default value => async (dispatch, getState) => {
    dispatch({ type: REDUX_LOGIN, value: false });
};