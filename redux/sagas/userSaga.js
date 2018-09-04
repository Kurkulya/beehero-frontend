import { put, takeEvery, call } from 'redux-saga/effects';
import api from 'api/config/apiAuth';
import { redirect } from "helpers/redirect";
import { deleteAuthHeaders } from "helpers/headers";
import { setCookie, parseCookies, destroyCookie } from 'nookies';
import { authTokenFormat, hasAuthInfo } from "../../helpers/authToken";

export function* logIn(action) {
    try {
        const { data } = yield call([api.auth, api.auth.signIn], action.payload);
        redirect('/');
        yield put({ type: "SIGN_IN_SUCCESS", user: data });
    } catch (error) {
        yield put({ type: "SIGN_IN_ERROR", error });
    }
}

export function* logOut() {
    try {
        yield call([api.auth, api.auth.signOut]);
        deleteAuthHeaders();
        destroyCookie({}, 'auth-headers');
        redirect("/login");
        yield put({ type: "SIGN_OUT_SUCCESS" });
    } catch (error) {
        yield put({ type: "SIGN_OUT_ERROR", error });
    }
}

export function* validateToken(action) {
    try {
        const headers = parseCookies(action.payload)['auth-headers'];
        const { data } = yield call([api.auth, api.auth.validateToken], headers);
        if (hasAuthInfo(headers)) {
            const authHeaders = authTokenFormat(headers);
            setCookie(action.payload, 'auth-headers', JSON.stringify(authHeaders));
            console.log('Server cookies has been set: ', authHeaders);
        }
        if (data) {
            yield put({ type: "SIGN_IN_SUCCESS", user: data });
        } else {
            yield put({ type: "SIGN_IN_ERROR", error });
        }
    } catch (error) {
        if (action.payload.res && !action.payload.res.finished) {
            destroyCookie(action.payload, 'auth-headers');
            console.log('Server cookies has been deleted');
        }
        yield put({ type: "SIGN_IN_ERROR", error });
    }
}

export default function* actionWatcher() {
    yield takeEvery('SIGN_IN_REQUEST', logIn);
    yield takeEvery('SIGN_OUT_REQUEST', logOut);
    yield takeEvery('VALIDATE_TOKEN_REQUEST', validateToken);
}
