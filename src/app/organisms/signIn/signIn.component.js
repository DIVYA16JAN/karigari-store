import React, { Component } from "react";
import FormInput from "./../../molecules/form-input/form-input.component";
import CustomButton from "./../../atoms/custom-button/custom-button.component";
import { auth, signInWithGoogle } from "./../../utils/firebase/firebase.utils";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  OnSubmitHandler = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
    
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
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
            value={this.state.email}
            ChangeHandler={this.ChangeHandler}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            ChangeHandler={this.ChangeHandler}
            label="Password"
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
