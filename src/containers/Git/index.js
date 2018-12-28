import React, { Component } from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import withPrism from "../../utils/withPrism";
import { doSubStrAndUpperCase } from "../../helpers";
import H1 from "../../components/H1";

class Git extends Component {
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
          <code className="language-bash">
            {`
              $ echo Hello world
            `}
          </code>
        </pre>
      </section>
    );
  }
}

Git.propTypes = {
  match: PropTypes.object,
  path: PropTypes.string
};

export default withPrism(Git);
