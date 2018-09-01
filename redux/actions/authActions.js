export const logIn = (email, password) => ({
    type: 'SIGN_IN_REQUEST',
    payload: { email, password }
});

export const logOut = () => ({
    type: 'SIGN_OUT'
});