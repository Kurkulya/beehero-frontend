import { connect } from 'react-redux';
import Header from './Header';
import { getIsSignInState, getUserEmailState } from "../../redux/selectors/userSelectors";
import { logOut } from "../../redux/actions/authActions";

const mapStateToProps = state => ({
    isSignIn: getIsSignInState(state),
    email: getUserEmailState(state),
});

const mapDispatchToProps = dispatch => ({
    logOut: () => dispatch(logOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
