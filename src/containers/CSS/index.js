import React, { Component } from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import withPrism from "../../utils/withPrism";
import { doSubStrAndUpperCase } from "../../helpers";
import H1 from "../../components/H1";

class CSS extends Component {
  render() {
    const styleGuide = "Styleguide";
    const { path } = this.props.match;
    const sillyPath = doSubStrAndUpperCase(path);

    return (
      <section>
        <Helmet>
          <title>
            {styleGuide} - {sillyPath}
          </title>
          <meta name="description" content={`${styleGuide} - ${sillyPath}`} />
          <meta name="theme-color" content="#000000" />
        </Helmet>
        <H1>{sillyPath}</H1>
        <pre>
          <code className="language-css">
            {`
              h1[class="h1"] {
                &:before {
                  content: 'Styleguide - CSS';
                }
              }
            `}
          </code>
        </pre>
      </section>
    );
  }
}

CSS.propTypes = {
  match: PropTypes.object,
  path: PropTypes.string
};

export default withPrism(CSS);
