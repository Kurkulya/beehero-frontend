import Router from "next/router";

export default (target, ctx = {}, isServer) => {
    if (isServer) {
        ctx.res.writeHead(303, { Location: target });
        ctx.res.end();
    } else {
        Router.replace(target);
    }
};
