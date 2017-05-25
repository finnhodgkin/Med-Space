import React, { Component } from 'react';
import styled from 'styled-components';
import uuid from 'uuid';

import data from './../../databaseMeds';
import { PageContainer } from './../../styled';
import astronaut from './assets/astronaut.svg';
import calendar from './assets/calendar.svg';
import robot from './assets/robot.svg';
import telescope from './assets/telescope.svg';

const icons = {
  name: astronaut,
  pronunciation: telescope,
  use: calendar,
  'side-effects': robot,
};

const MedicationInfoWrapper = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 2rem;
  background-color: #052136;
`;

const PageTitle = styled.h1`
  ${/* color: #052136; */ ''}
  color: #fff;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
`;

const Pronunciation = styled.p`
  color: #fff;
  font-weight: 700;
  text-align: center;
`;

const InfoList = styled.ul`
`;

const InfoItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1rem;
  border-radius: 3px;
  ${/* background-color: #fafafa; */ ''}
`;

const SectionIcon = styled.img`
  margin-bottom: 1rem;
  width: 7rem;
  height: auto;
`;

const SectionTitle = styled.h2`
  margin-bottom: 1rem;
  text-align: center;
  color: #fff;
  font-weight: 700;
`;

const Description = styled.div`
  color: #f1f1f1;
  padding: 0.5rem;
  > div {
    text-align: center;
  }
`;

const Effect = styled.li`
  list-style-type: circle;
  margin: 0.6rem;
`;

class MedicationInfo extends Component {
  capitalizeFirst = word => word.charAt(0).toUpperCase() + word.slice(1);
  renderSideEffects = sideEffects => (
    <ul>
      {sideEffects.map(effect => <Effect key={uuid()}>{effect}</Effect>)}
    </ul>
  );

  renderPronunciation = drugs => (
    <div>
      <p>{drugs.name}</p><p>{drugs.pronunciation}</p>
    </div>
  );

  render() {
    const medication = this.props.match.params.medication;
    return (
      <PageContainer>
        <MedicationInfoWrapper>
          <InfoList>
            {data.map(drug => {
              if (drug.name === medication) {
                return Object.keys(drug).map(detail => {
                  if (detail === 'name') {
                    return (
                      <InfoItem>
                        <PageTitle>
                          {drug.name}
                        </PageTitle>
                        <Pronunciation>
                          {drug.pronunciation}
                        </Pronunciation>
                      </InfoItem>
                    );
                  }
                  if (detail === 'pronunciation') {
                    return;
                  }
                  return (
                    <InfoItem key={uuid()}>
                      <SectionIcon src={icons[detail]} />
                      <SectionTitle>
                        {this.capitalizeFirst(detail)}
                      </SectionTitle>
                      <Description>
                        {detail === 'side-effects'
                          ? this.renderSideEffects(drug[detail])
                          : detail === 'name'
                              ? this.renderPronunciation(drug)
                              : drug[detail]}
                      </Description>
                    </InfoItem>
                  );
                });
              }
              return null;
            })}
          </InfoList>
        </MedicationInfoWrapper>
      </PageContainer>
    );
  }
}

export default MedicationInfo;
