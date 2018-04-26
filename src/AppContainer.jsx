import React, { Component } from 'react';
import { Container, Row, Col, Alert } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LoginForm , WelcomeHeader } from './components';
import * as actions from './actions';
import './AppContainer.css';

class AppContainer extends Component {

  render() {
    const { form, auth } = this.props,
          hideLogin =  auth.signupSuccess || auth.loginSuccess;
    let someVar = 'hello world';
    return (
      <div className="App">
        <Container fluid>
          <Row>
            <Col lg={{ size: 4, offset: 4 }} sm={{ size: 6, offset: 3 }}>
              <WelcomeHeader auth={ auth }/>
            </Col>
            { !hideLogin && <Col lg={{ size: 4, offset: 4 }} sm={{ size: 6, offset: 3 }}>
              { (auth.signupFailed || auth.loginFailed) && <Alert color='danger'>There was an issue with logging in.</Alert> }
              <LoginForm 
                onFieldChange={ this.props.changeField }
                form={ form } 
                onSignup={ this.props.signup }
                onLogin={ this.props.login } />
            </Col> }
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    form: state.formReducer,
    auth: state.authReducer
  };
};

// Bind all actions to props for brevity's sake
export default connect(mapStateToProps, dispatch => { return bindActionCreators(actions, dispatch); })(AppContainer);