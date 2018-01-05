import React, { Component } from 'react';
import { Input, FormGroup, Form, Label, FormText, Button } from 'reactstrap';
import PropTypes from 'prop-types';

export default class LoginForm extends Component {
    constructor() {
        super();
        this.handleSignup = this.handleSignup.bind(this);
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleFieldChange(e) {
        this.props.onFieldChange(e.target.value, e.target.id);
    }

    handleSignup(e) {
        e.preventDefault();
        this.props.onSignup(this.props.form);
    }

    handleLogin(e) {
        e.preventDefault();
        this.props.onLogin(this.props.form);
    }

    render() {
        const form = this.props.form,
              isSubmitDisabled = !form.isUsernameValid || !form.isPasswordValid;
        return (
            <Form>
                <FormGroup>
                    <Label for='username'>Username</Label>
                    <Input onChange={ this.handleFieldChange } id='username' type='text' />
                    { form.usernameTouched && !form.isUsernameValid && 
                        <FormText color='danger'>Must be at least 4 alphanumeric characters.</FormText> }
                </FormGroup>
                <FormGroup>
                    <Label for='password'>Password</Label>
                    <Input onChange={ this.handleFieldChange } id='password' type='password' />
                    { form.passwordTouched && !form.isPasswordValid && 
                        <FormText color='danger'>Must be at least 4 characters.</FormText> }
                </FormGroup>
                <Button onClick={ this.handleSignup } disabled={ isSubmitDisabled } color='primary'>Sign Up</Button>
                <Button onClick={ this.handleLogin } color='success' disabled={ isSubmitDisabled }>Log In</Button>
            </Form>
        );
    }
}

LoginForm.propTypes = {
    onFieldChange: PropTypes.func.isRequired,
    onSignup: PropTypes.func.isRequired,
    onLogin: PropTypes.func.isRequired
};
