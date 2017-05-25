import React, { Component } from 'react';
import styled from 'styled-components';
import uuid from 'uuid';

import MedSection from './MedSection';
import MedTitle from './MedTitle';
import data from './../../databaseMeds';
import { PageContainer } from './../../styled';

const name = 'name';
const pronunciation = 'pronunciation';

const MedicationInfoWrapper = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 2rem;
  background-color: #052136;
`;

const InfoList = styled.ul``;

const Effect = styled.li`
  list-style-type: circle;
  margin: 0.6rem;
`;

class MedicationInfo extends Component {
  state = {
    medication: '',
    drug: {},
  };
  componentDidMount() {
    const { medication } = this.props.match.params;
    const drug = data.find(drug => drug.name === medication);
    this.setState({
      medication,
      drug,
    });
  }

  renderSideEffects = sideEffects => (
    <ul>
      {sideEffects.map(effect => <Effect key={uuid()}>{effect}</Effect>)}
    </ul>
  );

  render() {
    const { drug } = this.state;
    return (
      <PageContainer>
        <MedicationInfoWrapper>
          <InfoList>
            {Object.keys(drug).map(detail => {
              switch (detail) {
                case name:
                  return <MedTitle key={uuid()} drug={drug} />;
                case pronunciation:
                  return null;
                default:
                  return (
                    <MedSection
                      key={uuid()}
                      drug={drug}
                      detail={detail}
                      renderSideEffects={this.renderSideEffects}
                    />
                  );
              }
            })}
          </InfoList>
        </MedicationInfoWrapper>
      </PageContainer>
    );
  }
}

export default MedicationInfo;
