import React, { Component } from "react";
import MenuList from '../../oraganisms/menuList/menuList.component';

class HomePage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="homePage-container container">
        <MenuList/>
      </div>
    );
  }
}

export default HomePage;
