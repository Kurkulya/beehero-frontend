import axios from 'axios';
import { setCookieClient, setCookieServer } from "./cookies";
import { authTokenFormat, hasAuthInfo } from './authToken';

const authHeadersKeys = ['access-token', 'client', 'uid'];

export const updateHeadersClient = (headers) => {
    if (!headers || !hasAuthInfo(headers)) return null;
    setDefaultHeaders(headers);
    const authToken = authTokenFormat(headers);
    setCookieClient('auth-headers', authToken);
};

export function updateHeadersServer(res, responseHeaders = {}, requestHeaders = {}) {
    let headers = requestHeaders;
    if (hasAuthInfo(responseHeaders)) {
        headers = authTokenFormat(responseHeaders);
    }
    setCookieServer(res, 'auth-headers', JSON.stringify(headers));
}

export function deleteAuthHeaders() {
    authHeadersKeys.forEach((key) => {
        delete axios.defaults.headers.common[key];
    });
}

const setDefaultHeaders = (headers) => {
    authHeadersKeys.forEach((key) => {
        axios.defaults.headers.common[key] = headers[key];
    });
};
