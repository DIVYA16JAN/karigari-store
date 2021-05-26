import React from "react";
import SignIn from "../../organisms/signIn/signIn.component";
import SignUp from "../../organisms/signUp/signUp.component";

const LoginPage = () => (
  <div className="login-page">
    <SignIn />
    <SignUp />
  </div>
);

export default LoginPage;
