import React from 'react';
import { Route , Switch} from 'react-router-dom';
import HomePage from './pages/homePage/homePage.component';
import ShopPage from './pages/shopPage/shopPage.component';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop" component={ShopPage} />
    </Switch>
  );
}

export default App;
