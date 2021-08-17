import React from 'react'
import ReactDOM from 'react-dom'

import Root from './Root'
import registerServiceWorker from './core/registerServiceWorker'
import store from './store/store.dev'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(<Root store={store} />, document.getElementById('root'))
registerServiceWorker()
