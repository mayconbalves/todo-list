import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './scripts/containers/App'

const Root = () => (
  <Router>
    <div>
      <Route exact path='/' component={App} />
    </div>
  </Router>
)

export default Root
