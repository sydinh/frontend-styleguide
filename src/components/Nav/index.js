import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { HTML, CSS, JAVASCRIPT, GIT } from "../../constants/routes";
import github from "../../assets/images/github.svg";

const Nav = ({ buttonOnClick, isNight }) => (
  <NavContainer>
    <ul>
      <li>
        <NavLink exact to={HTML}>
          HTML
        </NavLink>
      </li>
      <li>
        <NavLink exact to={CSS}>
          CSS
        </NavLink>
      </li>
      <li>
        <NavLink exact to={JAVASCRIPT}>
          JAVASCRIPT
        </NavLink>
      </li>
      <li>
        <NavLink exact to={GIT}>
          GIT
        </NavLink>
      </li>
    </ul>
    <ul>
      <GroupButton>
        <ButtonSwitchTheme onClick={buttonOnClick}>
          {isNight ? "Day Mode" : "Night Mode"}
        </ButtonSwitchTheme>
        <ButtonSource
          href="https://github.com/sydinh/frontend-styleguide"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon src={github} alt="" />
        </ButtonSource>
      </GroupButton>
    </ul>
  </NavContainer>
);

Nav.defaultProps = {
  isNight: "Dark"
};

Nav.propTypes = {
  buttonOnClick: PropTypes.any,
  isNight: PropTypes.bool
};

export default Nav;

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-right: 0.5rem;
  padding-left: 0.5rem;

  position: fixed;
  z-index: 1071;
  top: 0;
  right: 0;
  left: 0;

  background: #20232a;
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
    transition: all 0.3s;
  }

  a.active,
  a:hover {
    color: #20232a;
    background: #fff;
  }
`;

const GroupButton = styled.li`
  display: flex !important;
  align-items: center !important;
  height: 36px;
  border: 1px solid #55637e;
  border-radius: 0.5rem;

  * {
    display: flex !important;
    align-items: center !important;
  }
`;

const ButtonSwitchTheme = styled.button`
  color: #fff;
  cursor: pointer;
  border: none;
  font-size: 0.875rem;
  height: 2.25rem;
  min-width: 100px;
  background-color: transparent;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  user-select: none;
  padding: 0.375rem 0.75rem;
  line-height: 1;

  &:focus {
    outline: 0;
  }
`;

const ButtonSource = styled.a`
  width: 50px;
  height: 100%;
  border-left: 1px solid #55637e;

  &:hover {
    background: transparent !important;
  }
`;

const GithubIcon = styled.img`
  width: 100%;
  height: 125%;
`;
