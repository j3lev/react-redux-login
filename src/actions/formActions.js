import { ACTION_TYPES } from "../constants/actionTypes";
import * as api from '../api/login';

export function changeField(val, name) {
    return dispatch => {
        dispatch({ type: ACTION_TYPES.CHANGE_FIELD, val, name });
    }
};

export function signup(data) {
    return dispatch => {
        dispatch({ type: ACTION_TYPES.TRY_SIGNUP });
        api.signup(data).then(response => {
            dispatch({ type: ACTION_TYPES.SIGN_UP_SUCCESS, data: response.data });
        }).catch(response => {
            console.error(response);
            dispatch({ type: ACTION_TYPES.SIGN_UP_FAIL });
        });
    };
};

export function login(data) {
    return dispatch => {
        dispatch({ type: ACTION_TYPES.TRY_LOGIN });
        api.login(data).then(response => {
            dispatch({ type: ACTION_TYPES.LOGIN_SUCCESS, data: response.data });
        }).catch(response => {
            console.error(response);
            dispatch({ type: ACTION_TYPES.LOGIN_FAIL });
        });
    };
};