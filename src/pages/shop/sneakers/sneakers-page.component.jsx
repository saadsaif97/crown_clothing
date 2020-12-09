import React from 'react'
import { withRouter } from 'react-router-dom'

const Sneakers = ({ history }) => {
  return (
    <div>
      <h1>Sneakers</h1>
      <button onClick={() => history.push('/')}>Back</button>
    </div>
  )
}

export default withRouter(Sneakers)
