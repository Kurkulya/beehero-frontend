import { getCookie } from "./cookies";

export const hasAuthInfo = (res) => {
    return res['access-token'] && res.client && res.uid;
};

export const getAuthInfo = ctx => {
    return getCookie('auth-headers', ctx.req);
};

export function authTokenFormat (header) {
    return {
        'access-token': header['access-token'],
        'client': header['client'],
        'uid': header['uid']
    };
}
