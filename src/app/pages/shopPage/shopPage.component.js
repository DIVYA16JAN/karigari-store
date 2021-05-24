import React, { Component } from "react";
import ReactDom from "react-dom";
import SHOP_DATA from './shopData.data';

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    return(<div>Shop page</div>);
  }
}

export default ShopPage;
