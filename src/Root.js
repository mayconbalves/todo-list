import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Dashboard from './scripts/containers/Dashboard'
import Todo from './scripts/containers/Todo'

const Root = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Dashboard} />
      <Route path='/todo-list' component={Todo} />
      <Redirect to='/' />
    </Switch>
  </Router>
)

export default Root
