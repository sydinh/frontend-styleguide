import React from 'react';
import Prism from 'prismjs';

const withPrism = Component => {
  class hoc extends React.Component {
    componentDidMount() {
      Prism.highlightAll();
    }

    render() {
      return <Component {...this.props} />;
    }
  }

  return hoc;
};

export default withPrism;
