import React, { Component } from 'react';
import { StyledLink } from './../../styled';
import styled, { keyframes } from 'styled-components';
import { PageContainer } from './../../styled';

import PlanetOCD from './assets/planet1.svg';
import PlanetAnxiety from './assets/planet2.svg';
import PlanetDepression from './assets/planet3.svg';
import PlanetADHD from './assets/planet4.svg';
import PlanetPsychosis from './assets/planet5.svg';

const Planet = styled.div`
  border-radius: 50%;
  width: 5em;
  height: 5em;
  box-shadow: inset -3vw -3vw 0px 0px rgba(0,0,0,0.15);
`;

const OCDIn = keyframes`
  0% {
    transform: translateY(180%);
  }
  100% {
    transform: translateY(0%);
  }
`;

const AnxietyIn = keyframes`
  0% {
    transform: translateY(50%);
  }
  100% {
    transform: translateY(0%);
  }
`;

const DepressionIn = keyframes`
  0% {
    transform: translateY(50%);
  }
  100% {
    transform: translateY(0%);
  }
`;

const ADHDIn = keyframes`
  0% {
    transform: translateY(120%);
  }
  100% {
    transform: translateY(0%);
  }
`;

const PsychosisIn = keyframes`
  0% {
    transform: translateY(160%);
  }
  100% {
    transform: translateY(0%);
  }
`;

const OCD = styled(Planet)`
  background-image: url(${PlanetOCD});
  background-size: 100% 100%;
  width: 37vw;
  height: 37vw;
`;

const Anxiety = styled(Planet)`
  background-image: url(${PlanetAnxiety});
  background-size: 100% 100%;
  width: 32vw;
  height: 32vw;
`;

const ADHD = styled(Planet)`
  background-image: url(${PlanetADHD});
  background-size: 100% 100%;
  width: 25vw;
  height: 25vw;
`;

const Depression = styled(Planet)`
  background-image: url(${PlanetDepression});
  background-size: 100% 100%;
  width: 22vw;
  height: 22vw;
`;

const Psychosis = styled(Planet)`
  background-image: url(${PlanetPsychosis});
  background-size: 100% 100%;
  width: 14vw;
  height: 14vw;
  box-shadow: inset -2.7vw -2.7vw 0px 0px rgba(0,0,0,0.15);
`;

const OCDLink = styled(StyledLink)`
  position: absolute;
  top: 60%;
  left: 10%;
  animation-duration: 1.8s;
  animation-timing-function: cubic-bezier(0.25, 0.1, 0.34, 0.97);
  animation-name: ${OCDIn};
`;

const AnxietyLink = styled(StyledLink)`
  position: absolute;
  top: 5%;
  left: 12%;
  animation-duration: 1.6s;
  animation-name: ${AnxietyIn};
`;

const ADHDLink = styled(StyledLink)`
  position: absolute;
  top: 39%;
  left: 40%;
  animation-duration: 1.6s;
  animation-timing-function: cubic-bezier(0.25, 0.1, 0.49, 0.96);
  animation-name: ${ADHDIn};
`;

const DepressionLink = styled(StyledLink)`
  position: absolute;
  top: 13%;
  left: 60%;
  animation-duration: 1.6s;
  animation-name: ${DepressionIn};
`;

const PsychosisLink = styled(StyledLink)`
  position: absolute;
  top: 82%;
  left: 60%;
  animation-duration: 1.8s;
  animation-timing-function: cubic-bezier(0.25, 0.1, 0.34, 0.97);
  animation-name: ${PsychosisIn};
`;

const Label = styled.h2`
  color: #90cdff;
  margin-top: .2em;
  font-size: 1.3em;
  text-align: center;
  ${props => {
    return props.OCD ? `
        animation-duration: 1.8s;
        animation-timing-function: cubic-bezier(0.25, 0.1, 0.34, 0.97);
        animation-name: ${OCDIn};
      ` : props.Depression ? `
        animation-duration: 1.6s;
        animation-name: ${DepressionIn};
        margin-left: -18%;
      ` : props.ADHD ? `
        animation-duration: 1.6s;
        animation-timing-function: cubic-bezier(0.25, 0.1, 0.49, 0.96);
        animation-name: ${ADHDIn};
      ` : props.Psychosis ? `
        animation-duration: 1.8s;
        animation-timing-function: cubic-bezier(0.25, 0.1, 0.34, 0.97);
        animation-name: ${PsychosisIn};
        margin-left: -40%;
      ` : props.Anxiety ? `
        animation-duration: 1.6s;
        animation-name: ${AnxietyIn};
      ` : ``;
  }}
`;

class Conditions extends Component {
  render() {
    return (
      <PageContainer>
        <DepressionLink to="/medications/depression">
          <Depression />
          <Label Depression>Depression</Label>
        </DepressionLink>
        <OCDLink to="/medications/OCD">
          <OCD />
          <Label OCD>OCD</Label>
        </OCDLink>
        <ADHDLink to="/medications/ADHD">
          <ADHD />
          <Label ADHD>ADHD</Label>
        </ADHDLink>
        <PsychosisLink to="/medications/psychosis">
          <Psychosis />
          <Label Psychosis>Psychosis</Label>
        </PsychosisLink>
        <AnxietyLink to="/medications/anxiety">
          <Anxiety />
          <Label Anxiety>Anxiety</Label>
        </AnxietyLink>
      </PageContainer>
    );
  }
}

export default Conditions;
