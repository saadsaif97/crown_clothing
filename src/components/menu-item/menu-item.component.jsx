import React from 'react'
import './menu-item.style.scss'
import { withRouter } from 'react-router-dom'

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
  return (
    <div
      className={`menu-item ${size}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className='backgroundImage'
        style={{ backgroundImage: `URL(${imageUrl})` }}
      ></div>
      <div className='content'>
        <h1 className='title'>{title}</h1>
        <span className='subtitle'>Shop now</span>
      </div>
    </div>
  )
}

export default withRouter(MenuItem)
