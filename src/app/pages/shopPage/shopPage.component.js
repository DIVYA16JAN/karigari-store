import React, { Component } from "react";
import SHOP_DATA from "./shopData.data";
import Collections from "./../../organisms/collections/collections.component";

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.map
        (({ id, ...collectionProps }) => (         
          <Collections key={id} {...collectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
