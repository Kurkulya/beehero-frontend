import { combineReducers } from 'redux';
import { postsReducer } from "./postsReducer";
import { userReducer } from "./userReducer";
import { localeReducer } from "./localeReducer";
import { regionsReducer } from "./regionsReducer";

export default combineReducers({
    posts: postsReducer,
    user: userReducer,
    locale: localeReducer,
    regions: regionsReducer,
});
