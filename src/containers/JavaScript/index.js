import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import withPrism from '../../utils/withPrism';
import { doSubStrAndUpperCase } from '../../helpers';

class JavaScript extends Component {
  render() {
    const styleGuide = 'Styleguide';
    const { path } = this.props.match;
    const sillyPath = doSubStrAndUpperCase(path);

    return (
      <section>
        <Helmet>
          <title>{styleGuide} - {sillyPath}</title>
          <meta name="description" content={ `${ styleGuide } - ${ sillyPath }` } />
          <meta name="theme-color" content="#000000" />
        </Helmet>
        <h2>{sillyPath}</h2>
        <pre>
          <code className="language-JavaScript">
            {`
              const greeting = 'Styleguide - JavaScript';
              console.log(greeting);
            `}
          </code>
        </pre>
      </section>
    );
  }
}

JavaScript.propTypes = {
  match: PropTypes.object,
  path: PropTypes.string,
}

export default withPrism(JavaScript);
