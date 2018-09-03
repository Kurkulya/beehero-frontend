export const makeAsyncRequest = async (store, request, args) => {
    const action = request(args);
    store.dispatch(action);
    return action.payload;
};

export const makeAsyncAction = async (store, action, args) => {
    await store.dispatch(action(args));
};
