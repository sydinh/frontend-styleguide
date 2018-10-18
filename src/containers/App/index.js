import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled, { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { connect } from 'react-redux';

import { HTML, CSS, JAVASCRIPT, GIT } from '../../constants/routes';
import { dayTheme, nightTheme } from '../../constants/themes';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import ScrollToTop from '../../utils/ScrollToTop';
import ErrorBoundary from '../../utils/ErrorBoundary';

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
            <Nav buttonOnClick={ this.handleButtonOnClick } isNight={ this.state.isNight } />
            <MainContainer role='main'>
              <ErrorBoundary>
                <Switch>
                  <Route exact path={ HTML } component={ AsyncHTML } />
                  <Route path={ CSS } component={ AsyncCSS } />
                  <Route path={ JAVASCRIPT } component={ AsyncJavaScript } />
                  <Route path={ GIT } component={ AsyncGit } />
                  <Route component={ NotFound } />
                </Switch>
              </ErrorBoundary>
            </MainContainer>
            <Footer />
          </ScrollToTop>
        </Router>
      </StyledThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    literals: state.literals,
  };
}

export default connect(mapStateToProps, null)(App);

const MainContainer = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: 50px 20px 20px;
  background: ${ props => props.theme.background };
  color: ${ props => props.theme.color };
  transition: all .3s;
`;
