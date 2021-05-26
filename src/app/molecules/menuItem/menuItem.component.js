import React from "react";
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, imageUrl, linkUrl, size, history, match }) => {
  console.log(match);
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <h4 className="subtitle">SHOP NOW</h4>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
