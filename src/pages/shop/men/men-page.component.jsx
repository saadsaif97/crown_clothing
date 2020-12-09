import React from 'react'
import { withRouter } from 'react-router-dom'

const Men = ({ history }) => {
  return (
    <div>
      <h1>Men</h1>
      <button onClick={() => history.push('/')}>Back</button>
    </div>
  )
}

export default withRouter(Men)
