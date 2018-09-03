const POSTS_RECEIVED = "POSTS_RECEIVED";

const initialState = [];

export function postsReducer(state = initialState, action) {
    switch (action.type) {
    case POSTS_RECEIVED:
        return action.posts;
    default:
        return state;
    }
}
