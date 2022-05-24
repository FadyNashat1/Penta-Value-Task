// import { REDUX_TODOLIST, } from '../../CONSTANTS';

// export default setList => async (dispatch, getState) => {
//     dispatch({
//         type: REDUX_TODOLIST,
//         value: { ...setList },
//     });
// };
import { REDUX_TODOLIST, } from '../../CONSTANTS';

export default newObj => async (dispatch, getState) => {
    let oldArray = getState().todolist;
    oldArray = [...oldArray, newObj];

    dispatch({
        type: REDUX_TODOLIST,
        value: oldArray,
    });
};