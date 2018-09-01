import redirect from "./redirect";
import { setCookie, getCookie, removeCookie } from "./session";
import { authenticate } from "../services/authApi";
import { createUser } from "../services/userApi";

export const signIn = async (email, password) => {
    const res = await authenticate(email, password);
    if (!res.jwt) {
        return res;
    }
    setCookie("jwt", res.jwt);
    redirect("/user");
    return null;
};

export const signOut = (ctx = {}) => {
    if (process.browser) {
        removeCookie("jwt");
        redirect("/auth/login", ctx);
    }
};

export const getJwt = ctx => {
    return getCookie("jwt", ctx.req);
};

export const isAuthenticated = ctx => !!getJwt(ctx);

export const redirectIfNotAuthenticated = ctx => {
    if (!isAuthenticated(ctx)) {
        redirect("/auth/login", ctx);
        return true;
    }
    return false;
};