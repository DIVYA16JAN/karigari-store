import React, {Component} from "react";
import MenuItem from "../../molecules/menuItem/menuItem.component";
import potsPlanterImage from '../../../assets/images/pots_planters.jpg';
import wallHangingImage from '../../../assets/images/wall_hangings.jpg';
import tablewareImage from '../../../assets/images/tableware.jpg';
import decorImage from '../../../assets/images/decor.jpg';
import accessoryImage from '../../../assets/images/accessory.jpg';


class MenuList extends Component {
  constructor() {
    super();
    this.state = {
      menuList: [
        {
          title: "Pots & Planters",
          key: "1",
          imageUrl: potsPlanterImage,
          linkUrl: 'potsPlanters'
        },
        {
          title: "Wall Hangings",
          key: "2",
          imageUrl: wallHangingImage,
          linkUrl: 'wallHangings'
        },
        {
          title: "Tableware",
          key: "3",
          imageUrl: tablewareImage,
          linkUrl: 'tableware'
        },
        {
          title: "decor",
          key: "4",
          imageUrl: decorImage,
          linkUrl: 'decor'
        },
        {
          title: "Accessories",
          key: "5",
          imageUrl: accessoryImage,
          linkUrl: 'accessories'
        },
      ],
    };
  }

  render() {
    return (
      <div className="menuList-container">
        {this.state.menuList.map(({key, ...otherProps}) => (
          <MenuItem key={key} {...otherProps}/>
        ))}
      </div>
    );
  }
}

export default MenuList;