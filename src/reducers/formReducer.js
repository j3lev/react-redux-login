import { ACTION_TYPES } from "../constants/actionTypes";

export const formReducer = (state = {}, action) => {
    switch (action.type) {
        case ACTION_TYPES.CHANGE_FIELD:
            const isUsernameValid = action.name === 'username' ? !/\W|_/.test(action.val) && action.val.length >= 4 : state.isUsernameValid,
                  isPasswordValid = action.name === 'password' ? action.val.length >= 4 : state.isPasswordValid, 
                  usernameTouched = action.name === 'username' || state.usernameTouched, 
                  passwordTouched = action.name === 'password' || state.passwordTouched;
            return Object.assign({}, state, { isUsernameValid, isPasswordValid, usernameTouched, passwordTouched, [action.name]: action.val });
        default:
            return state;
    }
}