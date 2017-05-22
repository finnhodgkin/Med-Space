import React, { Component } from 'react';
import { StyledLink } from './../../styled';

class Medications extends Component {
  render() {
    return (
      <div>
        <StyledLink to="/medication">
          Start
        </StyledLink>
      </div>
    );
  }
}

export default Medications;
