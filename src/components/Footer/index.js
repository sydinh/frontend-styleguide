import React from 'react';
import styled from 'styled-components';

const Footer = () =>
  <FooterContainer>
    <p>Made with love by <a href="https://sydinh.com/" target="_blank" rel="noopener noreferrer">@sydinh</a>.</p>
  </FooterContainer>

export default Footer;

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 400;

  color: ${ props => props.theme.color };
  background: ${ props => props.theme.background };
  border-top: 1px solid ${ props => props.theme.color };

  a {
    font-weight: 600;
    color: ${ props => props.theme.color };
  }
`
