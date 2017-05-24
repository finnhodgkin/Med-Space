import React, { Component } from 'react';
import uuid from 'uuid';

import ADHD from './../Conditions/assets/planet4.svg';
import OCD from './../Conditions/assets/planet1.svg';
import anxiety from './../Conditions/assets/planet2.svg';
import depression from './../Conditions/assets/planet3.svg';
import psychosis from './../Conditions/assets/planet5.svg';
import medicine from './assets/medicine.png';
import closeButton from './assets/closeButton.svg';
import ChevronLeft from './assets/chevronLeft.svg';
import ChevronRight from './assets/chevronRight.svg';
import { Transition } from './../../styled/app';
import {
  StarContainer,
  StarCaption,
  CloseButton,
  Chevron,
  MedicationIcon,
  Summary,
  Medication,
  MedicationCard,
  MedicationContainer,
  MedLink,
  MedTitle,
  LandMass,
} from './medicationStyles';

import data from './../../database';

const currentPlanet = {
  ADHD,
  OCD,
  anxiety,
  depression,
  psychosis,
};

class Medications extends Component {
  state = {
    showCard: false,
    drug: '',
    currentDrug: 0,
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
        left: '30%',
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
      drug,
    });
  };
  showNext = direction => {
    const med = this.props.match.params.condition;
    this.setState({
      drug: data[med].drugs[this.state.currentDrug + direction],
    });
    this.state.currentDrug <= 0 ? this.setState({ currentDrug: 0 }) : null;
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
              onClick={e => this.handleClick(e, drug)}
              size={dimensions[i].size}
            />
            <StarCaption> {drug.name} </StarCaption>
          </StarContainer>
        ))}
        <LandMass src={currentPlanet[med]} />
        <Transition
          transitionName="zoom"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {this.state.showCard &&
            <MedicationCard key={uuid()}>
              <CloseButton
                src={closeButton}
                onClick={e => this.handleClick(e, null)}
              />
              <Chevron
                src={ChevronRight}
                right={'85%'}
                onClick={() => this.showNext(1)}
              />
              <Chevron
                src={ChevronLeft}
                left={'0%'}
                onClick={() => this.showNext(-1)}
              />
              <Summary>
                <MedicationIcon src={medicine} /> <MedLink
                  to={`/medication/${this.state.drug.name}`}
                >
                  <MedTitle> {this.state.drug.name} </MedTitle>
                </MedLink> <p> {this.state.drug.use} </p>
              </Summary>
            </MedicationCard>}
        </Transition>
      </MedicationContainer>
    );
  }
}

export default Medications;
