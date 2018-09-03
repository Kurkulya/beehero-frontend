import { connect } from 'react-redux';
import { logIn } from "redux/actions/authActions";
import Login from './Login';

function mapDispatchToProps(dispatch) {
    return {
        logIn: (email, password) => dispatch(logIn(email, password)),
    };
}

export default connect(null, mapDispatchToProps)(Login);
