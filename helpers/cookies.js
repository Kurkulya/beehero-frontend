import Cookies from "js-cookie";
import cookie from 'cookie';

export const setCookieClient = (key, value) => {
    Cookies.set(key, value, {
        expires: 1,
        path: "/",
    });
};

export function setCookieServer(res, key, value) {
    if (res) {
        res.cookie(key, value);
    }
}

export const removeCookieServer = (key, res) => {
    console.log(res);
    if (res && res.cookie) {
        res.cookie(key, 'deleted');
    }
    console.log('removed');
};

export const removeCookieClient = (key) => {
    Cookies.remove(key, {
        expires: 1,
    });
};

export const getCookie = (key, req) => {
    return typeof window === "undefined"
        ? getCookieServer(key, req)
        : getCookieClient(key);
};

export const getCookieClient = (key) => {
    return Cookies.get(key);
};

export const getCookieServer = (key, req) => {
    if (!req.headers.cookie) return undefined;
    return cookie.parse(req.headers.cookie)[key];
};
