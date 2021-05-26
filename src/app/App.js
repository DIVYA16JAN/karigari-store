import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homePage/homePage.component";
import ShopPage from "./pages/shopPage/shopPage.component";
import LoginPage from "./pages/loginPage/loginPage.component";
import Header from "./molecules/header/header.component";
import {
  auth,
  createUserProfileDocument,
} from "./utils/firebase/firebase.utils";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
          console.log(this.state.currentUser);
        });
      }
      this.setState({ currentUser: userAuth });

    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="app-container">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          ß
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/login" component={LoginPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
