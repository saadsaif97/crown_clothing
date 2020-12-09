import React from 'react'
import { withRouter } from 'react-router-dom'

const Women = ({ history }) => {
  return (
    <div>
      <h1>Women</h1>
      <button onClick={() => history.push('/')}>Back</button>
    </div>
  )
}

export default withRouter(Women)
