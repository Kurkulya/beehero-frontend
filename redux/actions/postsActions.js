export const getPosts = () => ({
    type: 'GET_POSTS',
    payload: new Promise((res) => { res([{ name: 1 }, { name: 2 }]); }),
});

export const getPost = id => ({
    type: 'GET_POST', payload: { id },
});
