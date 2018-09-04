import axios from 'axios';
import { authTokenFormat, hasAuthInfo } from './authToken';
import { setCookie } from 'nookies';
import parseJson from 'helpers/parseJson';

const authHeadersKeys = ['access-token', 'client', 'uid'];

export const updateHeadersClient = (headers) => {
    if (!headers || !hasAuthInfo(headers)) return null;
    setDefaultHeaders(headers);
    const authToken = authTokenFormat(headers);
    setCookie({}, 'auth-headers', JSON.stringify(authToken), { path: '/' });
};

export function deleteAuthHeaders() {
    authHeadersKeys.forEach((key) => {
        delete axios.defaults.headers.common[key];
    });
}

export const setDefaultHeaders = (data) => {
    const headers = parseJson(data);
    if(!headers) return null;
    authHeadersKeys.forEach((key) => {
        axios.defaults.headers.common[key] = headers[key];
    });
};
