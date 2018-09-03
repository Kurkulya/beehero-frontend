import './style.scss';
import React from 'react';
import { redirectIfNotAuthenticated } from "helpers/redirect";
import PropTypes from 'prop-types';

const Home = ({ logOut }) => (
    <div>
        <button onClick={logOut}>LogOut</button>
    </div>
);

Home.getInitialProps = (ctx) => {
    if (redirectIfNotAuthenticated(ctx)) {
        return {};
    }
};

Home.propTypes = {
    logOut: PropTypes.func.isRequired,
};

export default Home;
