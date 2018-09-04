import { put, takeEvery, call } from 'redux-saga/effects';
import api from 'api/config/apiAuth';
import { getCookie, removeCookieClient, removeCookieServer } from "helpers/cookies";
import { redirect } from "helpers/redirect";
import { deleteAuthHeaders, updateHeadersServer } from "helpers/headers";

export function* logIn(action) {
    try {
        const { data } = yield call([api.auth, api.auth.signIn], action.payload);
        yield put({ type: "SIGN_IN_SUCCESS", user: data });
    } catch (error) {
        yield put({ type: "SIGN_IN_ERROR", error });
    }
}

export function* logOut() {
    try {
        yield call([api.auth, api.auth.signOut]);
        deleteAuthHeaders();
        removeCookieClient('auth-headers');
        redirect("/login");
        yield put({ type: "SIGN_OUT_SUCCESS" });
    } catch (error) {
        yield put({ type: "SIGN_OUT_ERROR", error });
    }
}

export function* validateToken(action) {
    try {
        console.log('validate');
        const headers = getCookie('auth-headers', action.payload.req);
        console.log(headers);
        const response = yield call([api.auth, api.auth.validateToken], headers);
        console.log('get response');
        updateHeadersServer(action.payload.res, response.headers, headers);
        yield put({ type: "SIGN_IN_SUCCESS", user: response.data });
    } catch (error) {
        removeCookieServer('auth-headers', action.payload.res);
        console.log('errors');
        yield put({ type: "SIGN_IN_ERROR", error });
    }
}

export default function* actionWatcher() {
    yield takeEvery('SIGN_IN_REQUEST', logIn);
    yield takeEvery('SIGN_OUT_REQUEST', logOut);
    yield takeEvery('VALIDATE_TOKEN_REQUEST', validateToken);
}
