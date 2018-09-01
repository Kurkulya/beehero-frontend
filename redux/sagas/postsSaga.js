import { put, takeLatest, all } from 'redux-saga/effects';

export function* fetchPosts() {
    yield all([{name: 1}, {name: 2}]);
}

export function* fetchPost(action) {
    const posts = yield all([{name: action.payload.id}]);
    yield put({ type: "POSTS_RECEIVED", posts });
}

function* actionWatcher() {
    yield takeLatest('GET_POSTS', fetchPosts);
    yield takeLatest('GET_POST', fetchPost);
}

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}