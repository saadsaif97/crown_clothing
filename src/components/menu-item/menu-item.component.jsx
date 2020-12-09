import React from 'react'
import './menu-item.style.scss'
import { Link } from 'react-router-dom'

export const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  return (
    <div className={`menu-item ${size}`}>
      <div
        className='backgroundImage'
        style={{ backgroundImage: `URL(${imageUrl})` }}
      ></div>
      <div className='content'>
        <Link to={`${linkUrl}`}>
          <h1 className='title'>{title}</h1>
        </Link>
        <span className='subtitle'>Shop now</span>
      </div>
    </div>
  )
}
