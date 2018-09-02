import Home from './Home';
import { connect } from 'react-redux';
import React from 'react';
import { logOut } from "../redux/actions/authActions";

function mapDispatchToProps (dispatch) {
    return {
        logOut: ( ) => dispatch(logOut())
    }
}

export default connect(null, mapDispatchToProps)(Home);
