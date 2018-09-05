import React from 'react';
import './Header.scss';
import PropTypes from 'prop-types';

const Header = ({ isSignIn, email, logOut }) => {
    return (
        <div className="bh-header">
            <div className="bh-header-fixed">
                <img className="bh-header-logo" src="static/images/logo.webp"/>
                {isSignIn
                    && (
                        <div className="bh-user-info">
                            <button className="bh-logout-button" onClick={logOut}>LogOut</button>
                            <div className="bh-user-email">{email}</div>
                        </div>
                    )}
            </div>
        </div>);
};

Header.propTypes = {
    isSignIn: PropTypes.bool.isRequired,
    logOut: PropTypes.func.isRequired,
    email: PropTypes.string,
};

export default Header;
