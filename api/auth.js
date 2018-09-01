import { post } from "../lib/request";
import {setCookie, getCookie, removeCookie} from "../lib/session";
import redirect from "../lib/redirect";

const isServer = () => typeof window === 'undefined';

export const signIn = async ({email, password}) => {
    try {
        const res = await post("/auth/sign_in", { email, password });
        const headers = res.headers;
        if (!hasAuthInfo(headers)) return res.data;
        const authToken = authTokenFormat(headers);
        setCookie('auth-headers', authToken);
        return res.data;
    } catch (error) {
        return error.response && error.response.status === 404
            ? "Wrong email/password"
            : "Unknown error. Please try again";
    }
};

export const signOut = (ctx = {}) => {
    if (!isServer()) {
        removeCookie('auth-headers');
        redirect("/auth/login", ctx);
    }
};

export const getAuthInfo = ctx => {
    return getCookie('auth-headers', ctx.req);
};

export const isAuthenticated = ctx => !!getAuthInfo(ctx);

export const redirectIfAuthenticated = res => {
    if (isAuthenticated(res)) {
        redirect("/", res, isServer());
        return true;
    }
    return false;
};

export const redirectIfNotAuthenticated = req => {
    if (!isAuthenticated(req)) {
        redirect('/auth/login', req, isServer());
        return true;
    }
    return false;
};

const hasAuthInfo = (res) => {
    return res['access-token'] && res.client && res.uid;
};

export function authTokenFormat (header) {
    return {
        'access-token': header['access-token'],
        'client': header['client'],
        'uid': header['uid']
    };
}
