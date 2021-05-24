import React from "react";
import { withRouter } from 'react-router-dom';

const MenuItem = ({title, imageUrl, linkUrl, history, match}) => {
  console.log(match);
  return (
    <div
      className="menu-item col-sm-3"
      onClick={()=>history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <h4 className="sub-title">Shop Now</h4>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
