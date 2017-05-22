import React, { Component } from 'react';
import { StyledLink } from './../../styled';

class Conditions extends Component {
  render() {
    return (
      <div>
        <StyledLink to="/medications">
          Medications
        </StyledLink>
      </div>
    );
  }
}

export default Conditions;
