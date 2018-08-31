import { put, takeLatest, all } from 'redux-saga/effects';

export function* fetchPosts() {
    const posts = yield [{name: 1}, {name: 2}];
    yield put({ type: "POSTS_RECEIVED", posts });
}

function* actionWatcher() {
    yield takeLatest('GET_POSTS', fetchPosts)
}

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}