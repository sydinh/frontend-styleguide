import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import withPrism from '../../utils/withPrism';
import { doSubStrAndUpperCase } from '../../helpers';

import H1 from '../../components/H1';
import H2 from '../../components/H2';
import H3 from '../../components/H3';
import H4 from '../../components/H4';

class HTML extends Component {
  render() {
    const styleGuide = 'Styleguide';
    const { path } = this.props.match;
    const sillyPath = doSubStrAndUpperCase(path) || 'HTML';

    return (
      <section>
        <Helmet>
          <title>{styleGuide} - {sillyPath}</title>
          <meta name="description" content={ `${ styleGuide } - ${ sillyPath }` } />
          <meta name="theme-color" content="#000000" />
        </Helmet>
        <H1>{sillyPath}</H1>
        <section>
          <H2>Introduction</H2>
          <p>...</p>
        </section>
        <section>
          <H2>General Formatting Rules</H2>
          <H3>
            <a href="#capitalization" id="capitalization">
              <i className="fa fa-link"></i>
            </a>
            Capitalization
          </H3>
          <p>Use only lowercase.</p>
          <p>All code has to be lowercase. This applies to HTML element names, attributes, attribute values (unless text/CDATA).</p>
          <H4 className="not-recommended">Not Recommended:</H4>
          <pre>
            <code className="language-html">
              {`
                <A HREF="/">Home</A>
              `}
            </code>
          </pre>
          <H4 className="recommended">Not Recommended:</H4>
          <pre>
            <code className="language-html">
              {`
                <a href="/">Home</a>
              `}
            </code>
          </pre>
        </section>
      </section>
    )
  }
}

HTML.propTypes = {
  match: PropTypes.object,
  path: PropTypes.string,
}

export default withPrism(HTML);
