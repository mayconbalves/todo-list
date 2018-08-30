import React from 'react';
import ReactDOM from 'react-dom';
import App from './scripts/containers/App';
import registerServiceWorker from './scripts/core/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
