import { connect } from 'react-redux';
import { getPostsState } from 'redux/selectors/postsSelectors';
import Posts from './Posts';

const mapStateToProps = (state) => {
    return {
        posts: getPostsState(state),
    };
};

export default connect(mapStateToProps)(Posts);
