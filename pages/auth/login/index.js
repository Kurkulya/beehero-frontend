import Login from './login';
import { connect } from 'react-redux';
import React from 'react';
import {logIn} from "../../../redux/actions/authActions";

function mapDispatchToProps (dispatch) {
    return {
        logIn: (email, password) => dispatch(logIn(email, password))
    }
}

export default connect(null, mapDispatchToProps)(Login);
