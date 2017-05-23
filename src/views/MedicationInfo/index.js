import React, { Component } from 'react';
import styled from 'styled-components';

import { StyledLink } from './../../styled';
import { PageContainer } from './../../styled';
import astronaut from './assets/astronaut.svg';

const MedicationInfoWrapper = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 2rem;
`;

const PageTitle = styled.h1`
  color: #052136;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
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
  background-color: #fafafa;
`;

const SectionIcon = styled.img`
  margin-bottom: 1rem;
  width: 7rem;
  height: auto;
`;

const SectionTitle = styled.h2`
  margin-bottom: 1rem;
  text-align: center;
  color: #575757;
  font-weight: 700;
`;

const Description = styled.p`
  color: #898989;
`;

class MedicationInfo extends Component {
  render() {
    return (
      <PageContainer>
        <StyledLink to="/">
          Home
        </StyledLink>
        <MedicationInfoWrapper>

          <InfoList>
            <InfoItem>
              <PageTitle>
                {this.props.match.params.medication}
              </PageTitle>
            </InfoItem>

            <InfoItem>
              <SectionIcon src={astronaut} />
              <SectionTitle>Effects</SectionTitle>
              <Description>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Description>
            </InfoItem>

            <InfoItem>
              <SectionIcon src={astronaut} />
              <SectionTitle>Effects</SectionTitle>
              <Description>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Description>
            </InfoItem>

            <InfoItem>
              <SectionIcon src={astronaut} />
              <SectionTitle>Effects</SectionTitle>
              <Description>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Description>
            </InfoItem>

            <InfoItem>
              <SectionIcon src={astronaut} />
              <SectionTitle>Effects</SectionTitle>
              <Description>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Description>
            </InfoItem>

          </InfoList>
        </MedicationInfoWrapper>
      </PageContainer>
    );
  }
}

export default MedicationInfo;
