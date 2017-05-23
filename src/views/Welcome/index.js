import React, { Component } from 'react';
import styled from 'styled-components';
import { StyledLink } from './../../styled';
import { PageContainer } from './../../styled';

const Logo = styled.h1`
  font-size: 2rem;
  height: 10rem;
  box-sizing: border-box;
`;

const WelcomeMessage = styled.section`
  background-color: rgba(255,255,255,0.2);
  padding: .5rem;
  max-width: 20rem;
  box-sizing: border-box;
`;

const Start = styled(StyledLink)`
  background-color: white;
  padding: .5rem;
  max-width: 5rem;
  box-sizing: border-box;
`;

class Welcome extends Component {
  render() {
    return (
      <PageContainer>
        <Logo>
          Med Space
        </Logo>
        <WelcomeMessage>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </WelcomeMessage>
        <Start to="/conditions">
          Start
        </Start>
      </PageContainer>
    );
  }
}

export default Welcome;
