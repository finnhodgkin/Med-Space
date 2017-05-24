import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import uuid from 'uuid';

import medicine from './assets/medicine.png';
import planet from './assets/planet-earth.svg';
import closeButton from './assets/closebutton.png';
import { StyledLink } from './../../styled';
import { PageContainer } from './../../styled';
import data from './../../database';

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
const shake = keyframes`
  0% {
    transform: translateX(0);
  }

  20% {
    transform: translateX(-10px);
  }

  40% {
    transform: translateX(10px);
  }

  60% {
    transform: translateX(-10px);
  }

  80% {
    transform: translateX(10px);
  }

  100% {
    transform: translateX(0);
  }
`;

const MedicationContainer = styled(PageContainer)`
  overflow: hidden;
`;

const MedLink = styled(StyledLink)`
  animation: ${shake} 0.5s ease-in-out infinite;
`;

const LandMass = styled.img`
  bottom: -30%;
  left: 0;
  position: absolute;
`;

const Medication = styled.div`
  border-radius: 50%;
  width: ${props => props.size};
  height: ${props => props.size};
  background-color: yellow;
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

const StarContainer = styled.div`
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StarCaption = styled.article`
  margin: 0.3em;
`;

const CloseButton = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 3px;
`;

class Medications extends Component {
  state = {
    showCard: false,
    drug: '',
    dimensions: [
      {
        size: '2.2em',
        top: '65%',
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
        left: '70%',
      },
      {
        size: '1.7em',
        top: '10%',
        left: '20%',
      },
      {
        size: '1.9em',
        top: '40%',
        left: '5%',
      },
    ],
  };
  handleClick = (evt, drug) => {
    this.setState({
      showCard: !evt.target.id ? false : true,
      drug: evt.target.id,
    });
  };
  render() {
    const med = this.props.match.params.condition;
    const dimensions = this.state.dimensions;
    return (
      <MedicationContainer>
        {data[med].drugs.map((drug, i) => (
          <StarContainer
            left={dimensions[i].left}
            top={dimensions[i].top}
            key={uuid()}
          >
            <Medication
              id={drug.name}
              onClick={this.handleClick}
              size={dimensions[i].size}
            />
            <StarCaption>{drug.name}</StarCaption>
          </StarContainer>
        ))}
        <LandMass src={planet} />
        {this.state.showCard &&
          <MedicationCard>
            <MedicationIcon src={medicine} />
            <Summary>
              <CloseButton src={closeButton} onClick={this.handleClick} />
              <MedLink to={`/medication/${this.state.drug}`}>
                {this.state.drug}
              </MedLink>
            </Summary>
          </MedicationCard>}
      </MedicationContainer>
    );
  }
}

export default Medications;
