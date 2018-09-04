import React from 'react';
import './Menu.scss';

const Menu = () => {
    return (
        <div className="bh-menu">
            <div className="bh-menu-top">
                <div className="bh-menu-item">Dashboard</div>
                <div className="bh-menu-item">Regions</div>
                <div className="bh-menu-item">Settings</div>
            </div>
            <div className="bh-menu-bottom">
                <div className="bh-menu-item">Send Feedback</div>
                <div className="bh-menu-item">Help</div>
            </div>
        </div>);
};

export default Menu;
