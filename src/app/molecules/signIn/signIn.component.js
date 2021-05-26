import React, { Component } from "react";
import FormInput from "./../form-input/form-input.component";
import CustomButton from "./../../atoms/custom-button/custom-button.component";
import { signInWithGoogle } from "./../../utils/firebase/firebase.utils";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  OnSubmitHandler = (event) => {
    event.preventDefault();
    this.setState({
      email: "",
      password: "",
    });
  };

  ChangeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="signIn">
        <h1 className="title">I already have an account</h1>
        <span className="sub-title">Signin with your email and password</span>
        <form onSubmit={this.OnSubmitHandler}>
          <FormInput
            name="email"
            type="email"
            label="Email"
            value={this.state.email}
            ChangeHandler={this.ChangeHandler}
            reguired
          />
          <FormInput
            name="password"
            type="password"
            label="Password"
            value={this.state.password}
            ChangeHandler={this.ChangeHandler}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
