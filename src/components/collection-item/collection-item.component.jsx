import React from 'react'
import './collection-item.styles.scss'

const CollectionItem = (props) => {
  const { imageUrl, name, price } = props.item
  return (
    <div className='collection-item'>
      <div className='image' style={{ backgroundImage: `URL(${imageUrl})` }} />
      <div className='collection-footer'>
        <div className='name'>{name}</div>
        <div className='price'>{price}</div>
      </div>
    </div>
  )
}

export default CollectionItem
