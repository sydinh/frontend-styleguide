import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled, { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { HTML, CSS, JAVASCRIPT, GIT } from '../../constants/routes';
import { dayTheme, nightTheme } from '../../constants/themes';
import Nav from '../../components/Nav';
import ErrorBoundary from '../../utils/ErrorBoundary';
import AnimatedSwitch from '../../utils/AnimatedSwitch';

import AsyncHTML from '../HTML/Loadable';
import AsyncCSS from '../CSS/Loadable';
import AsyncJavaScript from '../JavaScript/Loadable';
import AsyncGit from '../Git/Loadable';
import NotFound from '../NotFound/Loadable';

class App extends Component {
  state = {
    isDay: (localStorage.getItem('isDay') && localStorage.getItem('isDay') === 'true') ? true : false,
    theme: {},
  }

  componentDidMount() {
    const { isDay } = this.state;
    this.setState({
      theme: isDay ? dayTheme : nightTheme
    })
  }

  handleButtonOnClick = () => {
    const isDay = !this.state.isDay;
    this.setState({
      isDay,
      theme: isDay ? dayTheme : nightTheme
    });
    localStorage.setItem('isDay', isDay)
  }

  render() {
    return (
      <StyledThemeProvider theme={ this.state.theme }>
        <Router>
          <MainContainer role='main'>
            <Nav buttonOnClick={ this.handleButtonOnClick } />
            <ErrorBoundary>
              <AnimatedSwitch>
                <Route exact path={ HTML } component={ AsyncHTML } />
                <Route path={ CSS } component={ AsyncCSS } />
                <Route path={ JAVASCRIPT } component={ AsyncJavaScript } />
                <Route path={ GIT } component={ AsyncGit } />
                <Route component={ NotFound } />
              </AnimatedSwitch>
            </ErrorBoundary>
          </MainContainer>
        </Router>
      </StyledThemeProvider>
    );
  }
}

export default App;

const MainContainer = styled.main`
  width: 100%;
  min-height: 100vh;
  background: ${ props => props.theme.background };
  color: ${ props => props.theme.color };
  transition: all .3s;
`
