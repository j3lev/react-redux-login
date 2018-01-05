import { ACTION_TYPES } from '../constants/actionTypes';

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case ACTION_TYPES.LOGIN_FAIL:
            return Object.assign({}, state, { loginFailed: true, isLoading: false, message: 'Oops! Looks like something went wrong' });
        case ACTION_TYPES.LOGIN_SUCCESS:
            return Object.assign({}, state, { loginSuccess: true, isLoading: false, data: action.data });
        case ACTION_TYPES.TRY_LOGIN:
            return Object.assign({}, state, { isLoading: true, loginFailed: false, loginSuccess: false });
        case ACTION_TYPES.SIGN_UP_FAIL:
            return Object.assign({}, state, { signupFailed: true, isLoading: false });
        case ACTION_TYPES.SIGN_UP_SUCCESS:
            return Object.assign({}, state, { signupSuccess: true, isLoading: false, data: action.data });
        case ACTION_TYPES.TRY_SIGNUP:
            return Object.assign({}, state, { isLoading: true, signupSuccess: false, signupFailed: false });
        default:
            return state;
    }
}