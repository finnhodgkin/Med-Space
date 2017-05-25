import React from 'react';
import styled from 'styled-components';

import astronaut from './assets/astronaut.svg';
import calendar from './assets/calendar.svg';
import robot from './assets/robot.svg';
import telescope from './assets/telescope.svg';

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
const icons = {
  name: astronaut,
  pronunciation: telescope,
  use: calendar,
  'side-effects': robot,
};

const capitalizeFirst = word => word.charAt(0).toUpperCase() + word.slice(1);

const MedSection = ({
  detail,
  drug,
  renderPronunciation,
  renderSideEffects,
}) => (
  <InfoItem>
    <SectionIcon src={icons[detail]} />
    <SectionTitle>
      {capitalizeFirst(detail)}
    </SectionTitle>
    <Description>
      {detail === 'side-effects'
        ? renderSideEffects(drug[detail])
        : drug[detail]}
    </Description>
  </InfoItem>
);

export default MedSection;
