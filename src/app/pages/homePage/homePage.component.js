import React, { Component } from "react";
import MenuList from "../../oraganisms/menuList/menuList.component";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="homePage">
        <MenuList />
      </div>
    );
  }
}

export default HomePage;
