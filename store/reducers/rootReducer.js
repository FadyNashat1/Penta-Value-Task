import {
    // talt khatwa
    REDUX_TODOLIST,
    REDUX_DELTODOLIST,
    REDUX_LOGIN,
    REDUX_lOGOUT
} from '../CONSTANTS';

const initState = {
    // awl khatwa
    todolist: [],
    deltodolist: [],
    login: false,
    logOut: false,
};

export default (state = initState, action) => {
    switch (action.type) {
        // rab3 khatwa
        case REDUX_TODOLIST:
            return { ...state, todolist: action.value };
        case REDUX_DELTODOLIST:
            return { ...state, deltodolist: action.value };
        case REDUX_LOGIN:
            return { ...state, login: action.value };
        case REDUX_lOGOUT:
            return { ...state, logOut: action.value };
        default:
            return { ...state };
    }
};
