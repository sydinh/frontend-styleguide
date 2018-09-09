import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled, { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { HTML, CSS, JAVASCRIPT, GIT } from '../../constants/routes';
import { dayTheme, nightTheme } from '../../constants/themes';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import ScrollToTop from '../../utils/ScrollToTop';
import ErrorBoundary from '../../utils/ErrorBoundary';
import AnimatedSwitch from '../../utils/AnimatedSwitch';

import AsyncHTML from '../HTML/Loadable';
import AsyncCSS from '../CSS/Loadable';
import AsyncJavaScript from '../JavaScript/Loadable';
import AsyncGit from '../Git/Loadable';
import NotFound from '../NotFound/Loadable';

// eslint-disable-next-line no-undef
const isNight = localStorage.getItem('isNight') === 'true' ? true : false;

class App extends Component {
  state = {
    isNight,
    theme: {},
  }

  componentDidMount() {
    this.setState({
      theme: this.state.isNight ? nightTheme : dayTheme
    })
  }

  handleButtonOnClick = () => {
    this.setState((prevState) => {
      return {
        isNight: !prevState.isNight,
        theme: !prevState.isNight ? nightTheme : dayTheme
      };
    }, () => {
      // eslint-disable-next-line no-undef
      localStorage.setItem('isNight', this.state.isNight)
    });
  }

  render() {
    return (
      <StyledThemeProvider theme={ this.state.theme }>
        <Router>
          <ScrollToTop>
            <MainContainer role='main'>
              <Nav buttonOnClick={ this.handleButtonOnClick } isNight={ this.state.isNight } />
              <ErrorBoundary>
                <AnimatedSwitch>
                  <Route exact path={ HTML } component={ AsyncHTML } />
                  <Route path={ CSS } component={ AsyncCSS } />
                  <Route path={ JAVASCRIPT } component={ AsyncJavaScript } />
                  <Route path={ GIT } component={ AsyncGit } />
                  <Route component={ NotFound } />
                </AnimatedSwitch>
              </ErrorBoundary>
              <Footer />
            </MainContainer>
          </ScrollToTop>
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
