import React, { Component } from 'react';
import styled from 'styled-components';
import { StyledLink } from './../../styled';
import { PageContainer } from './../../styled';
import astronaut from './assets/astronaut.png';

const WelcomeContainer = styled(PageContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
  margin: 1em;
`;

const Start = styled(StyledLink)`
  margin: 1em;
  background-color: white;
  padding: .5rem;
  max-width: 5rem;
  box-sizing: border-box;
`;

const Avatar = styled.img`
  width: 7em;
  height: 7em;
  object-fit: cover;
`;

class Welcome extends Component {
  render() {
    return (
      <WelcomeContainer>
        <Logo>
          Med Space
        </Logo>
        <Avatar src={astronaut} />
        <WelcomeMessage>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </WelcomeMessage>
        <Start to="/conditions">
          Start
        </Start>
      </WelcomeContainer>
    );
  }
}

export default Welcome;
