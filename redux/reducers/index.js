import { combineReducers } from 'redux';
import { postsReducer } from "./postsReducer";
import { userReducer } from "./userReducer";
import { localeReducer } from "./localeReducer";

export default combineReducers({
    posts: postsReducer,
    user: userReducer,
    locale: localeReducer,
});
