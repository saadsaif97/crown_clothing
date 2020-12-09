import React from 'react'
import { withRouter } from 'react-router-dom'

const Hats = ({ history }) => {
  return (
    <div>
      <h1>HATS</h1>
      <button onClick={() => history.push('/')}>Back</button>
    </div>
  )
}

export default withRouter(Hats)
