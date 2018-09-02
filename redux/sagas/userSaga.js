import { put, takeLatest, call, all } from 'redux-saga/effects';
import api from '../../api/config/apiAuth';
import { getCookieClient, removeCookieClient } from "../../helpers/cookies";
import { redirect } from "../../helpers/redirect";
import { deleteAuthHeaders } from "../../helpers/headers";

export function* logIn(action) {
    try {
        console.log(api.auth.signIn);
        const {data} = yield api.auth.signIn(action.payload);
        console.log(data);
        yield put({type: "SIGN_IN_SUCCESS", user: data});
    } catch (error) {
        yield put({type: "SIGN_IN_ERROR", error});
    }
}

export function* logOut() {
    try {
        yield api.auth.signOut;
        deleteAuthHeaders();
        removeCookieClient('auth-headers');
        redirect("/auth/login");
        yield put({type: "SIGN_OUT_SUCCESS"});
    } catch (error) {
        yield put({type: "SIGN_OUT_ERROR", error});
    }
}

export function* validateToken() {
    try {
        const headers = getCookieClient('auth-headers');
        const { data } = yield api.auth.validateToken(headers);
        if(!data) throw 'Unauthorized';
        yield put({type: "SIGN_IN_SUCCESS", user: data});
    } catch (error) {
        redirect("/auth/login");
        yield put({type: "SIGN_IN_ERROR", error});
    }
}

export default function* actionWatcher() {
    yield takeLatest('SIGN_IN_REQUEST', logIn);
    yield takeLatest('SIGN_OUT_REQUEST', logOut);
    yield takeLatest('VALIDATE_TOKEN_REQUEST', validateToken);
}



