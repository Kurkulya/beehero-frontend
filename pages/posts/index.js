import { connect } from 'react-redux';
import Posts from './Posts';
import { getPosts } from '../../redux/actions/postsActions';
import { getPostsState } from '../../redux/selectors/postsSelectors';

const mapStateToProps = (state) => {
    return {
        posts: getPostsState(state)
    };
};

const mapDispatchToProps = {
    getPosts: getPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);