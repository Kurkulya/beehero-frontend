import React from 'react';
import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import configureStore from 'redux/store';
import { validateToken } from "redux/actions/authActions";
import { parseCookies } from 'nookies';
import {setDefaultHeaders} from "../helpers/headers";

class ExampleApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        ctx.store.dispatch(validateToken(ctx));
        const headers = parseCookies(ctx)['auth-headers'];
        if(ctx.isServer) {
            setDefaultHeaders(headers);
        }
        return { pageProps, authHeaders: headers };
    }
    componentDidMount () {
        setDefaultHeaders(this.props.authHeaders);
    }
    render() {
        const { Component, pageProps, store } = this.props;
        return (
            <Container>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        );
    }
}

export default withRedux(configureStore)(withReduxSaga(ExampleApp));
