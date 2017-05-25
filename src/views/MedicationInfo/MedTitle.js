import React from 'react';
import styled from 'styled-components';

const InfoItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1rem;
  border-radius: 3px;
`;
const Pronunciation = styled.p`
  color: #fff;
  font-weight: 700;
  text-align: center;
`;

const PageTitle = styled.h1`
  ${/* color: #052136; */ ''}
  color: #fff;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
`;

const MedTitle = ({ drug }) => (
  <InfoItem>
    <PageTitle>
      {drug.name}
    </PageTitle>
    <Pronunciation>
      {drug.pronunciation}
    </Pronunciation>
  </InfoItem>
);

export default MedTitle;
