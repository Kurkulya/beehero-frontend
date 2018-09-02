import Cookies from "js-cookie";

export const setCookieClient = (key, value) => {
    Cookies.set(key, value, {
        expires: 1,
        path: "/"
    });
};

export function setCookieServer (res, key, value) {
    if (res) {
        res.cookie(key, value, { maxAge: 1 });
    }
}

export const removeCookieClient = key => {
    Cookies.remove(key, {
        expires: 1
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
    if (!req.headers.cookie) {
        return undefined;
    }
    const rawCookie = req.headers.cookie
        .split(";")
        .find(c => c.trim().startsWith(`${key}=`));
    if (!rawCookie) {
        return undefined;
    }
    return rawCookie.split("=")[1];
};
