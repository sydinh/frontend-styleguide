import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './assets/styles';
import './assets/styles/prism.css';

import store from './store';
import App from './containers/App';

import { registerFontawesome, registerLanguage } from './init';
import registerServiceWorker from './registerServiceWorker';

const appRoot = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  appRoot
);

registerFontawesome();
registerLanguage();
registerServiceWorker();
