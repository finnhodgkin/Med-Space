import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import uuid from 'uuid';
import styled from 'styled-components';

import './../styled/reset';
import theme from './../styled/theme';
import { Transition, AppWrapper } from './../styled/app';
import Welcome from './../views/Welcome';
import Medications from './../views/Medications';
import Conditions from './../views/Conditions';
import MedicationInfo from './../views/MedicationInfo';

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
                      transitionLeaveTimeout={500}
                    >
                      <Route
                        location={location}
                        key={uuid()}
                        path="/medications/:condition"
                        component={Medications}
                      />
                    </Transition>
                    <Route
                      location={location}
                      key={uuid()}
                      path="/medication/:medication"
                      component={MedicationInfo}
                    />
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
