import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  color: ${props => props.theme.colorPrimary};
  text-decoration: none;
`;
