import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import * as routes from '../../constants';
import Nav from '../../components/Nav';
import ErrorBoundary from '../../utils/ErrorBoundary';
import AnimatedSwitch from '../../utils/AnimatedSwitch';

import HTML from '../HTML/Loadable';
import CSS from '../CSS/Loadable';
import JavaScript from '../JavaScript/Loadable';
import Git from '../Git/Loadable';
import NotFound from '../NotFound/Loadable';

const App = () => (
  <Router>
    <Fragment>
      <Nav />
      <ErrorBoundary>
        <AnimatedSwitch>
          <Route exact path={ routes.HTML } component={ HTML } />
          <Route path={ routes.CSS } component={ CSS } />
          <Route path={ routes.JAVASCRIPT } component={ JavaScript } />
          <Route path={ routes.GIT } component={ Git } />
          <Route component={ NotFound } />
        </AnimatedSwitch>
      </ErrorBoundary>
    </Fragment>
  </Router>
);

export default App;
