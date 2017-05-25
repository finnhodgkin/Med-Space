import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import stars from './assets/stars.svg';

const AppWrapperStyled = styled.div`
  background-color: #052136;
  color: ${props => props.theme.colorPrimary};
  height: 100%;
  display: flex;
  align-items: center;
  background-image: url(${stars});
  background-size: contain;
  transition: .8s all ease;
  background-position: ${props => {
                         if (props.location === '/') {
                           return '0 0';
                         } else if (props.location === '/conditions') {
                           return '0 -200px';
                         } else if (props.location.includes('/medications')) {
                           return '0 -400px';
                         } else if (props.location.includes('/medication')) {
                           return '0 -200px';
                         } else {
                           return '0 0';
                         }
                       }};
`;

function AppWrapper(props) {
  return (
    <AppWrapperStyled location={props.location.pathname}>
      {props.children}
    </AppWrapperStyled>
  );
}

export default withRouter(AppWrapper);
