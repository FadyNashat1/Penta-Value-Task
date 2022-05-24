// import { REDUX_TODOLIST, } from '../../CONSTANTS';

// export default _ => async (dispatch, getState) => {
//     dispatch({
//         type: REDUX_TODOLIST,
//         value: [],
//     });
// };
import { REDUX_TODOLIST, } from '../../CONSTANTS';

export default id => async (dispatch, getState) => {
    let oldArray = getState().todolist;
    let newArray = oldArray.filter(item => item.id !== id);

    dispatch({
        type: REDUX_TODOLIST,
        value: newArray,
    });
};