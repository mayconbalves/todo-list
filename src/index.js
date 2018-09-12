import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import Root from './Root'
import reducers from './scripts/reducers/index'
import registerServiceWorker from './scripts/core/registerServiceWorker'
import './styles/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers, devTools)

ReactDOM.render(<Root store={store} />, document.getElementById('root'))
registerServiceWorker()
