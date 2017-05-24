import React, { Component } from 'react';
import uuid from 'uuid';

import ADHD from './../Conditions/assets/planet4.svg';
import OCD from './../Conditions/assets/planet1.svg';
import anxiety from './../Conditions/assets/planet2.svg';
import depression from './../Conditions/assets/planet3.svg';
import psychosis from './../Conditions/assets/planet5.svg';
import { Transition } from './../../styled/app';
import MedCard from './MedCard';
import Stars from './Stars';
import {
  MedicationContainer,
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
    dimensions: [
      {
        size: '2.2em',
        top: '60%',
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
        top: '26%',
        left: '55%',
      },
      {
        size: '1.9em',
        top: '40%',
        left: '7%',
      },
    ],
  };
  handleClick = (evt, drug) => {
    this.setState({
      showCard: !evt.target.id ? false : true,
      drug,
    });
  };

  showNext = (drug, direction, med) => {
    const allTheDrugs = data[med].drugs;
    let index = allTheDrugs.findIndex(dbDrug => dbDrug.name === drug.name);
    const crawl =
      ((index + direction) % allTheDrugs.length + allTheDrugs.length) %
      allTheDrugs.length;
    this.setState({ drug: allTheDrugs[crawl] });
  };

  render() {
    const med = this.props.match.params.condition;
    const dimensions = this.state.dimensions;
    return (
      <MedicationContainer>
        {data[med].drugs.map((drug, i) => (
          <Stars
            key={uuid()}
            dimensions={dimensions}
            drug={drug}
            onClick={this.handleClick}
            i={i}
          />
        ))}
        <LandMass src={currentPlanet[med]} />
        <Transition
          transitionName="zoom"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {this.state.showCard &&
            <MedCard
              onClick={this.handleClick}
              showNext={this.showNext}
              drug={this.state.drug}
              med={med}
            />}
        </Transition>
      </MedicationContainer>
    );
  }
}

export default Medications;
