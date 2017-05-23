import React, { Component } from 'react';
import { StyledLink } from './../../styled';
import styled from 'styled-components';
import { PageContainer } from './../../styled';

const Planet = styled.div`
  border-radius: 50%;
  background-color: palevioletred;
  width: 5em;
  height: 5em;
  box-shadow: inset -3vw -3vw 0px 0px rgba(0,0,0,0.45);
`;

const OCD = styled(Planet)`
  background-color: orange;
  width: 37vw;
  height: 37vw;
`;

const Anxiety = styled(Planet)`
  background-color: blue;
  width: 32vw;
  height: 32vw;
`;

const ADHD = styled(Planet)`
  background-color: skyblue;
  width: 25vw;
  height: 25vw;
`;

const Depression = styled(Planet)`
  background-color: yellow;
  width: 22vw;
  height: 22vw;
`;

const Psychosis = styled(Planet)`
  background-color: pink;
  width: 14vw;
  height: 14vw;
  box-shadow: inset -2.7vw -2.7vw 0px 0px rgba(0,0,0,0.45);
`;

const AnxietyLink = styled(StyledLink)`
  position: absolute;
  top: 5%;
  left: 12%;
`;

const DepressionLink = styled(StyledLink)`
  position: absolute;
  top: 13%;
  left: 60%;
`;

const OCDLink = styled(StyledLink)`
  position: absolute;
  top: 60%;
  left: 10%;
`;

const ADHDLink = styled(StyledLink)`
  position: absolute;
  top: 39%;
  left: 40%;
`;

const PsychosisLink = styled(StyledLink)`
  position: absolute;
  top: 82%;
  left: 60%;
`;

const Label = styled.h2`
  color: white;
`;

class Conditions extends Component {
  render() {
    return (
      <PageContainer>
        <DepressionLink to="/medications/depression">
          <Depression />
          <Label>Depression</Label>
        </DepressionLink>
        <OCDLink to="/medications/OCD">
          <OCD />
          <Label>OCD</Label>
        </OCDLink>
        <ADHDLink to="/medications/OCD">
          <ADHD />
          <Label>ADHD</Label>
        </ADHDLink>
        <PsychosisLink to="/medications/OCD">
          <Psychosis />
          <Label>Psychosis</Label>
        </PsychosisLink>
        <AnxietyLink to="/medications/OCD">
          <Anxiety />
          <Label>Anxiety</Label>
        </AnxietyLink>
      </PageContainer>
    );
  }
}

export default Conditions;
