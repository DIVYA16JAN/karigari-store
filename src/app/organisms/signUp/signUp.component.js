import React, { Component } from "react";
import FormInput from "./../../molecules/form-input/form-input.component";
import CustomButton from "./../../atoms/custom-button/custom-button.component";

import {
  auth,
  createUserProfileDocument,
} from "../../utils/firebase/firebase.utils";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  OnSubmitHandler = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  ChangeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className="signUp">
        <h1 className="title">I don't have an account</h1>
        <span className="sub-title">Signup with your email and password</span>
        <form onSubmit={this.OnSubmitHandler}>
          <FormInput
            name="displayName"
            type="text"
            value={displayName}
            ChangeHandler={this.ChangeHandler}
            label="Name"
            required
          />
          <FormInput
            name="email"
            type="email"
            value={email}
            ChangeHandler={this.ChangeHandler}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            ChangeHandler={this.ChangeHandler}
            label="Password"
            required
          />
          <FormInput
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            ChangeHandler={this.ChangeHandler}
            label="confirmPassword"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign Up</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
