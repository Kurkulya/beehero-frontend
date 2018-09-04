import { parseCookies } from "nookies";
import parseJson from 'helpers/parseJson';

export const hasAuthInfo = (res) => {
    const headers = parseJson(res);
    return headers && headers.hasOwnProperty('access-token') && headers.hasOwnProperty('client') && headers.hasOwnProperty('uid');
};

export const getAuthInfo = (ctx) => {
    return parseCookies(ctx)['auth-headers'];
};

export function authTokenFormat(res) {
    const headers = parseJson(res);
    return {
        'access-token': headers['access-token'],
        client: headers.client,
        uid: headers.uid,
    };
}
