import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import stars from './assets/stars.svg';

const AppWrapperStyled = styled.div`
  position: relative;
  overflow: scroll;
  height: 100%;

  background-color: #052136;
  color: ${props => props.theme.colorPrimary};
  ${/* height: 100%; */ ''}
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

   @media (min-width: 30em) {
     margin-left: auto;
     margin-right: auto;
     height: 44.5em;
     max-width: 25em;
   }
`;

function AppWrapper(props) {
  return (
    <AppWrapperStyled location={props.location.pathname}>
      {props.children}
    </AppWrapperStyled>
  );
}

export default withRouter(AppWrapper);
