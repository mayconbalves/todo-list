import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './scripts/containers/App'
import Todo from './scripts/containers/Todo'

const Root = () => (
  <Router>
    <div>
      <Route exact path='/' component={App} />
      <Route path='/todo-list' component={Todo} />
    </div>
  </Router>
)

export default Root
