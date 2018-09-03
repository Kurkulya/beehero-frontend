import React, { Component } from 'react';
import { getPost, getPosts } from 'redux/actions/postsActions';
import { redirectIfNotAuthenticated } from "helpers/redirect";
import PropTypes from 'prop-types';
import { makeAsyncAction, makeAsyncRequest } from "helpers/asyncActions";

class Posts extends Component {
    static async getInitialProps(ctx) {
        if (redirectIfNotAuthenticated(ctx)) return {};
        await makeAsyncAction(ctx.store, getPost, 'uuuuuuuuuuuuuuuu');
        const postsAll = await makeAsyncRequest(ctx.store, getPosts);
        return { postsAll };
    }

    render() {
        const { posts, postsAll } = this.props;
        return (
            <div className="posts-wrap">
                {posts && posts.map(post => <div key={post.name}>{post.name}</div>)}
                {postsAll && postsAll.map(post => <div key={post.name}>{post.name}</div>)}
            </div>
        );
    }
}

Posts.propTypes = {
    posts: PropTypes.array,
    postsAll: PropTypes.array,
};

export default Posts;
