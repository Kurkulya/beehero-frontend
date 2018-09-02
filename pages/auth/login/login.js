import React from 'react';
import Link from 'next/link';
import {redirectIfAuthenticated} from "../../../helpers/redirect";

const Login = (props) => {
    const logIn = () => {
        props.logIn('test@mail.com', 'aa123456');
    };
    return(
        <div>
            <div>LoginPage</div>
            <button onClick={logIn}>LogIn</button>
            <Link href="/posts">Posts</Link>
        </div>);
};

Login.getInitialProps = (ctx) => {
    if(redirectIfAuthenticated(ctx)) {
        return {};
    }
};

export default Login;
