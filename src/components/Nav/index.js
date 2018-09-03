import React from 'react';
import { NavLink } from 'react-router-dom';
import { HTML, CSS, JAVASCRIPT, GIT } from '../../constants/routes';

const Nav = ({ buttonOnClick, isNight }) => (
  <nav>
    <ul>
      <li>
        <NavLink exact to={ HTML }>HTML</NavLink >
      </li>
      <li>
        <NavLink exact to={ CSS }>CSS</NavLink >
      </li>
      <li>
        <NavLink exact to={ JAVASCRIPT }>JAVASCRIPT</NavLink >
      </li>
      <li>
        <NavLink exact to={ GIT }>GIT</NavLink >
      </li>
    </ul>
    <ul>
      <li>
        <button onClick={ buttonOnClick }>{ isNight ? 'Light' : 'Dark' }</button>
      </li>
    </ul>
  </nav>
);

Nav.defaultProps  = {
  isNight: 'Dark'
};

export default Nav;

