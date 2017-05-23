import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './../styled/reset';
import theme from './../styled/theme';
import { AppWrapper } from './../styled/app';
import Welcome from './../views/Welcome';
import Medications from './../views/Medications';
import Conditions from './../views/Conditions';
import MedicationInfo from './../views/MedicationInfo';

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <AppWrapper>
            <Route exact path="/" component={Welcome} />
            <Route path="/conditions" component={Conditions} />
            <Route path="/medications/:condition" component={Medications} />
            <Route path="/medication/:medication" component={MedicationInfo} />
          </AppWrapper>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
