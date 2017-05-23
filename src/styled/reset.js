import { injectGlobal } from 'styled-components';

// eslint-disable-next-line
injectGlobal`
  html {
    box-sizing: border-box;
    height: 100%;
  }

  #root {
    height: 100%;
  }

  *, *:before, *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
   font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
   height: 100%;
   background-color: #052136;
  }

  ul {
    list-style-type: none;
  }

  .slide-enter {
    z-index: 1;
    bottom: -110vh;
  }

  .slide-enter.slide-enter-active {
    bottom: 0;
    transition: all 500ms ease-in;
  }
    .slide-leave {
    bottom: 0;
  }

    .slide-leave.slide-leave-active {
    bottom: 110vh;
    transition: all 500ms ease-in;
  }
    .slide-appear {
    bottom: -110vh;
  }

    .slide-appear.slide-appear-active {
    bottom: 0;
    transition: all .5s ease-in;
  }
`;
