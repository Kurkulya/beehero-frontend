const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";

const initialState = {};

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case SIGN_IN_SUCCESS:
            return action.user;
        default:
            return state;
    }
}
