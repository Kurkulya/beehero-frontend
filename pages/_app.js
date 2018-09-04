import 'bootstrap/scss/bootstrap.scss';
import React from 'react';
import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import en from 'react-intl/locale-data/en';
import withReduxSaga from 'next-redux-saga';
import configureStore from 'redux/store';
import locales from 'locales';
import { validateToken } from "redux/actions/authActions";
import { parseCookies } from 'nookies';
import { addLocaleData, IntlProvider } from 'react-intl';
import { setDefaultHeaders } from "helpers/headers";
import { getLocaleState } from "redux/selectors/localeSelectors";
import { getIsSignInState } from "redux/selectors/userSelectors";
import HeaderLayout from "components/Layouts/HeaderLayout";
import MenuLayout from "../components/Layouts/MenuLayout/MenuLayout";

addLocaleData([...en]);

class ExampleApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        ctx.store.dispatch(validateToken(ctx));
        const headers = parseCookies(ctx)['auth-headers'];
        if (ctx.isServer) {
            setDefaultHeaders(headers);
        }
        return { pageProps, authHeaders: headers };
    }

    componentDidMount() {
        setDefaultHeaders(this.props.authHeaders);
    }

    render() {
        const { Component, pageProps, store } = this.props;
        const locale = getLocaleState(store.getState());
        const isSignIn = getIsSignInState(store.getState());
        return (
            <Container>
                <Provider store={store}>
                    <IntlProvider locale={locale} messages={locales[locale].messages}>
                        <HeaderLayout>
                            <MenuLayout hideMenu={!isSignIn}>
                                <Component {...pageProps} />
                            </MenuLayout>
                        </HeaderLayout>
                    </IntlProvider>
                </Provider>
            </Container>
        );
    }
}

export default withRedux(configureStore)(withReduxSaga(ExampleApp));
