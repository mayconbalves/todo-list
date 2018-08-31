import React from 'react'
import ReactDOM from 'react-dom'
import Root from './Root'
import registerServiceWorker from './scripts/core/registerServiceWorker'
import './styles/main.css'

ReactDOM.render(<Root />, document.getElementById('root'))
registerServiceWorker()
