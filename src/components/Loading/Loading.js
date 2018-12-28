import React from "react";
import styled from "styled-components";
import Spinner from "react-spinkit";

const Loading = () => (
  <LoadingContainer>
    <Spinner name="pacman" color="orange" />
  </LoadingContainer>
);

export default Loading;

const LoadingContainer = styled.section`
  width: 100%;
  min-height: calc(100vh - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
