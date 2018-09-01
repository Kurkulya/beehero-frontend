import React, { Component } from 'react';
import { getPost, getPosts } from '../../redux/actions/postsActions';

const makeAsyncRequest = async (store, request, args) => {
    const action = request(args);
    store.dispatch(action);
    return await action.payload;
};

const makeAsyncAction = async (store, action, args) => {
    await store.dispatch(action(args));
};

class Posts extends Component {
    static async getInitialProps({store}) {
        await makeAsyncAction(store, getPost, 'uuuuuuuuuuuuuuuu');
        const postsAll = await makeAsyncRequest(store, getPosts);
        return {postsAll};
    }
    render() {
        return (
            <div className="posts-wrap">
                {this.props.posts && this.props.posts.map(post => <div key={post.name}>{post.name}</div>)}
                {this.props.postsAll && this.props.postsAll.map(post => <div key={post.name}>{post.name}</div>)}
            </div>
        );
    }
}

export default Posts;
