import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
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
        <ButtonSwitchTheme onClick={ buttonOnClick }>{ isNight ? 'Day Mode' : 'Night Mode' }</ButtonSwitchTheme>
      </li>
    </ul>
  </nav>
);

Nav.defaultProps  = {
  isNight: 'Dark'
};

export default Nav;

const ButtonSwitchTheme = styled.button`
  color: #fff;
  cursor: pointer;

  border: 1px solid #55637e;
  border-radius: .5rem;
  font-size: .875rem;
  height: 2.25rem;
  min-width: 100px;
  background-color: transparent;

  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  padding: .375rem .75rem;
  line-height: 1.5;

  &:focus {
    outline: 0;
  }
}
`
