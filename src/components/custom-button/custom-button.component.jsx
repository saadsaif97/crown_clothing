import React from 'react'

import './custom-button.styles.scss'

const CustomButton = ({ children, isGoogleSignin, ...otherProps }) => {
  return (
    <button
      className={`${isGoogleSignin ? 'isGoogleSignin' : ''} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default CustomButton
