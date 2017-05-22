import React, { Component } from 'react';
import { StyledLink } from './../../styled';

class Welcome extends Component {
  render() {
    return (
      <div>
        <StyledLink to="/conditions">
          Start
        </StyledLink>
      </div>
    );
  }
}

export default Welcome;
