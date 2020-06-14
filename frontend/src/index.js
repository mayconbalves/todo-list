import React from 'react'
import ReactDOM from 'react-dom'

import Root from './Root'
import registerServiceWorker from './scripts/core/registerServiceWorker'
import store from './scripts/store/store.dev'
import './styles/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(<Root store={store} />, document.getElementById('root'))
registerServiceWorker()
