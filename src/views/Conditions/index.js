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
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  box-shadow: inset -.8em -.8em 0px 0px rgba(0,0,0,0.15);
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
    transform: translateY(70%);
  }
  100% {
    transform: translateY(0%);
  }
`;

const ADHDIn = keyframes`
  0% {
    transform: translateY(170%);
  }
  100% {
    transform: translateY(0%);
  }
`;

const PsychosisIn = keyframes`
  0% {
    transform: translateY(500%);
  }
  100% {
    transform: translateY(0%);
  }
`;

const OCD = styled(Planet)`
  background-image: url(${PlanetOCD});
  box-shadow: inset -1.2em -1.2em 0px 0px rgba(0,0,0,0.15);
`;

const Anxiety = styled(Planet)`
  background-image: url(${PlanetAnxiety});
  box-shadow: inset -1em -1em 0px 0px rgba(0,0,0,0.15);
`;

const ADHD = styled(Planet)`
  background-image: url(${PlanetADHD});
  box-shadow: inset -.9em -.9em 0px 0px rgba(0,0,0,0.15);
`;

const Depression = styled(Planet)`
  background-image: url(${PlanetDepression});
  box-shadow: inset -.7em -.7em 0px 0px rgba(0,0,0,0.15);
`;

const Psychosis = styled(Planet)`
  background-image: url(${PlanetPsychosis});
  box-shadow: inset -.5em -.5em 0px 0px rgba(0,0,0,0.15);
`;

const OCDLink = styled(StyledLink)`
  position: absolute;
  top: 60%;
  left: 10%;
  width: 8em;
  height: 8em;
  animation-duration: 1.8s;
  animation-timing-function: cubic-bezier(0.25, 0.1, 0.34, 0.97);
  animation-name: ${OCDIn};
  ${props => (props.label ? `margin-top: 8em;` : ``)}
`;

const AnxietyLink = styled(StyledLink)`
  position: absolute;
  top: 5%;
  left: 12%;
  animation-duration: 1.6s;
  animation-name: ${AnxietyIn};
  width: 7em;
  height: 7em;
  ${props => (props.label ? `margin-top: 7em;` : ``)}
`;

const ADHDLink = styled(StyledLink)`
  position: absolute;
  top: 39%;
  left: 45%;
  animation-duration: 1.6s;
  animation-timing-function: cubic-bezier(0.25, 0.1, 0.49, 0.96);
  animation-name: ${ADHDIn};
  width: 5.6em;
  height: 5.6em;
  ${props => (props.label ? `margin-top: 5.6em;` : ``)}
`;

const DepressionLink = styled(StyledLink)`
  position: absolute;
  top: 15%;
  left: 61%;
  width: 5em;
  height: 5em;
  animation-duration: 1.6s;
  animation-name: ${DepressionIn};
  ${props => (props.label ? `margin-top: 4.8em;` : ``)}
`;

const PsychosisLink = styled(StyledLink)`
  position: absolute;
  top: 82%;
  left: 60%;
  animation-duration: 1.8s;
  animation-timing-function: cubic-bezier(0.25, 0.1, 0.34, 0.97);
  animation-name: ${PsychosisIn};
  width: 2.5em;
  height: 2.5em;
  ${props => (props.label ? `margin-top: 2.5em;` : ``)}
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
        margin-left: -26%;
      ` : props.ADHD ? `
        animation-duration: 1.6s;
        animation-timing-function: cubic-bezier(0.25, 0.1, 0.49, 0.96);
        animation-name: ${ADHDIn};
      ` : props.Psychosis ? `
        animation-duration: 1.8s;
        animation-timing-function: cubic-bezier(0.25, 0.1, 0.34, 0.97);
        animation-name: ${PsychosisIn};
        margin-left: -80%;
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
        </DepressionLink>
        <DepressionLink label to="/medications/depression">
          <Label Depression>Depression</Label>
        </DepressionLink>
        <OCDLink to="/medications/OCD">
          <OCD />
        </OCDLink>
        <OCDLink label to="/medications/OCD">
          <Label OCD>OCD</Label>
        </OCDLink>
        <ADHDLink to="/medications/ADHD">
          <ADHD />
        </ADHDLink>
        <ADHDLink label to="/medications/ADHD">
          <Label ADHD>ADHD</Label>
        </ADHDLink>
        <PsychosisLink to="/medications/psychosis">
          <Psychosis />
        </PsychosisLink>
        <PsychosisLink label to="/medications/psychosis">
          <Label Psychosis>Psychosis</Label>
        </PsychosisLink>
        <AnxietyLink to="/medications/anxiety">
          <Anxiety />
        </AnxietyLink>
        <AnxietyLink label to="/medications/anxiety">
          <Label Anxiety>Anxiety</Label>
        </AnxietyLink>
      </PageContainer>
    );
  }
}

export default Conditions;
