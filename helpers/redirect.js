import Router from "next/router";
import { getAuthInfo } from "./authToken";

export const isAuthenticated = ctx => !!getAuthInfo(ctx);
const isServer = () => typeof window === "undefined";

export const redirectIfAuthenticated = (res) => {
    if (isAuthenticated(res)) {
        redirect("/", res, isServer());
        return true;
    }
    return false;
};

export const redirectIfNotAuthenticated = (req) => {
    if (!isAuthenticated(req)) {
        redirect('/login', req, isServer());
        return true;
    }
    return false;
};

export const redirect = (target, ctx = {}, isServer) => {
    if (isServer) {
        ctx.res.writeHead(303, { Location: target });
        ctx.res.end();
    } else {
        Router.replace(target);
    }
};
