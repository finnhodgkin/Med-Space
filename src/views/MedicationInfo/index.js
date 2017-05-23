import React, { Component } from 'react';
import { StyledLink } from './../../styled';
import { PageContainer } from './../../styled';

class MedicationInfo extends Component {
  render() {
    return (
      <PageContainer>
        <StyledLink to="/">
          Start again
        </StyledLink>
      </PageContainer>
    );
  }
}

export default MedicationInfo;
