import React from 'react';
import uuid from 'uuid';
import closeButton from './assets/closeButton.svg';
import medicine from './assets/medicine.png';
import ChevronLeft from './assets/chevronLeft.svg';
import ChevronRight from './assets/chevronRight.svg';
import {
  CloseButton,
  Chevron,
  MedicationIcon,
  Summary,
  MedicationCard,
  MedLink,
  MedTitle,
} from './medicationStyles';

const MedCard = ({ med, showNext, drug, onClick }) => (
  <MedicationCard key={uuid()}>
    <CloseButton src={closeButton} onClick={e => onClick(e, null)} />
    <Chevron
      src={ChevronRight}
      right={'85%'}
      onClick={() => showNext(drug, 1, med)}
    />
    <Chevron
      src={ChevronLeft}
      left={'0%'}
      onClick={() => showNext(drug, -1, med)}
    />
    <Summary>
      <MedicationIcon src={medicine} /> <MedLink
        to={`/medication/${drug.name}`}
      >
        <MedTitle> {drug.name} </MedTitle>
      </MedLink> <p> {drug.use} </p>
    </Summary>
  </MedicationCard>
);

export default MedCard;
