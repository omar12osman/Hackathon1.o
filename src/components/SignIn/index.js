import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import "./index.css";
import { SignUpLink, SignUpForm } from "../SignUp";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";
import { NavLink } from "react-router-dom";
import "react-mdl/extra/material.js";
const SignInPage = () => (
  <div>
    <SignInForm />
    <SignUpLink />
  </div>
);

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <form onSubmit={this.onSubmit}>
        <div className="Signin">
          <div className="App__Aside">
            <div className="App__Form">
              <div className="PageSwitcher">
                <NavLink
                  to="SignIn"
                  activeClassName="PageSwitcher__Item--Active"
                  className="PageSwitcher__Item"
                >
                  Sign In
                </NavLink>
                <NavLink
                  exact
                  to="SignUp"
                  activeClassName="PageSwitcher__Item--Active"
                  className="PageSwitcher__Item"
                >
                  Sign Up
                </NavLink>
              </div>
              <input
                className="input"
                name="email"
                value={email}
                onChange={this.onChange}
                type="text"
                placeholder="Email Address"
              />

              <input
                className="input"
                name="password"
                value={password}
                onChange={this.onChange}
                type="password"
                placeholder="Password"
              />
              <div className="button.container">
                <button className="button" disabled={isInvalid} type="submit">
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase
)(SignInFormBase);

export default SignInPage;

export { SignInForm };
