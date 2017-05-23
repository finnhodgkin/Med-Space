import React, { Component } from 'react';
import { StyledLink } from './../../styled';
import { PageContainer } from './../../styled';

class Medications extends Component {
  render() {
    console.log(this.props.match.params.condition);
    return (
      <PageContainer>
        <StyledLink to="/">
          {this.props.match.params.condition}
        </StyledLink>
      </PageContainer>
    );
  }
}

export default Medications;
