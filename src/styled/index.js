import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  color: ${props => props.theme.colorPrimary};
  text-decoration: none;
`;

export const PageContainer = styled.main`
  width: 100%;
  max-width: 30em;
  height: 100%;
  background-color: #052136;
  margin: 0 auto;
  position: absolute;

  @media (min-width: 30em) {
    height: 80%;
  }
`;
