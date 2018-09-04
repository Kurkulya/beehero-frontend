import Header from 'components/Header';
import React, { Fragment } from "react";
import PropTypes from 'prop-types';

const HeaderLayout = ({ children }) => (
    <Fragment>
        <Header />
        {children}
    </Fragment>
);

HeaderLayout.propTypes = {
    children: PropTypes.object,
};

export default HeaderLayout;
