import React from 'react';
import _ from 'lodash';
import './MenuItem.scss';
import PropTypes from 'prop-types';
import { UncontrolledCollapse } from 'reactstrap';

class MenuItem extends React.Component {
    render() {
        return (
            <div>
                <div className="bh-menu-item" id="Silver_Stone">{name}</div>
                <UncontrolledCollapse toggler="Silver_Stone">
                    {_.map(list, item => (<MenuItem name={item.name}/>))}
                </UncontrolledCollapse>
            </div>
        );
    }
}

MenuItem.propTypes = {
    name: PropTypes.string.isRequired,
    list: PropTypes.array,
};

export default MenuItem;
