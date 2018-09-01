import { connect } from 'react-redux';
import Posts from './Posts';
import { getPostsState } from '../../redux/selectors/postsSelectors';

const mapStateToProps = (state) => {
    return {
        posts: getPostsState(state)
    };
};

export default connect(mapStateToProps)(Posts);