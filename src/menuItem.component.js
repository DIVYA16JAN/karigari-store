import React from 'react';

export const MenuItem = (props) => {
    return (
    <div className="menu-item">
        <h1 className="title">{props.item.title}</h1>
        <h2 className="sub-title">Shop Now</h2>
    </div>);
};