import React from 'react';
import { StarContainer, StarCaption, Medication } from './medicationStyles';

const Stars = ({ dimensions, onClick, drug, i }) => (
  <StarContainer left={dimensions[i].left} top={dimensions[i].top} >
    <Medication
      id={drug.name}
      onClick={e => onClick(e, drug)}
      size={dimensions[i].size}
    />
    <StarCaption> {drug.name} </StarCaption>
  </StarContainer>
);

export default Stars;
