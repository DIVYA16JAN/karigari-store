import React from 'react';
import {MenuItem} from './menuItem.component';

export const MenuList = (props) => {
    return (
    <div className="menuList-container">
    {props.menuList.map((item)=>(
        <MenuItem item={item} key={item.key}/>
    ))}
    </div>);
};
