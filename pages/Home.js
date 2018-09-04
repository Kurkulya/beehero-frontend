import './style.scss';
import React from 'react';
import { injectIntl } from 'react-intl';
import { redirectIfNotAuthenticated } from "helpers/redirect";
import PropTypes from 'prop-types';

const Home = ({ logOut, intl }) => (
    <div>
        <button onClick={logOut}>LogOut</button>
        <div>{intl.formatMessage({ id: 'bh.name' })}</div>
    </div>
);

Home.getInitialProps = (ctx) => {
    if (redirectIfNotAuthenticated(ctx)) {
        return {};
    }
};

Home.propTypes = {
    logOut: PropTypes.func.isRequired,
    intl: PropTypes.object.isRequired,
};

export default injectIntl(Home);
