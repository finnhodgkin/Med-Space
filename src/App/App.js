import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import styled from 'styled-components';

import './../styled/reset';
import theme from './../styled/theme';
import { AppWrapper } from './../styled/app';
import Welcome from './../views/Welcome';
import Medications from './../views/Medications';
import Conditions from './../views/Conditions';
import MedicationInfo from './../views/MedicationInfo';


const Transition = styled(CSSTransitionGroup)`
  width: 100%;
  height: 100%;
`;
class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <AppWrapper>
            <Route exact path="/" component={Welcome} />
            <Transition
              transitionName="fade"
              transitionEnterTimeout={300}
              transitionLeaveTimeout={300}
            >
              <Route path="/conditions" component={Conditions} />
            </Transition>
            <Route path="/medications/:condition" component={Medications} />
            <Route path="/medication/:medication" component={MedicationInfo} />
          </AppWrapper>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
