import styled from 'styled-components';

const H3 = styled.h3`
  font-size: 24px;
  font-weight: 700;

  svg {
    display: inline-block;
    margin-right: 10px;
    font-size: 18px;
    color: ${props => props.theme.color};
  }
`;

export default H3;
