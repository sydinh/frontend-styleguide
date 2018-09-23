import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import withPrism from '../../utils/withPrism';
import { doSubStrAndUpperCase } from '../../helpers';

class HTML extends Component {
  render() {
  const { path } = this.props.match;
  const sillyPath = doSubStrAndUpperCase(path) || 'HTML';

    return (
      <section>
        <Helmet>
          <title>Styleguide - {sillyPath}</title>
          <meta name="description" content="Styleguide - HTML" />
          <meta name="theme-color" content="#000000" />
        </Helmet>
        <h2>{sillyPath}</h2>
        <pre>
          <code className="language-html">
            {`
              <h1 class="h1">Styleguide - HTML</h1>
            `}
          </code>
        </pre>
      </section>
    )
  }
}

HTML.propTypes = {
  match: PropTypes.object,
  path: PropTypes.string,
}

export default withPrism(HTML);
