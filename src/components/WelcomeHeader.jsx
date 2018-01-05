import React, { Component } from 'react'
import { Jumbotron } from 'reactstrap';

export default class WelcomeHeader extends Component {
    render() {
        const auth = this.props.auth || {};
        let content;
        if (auth.loginSuccess || auth.signupSuccess) {
            content = (
                <Jumbotron>
                    <h1>Success</h1>
                    <p className="lead">
                        { auth.loginSuccess ? 'Logged in' : 'Thanks for signing up' } as { auth.data.name || auth.data.username }
                    </p>
                </Jumbotron>
            );
        } else {
            content = (
                <Jumbotron>
                    <h1>Login</h1>
                    <p className="lead">Please enter your username and password.</p>
                </Jumbotron>
            );
        }
        return content;
    }
}
