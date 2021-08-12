import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import Dashboard from './pages/Dashboard'
import Todo from './pages/Todo'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/todo-list' component={Todo} />
        <Redirect to='/' />
      </Switch>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object
}

export default Root
