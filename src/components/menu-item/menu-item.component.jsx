import React from 'react';
import './menu-item.style.scss';

export const MenuItem = ({title, imageUrl, size}) => {
    return (
      <div className={`menu-item ${size}`}>
        <div className='backgroundImage' style={{ backgroundImage: `URL(${imageUrl})`, }} ></div>
        <div className='content'>
          <h1 className='title'>{title}</h1>
          <span className='subtitle'>Shop now</span>
        </div>
      </div>
    )
}