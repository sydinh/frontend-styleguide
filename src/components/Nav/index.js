import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../constants';

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link to={ routes.HTML }>HTML</Link>
      </li>
      <li>
        <Link to={ routes.CSS }>CSS</Link>
      </li>
      <li>
        <Link to={ routes.JAVASCRIPT }>JAVASCRIPT</Link>
      </li>
      <li>
        <Link to={ routes.GIT }>GIT</Link>
      </li>
    </ul>
    <ul>
      <li className="source">
        <a href="https://github.com/sydinh/frontend-styleguide" target="_blank" rel="noopener noreferrer">#source</a>
      </li>
    </ul>
  </nav>
);

export default Nav;
