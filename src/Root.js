import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Dashboard from './scripts/containers/Dashboard'
import Todo from './scripts/containers/Todo'

const Root = () => (
  <Router>
    <div>
      <Route exact path='/' component={Dashboard} />
      <Route path='/todo-list' component={Todo} />
      <Redirect from='*' to='/' />
    </div>
  </Router>
)

export default Root
