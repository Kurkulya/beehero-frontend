import './Login.scss';
import React from 'react';
import { redirectIfAuthenticated } from "helpers/redirect";
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

class Login extends React.Component {
    static getInitialProps(ctx) {
        if (redirectIfAuthenticated(ctx)) {
            return {};
        }
    }

    constructor(props) {
        super(props);
        this.emailInput = React.createRef();
        this.passwordInput = React.createRef();
        this.signIn = this.signIn.bind(this);
    }

    signIn(event) {
        const { logIn } = this.props;
        logIn(this.emailInput.current.value, this.passwordInput.current.value);
        event.preventDefault();
    }

    render() {
        const { intl } = this.props;
        return (
            <div className="bh-login-page">
                <form className="bh-login-inputs" onSubmit={this.signIn}>
                    <input ref={this.emailInput} className="bh-input bh-input-email"/>
                    <input ref={this.passwordInput} type="password" className="bh-input bh-input-password"/>
                    <input type='submit' className="bh-login-button" value={intl.formatMessage({ id: 'login' })}/>
                </form>
            </div>);
    }
}

Login.propTypes = {
    logIn: PropTypes.func.isRequired,
    intl: PropTypes.object.isRequired,
};

export default injectIntl(Login);
