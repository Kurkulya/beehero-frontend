import './style.scss';
import React from 'react';
import { redirectIfNotAuthenticated } from "../helpers/redirect";

const Home = (props) => (
    <div>
        <button onClick={props.logOut}>LogOut</button>
    </div>
);

Home.getInitialProps = (ctx) => {
    if (redirectIfNotAuthenticated(ctx)) {
        return {};
    }
};

export default Home
