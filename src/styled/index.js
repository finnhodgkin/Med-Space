import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  color: ${props => props.theme.colorPrimary};
  text-decoration: none;
`;

export const PageContainer = styled.main`
  width: 100%;
  height: 100%;
  position: absolute;
`;
