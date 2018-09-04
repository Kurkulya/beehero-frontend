export const logIn = (email, password) => ({
    type: 'SIGN_IN_REQUEST',
    payload: { email, password },
});

export const logOut = () => ({
    type: 'SIGN_OUT_REQUEST',
});

export const validateToken = request => ({
    type: 'VALIDATE_TOKEN_REQUEST',
    payload: request,
});
