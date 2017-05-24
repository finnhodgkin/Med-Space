import React, { Component } from 'react';
import styled from 'styled-components';
import { StyledLink } from './../../styled';
import { PageContainer } from './../../styled';
import logo from './assets/space-meds.svg';

const WelcomeContainer = styled(PageContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WelcomeMessage = styled.section`
  ${/* background-color: white; */ ''}
  padding: 1rem;
  max-width: 20rem;
  box-sizing: border-box;
  margin: 1em;
  margin-top: 1.5em;
  color: #fff;
  border-radius: .2em;
  text-align: center;
`;

const Start = styled(StyledLink)`
  margin: .75em;
  background-color: white;
  padding: .5rem;
  padding-right: 2em;
  padding-left: 2em;
  border-radius: .2em;
  color: #052136;
  text-align: center;
`;

const Avatar = styled.img`
  object-fit: cover;
  margin-top: 10%;
  width: 70%;
`;

class Welcome extends Component {
  render() {
    return (
      <WelcomeContainer>
        <Avatar src={logo} />
        <WelcomeMessage>
          Welcome to MedSpace, where you can explore the most frequently prescribed medication for common mental health conditions.
        </WelcomeMessage>
        <Start to="/conditions">
          Start
        </Start>
      </WelcomeContainer>
    );
  }
}

export default Welcome;
