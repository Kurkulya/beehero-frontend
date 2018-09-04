import React from 'react';
import Link from 'next/link';
import { redirectIfAuthenticated } from "helpers/redirect";
import PropTypes from 'prop-types';

const Login = ({ logIn }) => {
    const signIn = () => {
        logIn('test@mail.com', 'aa123456');
    };
    return (
        <div>
            <div className="">LoginPage</div>
            <button onClick={signIn}>LogIn</button>
            <Link href="/posts">Posts</Link>
        </div>);
};

Login.getInitialProps = (ctx) => {
    if (redirectIfAuthenticated(ctx)) {
        return {};
    }
};

Login.propTypes = {
    logIn: PropTypes.func.isRequired,
};

export default Login;
