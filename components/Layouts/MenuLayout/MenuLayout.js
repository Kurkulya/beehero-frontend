import './MenuLayout.scss';
import Menu from 'components/Menu';
import React, {Fragment} from "react";
import PropTypes from 'prop-types';

const MenuLayout = ({ children, hideMenu }) => (
    <Fragment>
        <div className="bh-menu-layout">
            {!hideMenu
                && (
                    <div className="bh-menu-area">
                        <div className="bh-menu-fixed">
                            <Menu />
                        </div>
                    </div>
                )}
            {children}
        </div>
    </Fragment>
);

MenuLayout.propTypes = {
    children: PropTypes.object,
    hideMenu: PropTypes.bool,
};

export default MenuLayout;
