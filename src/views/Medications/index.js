import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import uuid from 'uuid';

import medicine from './assets/medicine.png';
import planet from './assets/planet-earth.svg';
import { StyledLink } from './../../styled';
import { PageContainer } from './../../styled';

const breathe = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
`;
const MedicationContainer = styled(PageContainer)`
  overflow: hidden;
`;

const LandMass = styled.img`
  bottom: -30%;
  left: 0;
  position: absolute;
`;

const Medication = styled.div`
  border-radius: 50%;
  position: absolute;
  width: ${props => props.size};
  height: ${props => props.size};
  background-color: yellow;
  top: ${props => props.top};
  left: ${props => props.left};
  box-shadow: 0 0 100px #f1da36, 0 0 60px #f2ad00, 0 0 10px #c96800, 0 0 120px #feff8f;
  animation: ${breathe} 10s ease infinite;
`;

const MedicationCard = styled.figure`
  width: 40%;
  height: 30%;
  background-color: white;
  box-shadow: 1px 1px 0 grey,
  1.5px 1.5px 0 grey;
  position: absolute;
  top: 30%;
  left: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Summary = styled.figcaption`
  height: 50%;
  padding: 0.2em;
`;

const MedicationIcon = styled.img`
  border: 0;
  height: 50%;
  width: 50%;
  object-fit: cover;
`;

class Medications extends Component {
  state = {
    showCard: false,
    dimensions: [
      {
        size: '2.2em',
        top: '70%',
        left: '15%',
      },
      {
        size: '1.5em',
        top: '50%',
        left: '55%',
      },
      {
        size: '2em',
        top: '8%',
        left: '75%',
      },
      {
        size: '1.7em',
        top: '10%',
        left: '20%',
      },
    ],
  };
  handleClick = evt => {
    this.setState({ showCard: !this.state.showCard });
  };
  render() {
    return (
      <MedicationContainer>
        <StyledLink to="/medication/fluoxetine">
          {this.props.match.params.condition}
        </StyledLink>
        {this.state.dimensions.map(dimension => (
          <Medication
            key={uuid()}
            onClick={this.handleClick}
            size={dimension.size}
            top={dimension.top}
            left={dimension.left}
          />
        ))}
        <LandMass src={planet} />
        {this.state.showCard &&
          <MedicationCard onClick={this.handleClick}>
            <MedicationIcon src={medicine} />
            <Summary>Stuff and Things</Summary>
          </MedicationCard>}
      </MedicationContainer>
    );
  }
}

export default Medications;
