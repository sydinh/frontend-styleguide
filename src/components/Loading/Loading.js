import React from 'react';
import styled from 'styled-components';

const Loading = () => <LoadingContainer>Loading...</LoadingContainer>;

export default Loading;

const LoadingContainer = styled.section`
  width: 100%;
  min-height: calc(100vh - 50px);
  display: flex;
  justify-content: center;
  align-item: center;
`
