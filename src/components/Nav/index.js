import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { HTML, CSS, JAVASCRIPT, GIT } from '../../constants/routes';

const Nav = ({ buttonOnClick, isNight }) => (
  <NavContainer>
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
  </NavContainer>
);

Nav.defaultProps  = {
  isNight: 'Dark'
};

Nav.propTypes = {
  buttonOnClick: PropTypes.any,
  isNight: PropTypes.bool,
}

export default Nav;

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-right: .5rem;
  padding-left: .5rem;

  position: fixed;
  z-index: 1071;
  top: 0;
  right: 0;
  left: 0;

  background-color: #0e141f;
  box-shadow: 0 1rem 5rem -0.5rem #000;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: inline-block;
  }

  a {
    display: inline-block;
    margin: 0 1px;
    padding: 0.5em;

    color: #fff;
    font-weight: 600;
    text-decoration: none;
    transition: all .3s;
  }

  a.active,
  a:hover {
    color: #2c3849;
    background: #fff;
  }
`

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
`
