import './Menu.scss';
import MenuItem from 'components/Menu/MenuItem';
import React from 'react';
import PropTypes from 'prop-types';

const Menu = ({ regions }) => {
    const arrayOfRegions = () => {
        return Object.values(regions);
    };
    return (
        <div className="bh-menu">
            <div className="bh-menu-top">
                <MenuItem name="Dashboard"/>
                <MenuItem name="Regions" list={arrayOfRegions()}/>
                <MenuItem name="Settings"/>
            </div>
            <div className="bh-menu-bottom">
                <MenuItem name="Send Feedback"/>
                <MenuItem name="Help"/>
            </div>
        </div>);
};

Menu.propTypes = {
    regions: PropTypes.object,
};

export default Menu;
