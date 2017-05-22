import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import './../styled/reset';
import theme from './../styled/theme';
import { AppWrapper } from './../styled/app';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <AppWrapper>
          App
        </AppWrapper>
      </ThemeProvider>
    );
  }
}

export default App;
