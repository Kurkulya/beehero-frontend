import { put, takeLatest, call } from 'redux-saga/effects';
import {signIn} from "../../api/auth";

export function* logIn(action) {
    const user = yield call(signIn, action.payload);
    yield put({ type: "SIGN_IN_SUCCESS", user });
}

export default function* actionWatcher() {
    yield takeLatest('SIGN_IN_REQUEST', logIn);
}
