import React, { Component } from "react";
import { MenuList } from "./menuList.component";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      menuList: [
        {
          title: "Pots & Planters",
          key: "1",
        },
        {
          title: "Wall Hangings",
          key: "2",
        },
        {
          title: "Crockeries",
          key: "3",
        },
        {
          title: "Figurines",
          key: "4",
        },
        {
          title: "Gift Boxs",
          key: "5",
        },
      ],
    };
  }

  render() {
    return (
      <div className="homePage-container">
        <MenuList menuList={this.state.menuList} />)
      </div>
    );
  }
}

export default HomePage;
