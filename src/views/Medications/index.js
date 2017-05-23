import React, { Component } from 'react';
import styled from 'styled-components';

import { StyledLink } from './../../styled';
import { PageContainer } from './../../styled';

const LandMass = styled.div`
  width: 100%;
  height: 5em;
  bottom: 0;
  position: absolute;
  background-color:brown;
  border-top-left-radius: 210px;
  border-top-right-radius: 210px;
`;

const Medication = styled.div`
  border-radius: 50%;
  position: absolute;
  width: 3%;
  height: 3%;
  background-color: yellow;
  top: ${props => props.top};
  left: ${props => props.left};
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
`;

const Summary = styled.figcaption`
  border: 1px solid black;
  height: 50%;
`;

const MedicationIcon = styled.img`
  border: 0;
  height: 50%;
`;

class Medications extends Component {
  state = {
    showCard: false,
  };
  handleClick = evt => {
    this.setState({ showCard: !this.state.showCard });
  };
  render() {
    console.log(this.props.match.params.condition);
    return (
      <PageContainer>
        <StyledLink to="/medication/fluoxetine">
          {this.props.match.params.condition}
        </StyledLink>
        <Medication onClick={this.handleClick} top={'200px'} left={'200px'} />
        <Medication onClick={this.handleClick} top={'300px'} left={'100px'} />
        <Medication onClick={this.handleClick} top={'250px'} left={'350px'} />
        <Medication onClick={this.handleClick} top={'150px'} left={'300px'} />
        <LandMass />
        {this.state.showCard &&
          <MedicationCard>
            <MedicationIcon />
            <Summary>Stuff and Things</Summary>
          </MedicationCard>}
      </PageContainer>
    );
  }
}

export default Medications;
