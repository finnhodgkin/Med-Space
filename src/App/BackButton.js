import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import backIcon from './assets/backIcon.svg';

const BackButtonStyled = styled.img`
  position: fixed;
  top: 2%;
  left: 2%;
  width: 1rem;
  height: 1rem;
  cursor: pointer;
  z-index: 9999;
  opacity: 0.6;
  @media (min-width: 30em) {
    position: absolute;
  }
`;

function BackButton(props) {
  const goBack = () => {
    props.history.goBack();
  };
  return (
    <div>
      {props.location.pathname !== '/' &&
        <BackButtonStyled src={backIcon} onClick={goBack} />}
    </div>
  );
}

export default withRouter(BackButton);
