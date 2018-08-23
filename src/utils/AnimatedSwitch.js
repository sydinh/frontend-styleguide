import React, { Component } from 'react';
import { AnimatedSwitch } from 'react-router-transition';

const animate = {
  atEnter: { opacity: 0 },
  atLeave: { opacity: 0 },
  atActive: { opacity: 1 },
};

class RouterTransition extends Component {
  render() {
    return (
      <AnimatedSwitch { ...animate } className="switch-wrapper">
        {this.props.children}
      </AnimatedSwitch>
    )
  }
}

export default RouterTransition;
