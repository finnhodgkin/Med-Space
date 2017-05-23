import React, { Component } from 'react';
import styled from 'styled-components';

import { StyledLink } from './../../styled';
import { PageContainer } from './../../styled';

const PageTitle = styled.h1`
  padding-top: 1rem;
  background-color: white;
  color: #052136;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
`;

const InfoList = styled.ul`
  background-color: white;
  color: #787878;
`;

const InfoItem = styled.li`
  border-bottom: solid 1px #ccc;
  padding: 1rem;
`;

const SectionTitle = styled.h2`
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 700;
`;

const Description = styled.p`
  color: #aaa;
`;

class MedicationInfo extends Component {
  render() {
    return (
      <PageContainer>
        <StyledLink to="/">
          Home
        </StyledLink>

        <PageTitle>
          {this.props.match.params.medication}
        </PageTitle>

        <InfoList>
          <InfoItem>
            <SectionTitle>Effects</SectionTitle>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Description>
          </InfoItem>

          <InfoItem>
            <SectionTitle>Effects</SectionTitle>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Description>
          </InfoItem>

          <InfoItem>
            <SectionTitle>Effects</SectionTitle>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Description>
          </InfoItem>

          <InfoItem>
            <SectionTitle>Effects</SectionTitle>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Description>
          </InfoItem>

        </InfoList>
      </PageContainer>
    );
  }
}

export default MedicationInfo;
