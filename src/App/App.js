import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import uuid from 'uuid';
import styled from 'styled-components';

import './../styled/reset';
import theme from './../styled/theme';
import { Transition } from './../styled/app';
import AppWrapper from './AppWrapper';
import Welcome from './../views/Welcome';
import Medications from './../views/Medications';
import Conditions from './../views/Conditions';
import MedicationInfo from './../views/MedicationInfo';
import BackButton from './BackButton';

const RouteContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <AppWrapper>
            <BackButton />
            <Route
              render={({ location }) => {
                return (
                  <RouteContainer>
                    <Transition
                      transitionName="slide"
                      transitionEnterTimeout={800}
                      transitionLeaveTimeout={800}
                    >
                      <Route
                        exact
                        path="/"
                        key={uuid()}
                        location={location}
                        component={Welcome}
                      />
                      <Route
                        location={location}
                        key={uuid()}
                        path="/conditions"
                        component={Conditions}
                      />
                    </Transition>
                    <Transition
                      transitionName="conditions"
                      transitionEnterTimeout={800}
                      transitionLeaveTimeout={1}
                    >
                      <Route
                        location={location}
                        key={uuid()}
                        path="/medications/:condition"
                        component={Medications}
                      />
                    </Transition>

                    <Transition
                      transitionName="medications"
                      transitionEnter={false}
                      transitionLeave={false}
                    >
                      <Route
                        location={location}
                        key={uuid()}
                        path="/medication/:medication"
                        component={MedicationInfo}
                      />
                    </Transition>
                  </RouteContainer>
                );
              }}
            />
          </AppWrapper>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
