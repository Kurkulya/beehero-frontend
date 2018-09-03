import { connect } from 'react-redux';
import { logOut } from "redux/actions/authActions";
import Home from './Home';

function mapDispatchToProps(dispatch) {
    return {
        logOut: () => dispatch(logOut()),
    };
}

export default connect(null, mapDispatchToProps)(Home);
