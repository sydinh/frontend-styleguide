import styledNormalize from 'styled-normalize'
import { injectGlobal } from 'styled-components'

injectGlobal`
  ${ styledNormalize }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }

  // router transition
  .switch-wrapper {
    position: relative;
  }

  .switch-wrapper > div {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }

  body {
    font: 300 1.2em/1.6 roboto, sans-serif;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 1071;
    padding-right: .5rem;
    padding-left: .5rem;
    background-color: #563d7c;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, .05), inset 0 -1px 0 rgba(0, 0, 0, .1);
  }

  nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  nav li {
    display: inline-block;
  }

  nav a {
    display: inline-block;
    color: #fff;
    padding: 0.5em;
    margin: 0 1px;
    text-decoration: none;
    font-weight: 600;
    transition: all .3s;
  }

  nav a.active,
  nav a:hover {
    color: #563d7c;
    background: #fff;
  }
`
