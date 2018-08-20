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
    color: #303030;
    text-rendering: optimizeLegibility;
    margin: 0 1.5em;
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
    background: #FFF;
  }

  nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  nav li {
    display: inline-block;
  }

  h1,
  h2,
  h3,
  h4 {
    color: #294860;
    font-family: "Roboto Condensed", serif;
    font-weight: 700;
    margin: 1em 0 0 0;
  }

  h2 {
    color: #307699;
  }

  h3 {
    color: #303030;
  }

  h4 {
    font-weight: 400;
  }

  p {
    margin: 0 0 1em 0;
  }

  code {
    color: #333;
    background-color: #f5f5f5;
    border: 1px solid #dcdcdc;
    padding: 0 0.25em;
    font-family: Inconsolata, monospace;
  }

  pre code {
    display: block;
    padding: 0.5em;
    margin: 0 0 1em;
  }

  .recommended {
    color: #438344;
  }

  .not-recommended {
    color: #cd0e3e;
  }

  a > i {
    color: #307699;
  }

  a > i:hover {
    color: black;
  }
`
