import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles';
import './assets/styles/prism.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
