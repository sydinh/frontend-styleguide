import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';

injectGlobal`
  ${styledNormalize}

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }

  body {
    font: 300 1.2em/1.6 roboto, sans-serif;
  }

  :target:before {
    content: '';
    display: block;
    margin-top: -80px;
    height: 80px;
    width: 1px;
  }
`;
