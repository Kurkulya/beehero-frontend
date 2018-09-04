const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
const SIGN_OUT_SUCCESS = "SIGN_OUT_SUCCESS";

const initialState = { isSignIn: false };

export function userReducer(state = initialState, action) {
    switch (action.type) {
    case SIGN_IN_SUCCESS:
        return { ...action.user, isSignIn: true };
    case SIGN_OUT_SUCCESS:
        return initialState;
    default:
        return state;
    }
}
