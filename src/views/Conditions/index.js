import React, { Component } from 'react';
import { StyledLink } from './../../styled';
import styled from 'styled-components';
import { PageContainer } from './../../styled';

const Condition = styled.div`

`;

const Planet = styled.div`
  border-radius: 50%;
  background-color: palevioletred;
  width: 5em;
  height: 5em;
`;

const Label = styled.h2`
  color: white;
`;

class Conditions extends Component {
  render() {
    return (
      <PageContainer>
        <Condition>
          <Planet />
          <StyledLink to="/medications/OCD">
            <Label>OCD</Label>
          </StyledLink>
        </Condition>
      </PageContainer>
    );
  }
}

export default Conditions;
