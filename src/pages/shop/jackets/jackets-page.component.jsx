import React from 'react'
import { withRouter } from 'react-router-dom'

const Jackets = ({ history }) => {
  return (
    <div>
      <h1>Jackets</h1>
      <button onClick={() => history.push('/')}>Back</button>
    </div>
  )
}

export default withRouter(Jackets)
