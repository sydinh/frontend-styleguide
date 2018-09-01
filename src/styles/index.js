import styledNormalize from 'styled-normalize'
import { injectGlobal } from 'styled-components'

injectGlobal`
  ${ styledNormalize }

  *,
  *:before,
  *:after {
    -webkit-box-sizing: inherit;
    -moz-box-sizing: inherit;
    box-sizing: inherit;
  }

  html {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
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
    margin-top: 50px;
  }

  body {
    font: 300 1.2em/1.6 roboto, sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  nav {
    background: #294860;
    padding: 0 1.5em;
    position: fixed;
    z-index: 1030;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  nav a {
    display: inline-block;
    color: #fff;
    padding: 0.5em;
    text-decoration: none;
    font-weight: bold;
  }

  nav a:hover {
    background: #407096;
  }

  nav a.active {
    color: #294860;
    background: #fff;
  }

  nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  nav li {
    display: inline-block;
  }
`
