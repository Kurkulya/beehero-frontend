import React from 'react';
import Input from 'components/Input';
import { redirectIfAuthenticated } from "helpers/redirect";
import PropTypes from 'prop-types';

const Login = ({ logIn }) => {
    const signIn = () => {
        logIn('test@mail.com', 'aa123456');
    };
    return (
        <div>
            <button onClick={signIn}>LogIn</button>
            <Input/>
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
