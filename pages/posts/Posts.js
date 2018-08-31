import React, { Component } from 'react';
import { fetchPosts } from '../../redux/sagas/postsSaga';
import axios from 'axios';

class Posts extends Component {
    static async getInitialProps() {
        await fetchPosts();
        return {};
    }
    componentDidMount () {
        axios.get('https://api.github.com/repos/zeit/next.js').then((res) => {
            console.log('DidMount', res)
        });
    }
    render() {
        return (
            <div className="posts-wrap">
                {this.props.posts && this.props.posts.map(post => <div>{post.name}</div>)}
            </div>
        );
    }
}

export default Posts;
