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
    min-height: calc(100vh - 50px);
    margin-top: 50px;
  }

  .switch-wrapper > div {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 20px;
  }

  body {
    font: 300 1.2em/1.6 roboto, sans-serif;
  }
`
