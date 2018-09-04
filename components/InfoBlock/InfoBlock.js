import React from 'react';
import './InfoBlock.scss';
import PropTypes from 'prop-types';
import { roundNumberToTen } from "../../helpers/mathHelpers";

const InfoBlock = ({ icon, name, value }) => {
    return (
        <div className="bh-info_container">
            <div className="bh-info-title">
                <img src={icon} alt="" className="h-100 bh-icon mr-2"/>
                <span>{name}</span>
            </div>
            <span className="text-center bh-info_value my-3">{roundNumberToTen(value)}</span>
        </div>);
};

InfoBlock.propTypes = {
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
};

export default InfoBlock;
