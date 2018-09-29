import React from 'react';
import ReactDOM from 'react-dom';

import { library }  from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import './assets/styles';
import './assets/styles/prism.css';

import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

library.add(far, fas);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
