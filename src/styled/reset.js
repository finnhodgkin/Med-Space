import { injectGlobal } from 'styled-components';

// eslint-disable-next-line
injectGlobal`
  html {
    box-sizing: border-box;
    height: 100%;
  }

  *, *:before, *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
   font-family: Space Mono, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
   height: 100%;
   background-color: tomoto;
  }

  #root {
    height: 100%;
    background-color: #ccc;

    @media (min-width: 500px) {
      padding-top: 5rem;
    }

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
    transition: all .8s cubic-bezier(0.25, 0.1, 0.49, 0.96);
  }
    .slide-leave {
    bottom: 0;
  }

    .slide-leave.slide-leave-active {
    bottom: 110vh;
    transition: all .8s cubic-bezier(0.25, 0.1, 0.45, 1.29);
  }
    .slide-appear {
    bottom: -110vh;
  }

    .slide-appear.slide-appear-active {
    bottom: 0;
    transition: all .5s ease;
  }
  .zoom-enter {
    z-index: 1;
    transform: scale(0);
    opacity: 0.02;
    transform-origin: 50% 80%;
  }

  .zoom-enter.zoom-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: all .5s ease;
  }

  .conditions-enter {
    z-index: 1;
    bottom: -110vh;
  }

  .conditions-enter.conditions-enter-active {
    bottom: 0;
    transition: all .8s cubic-bezier(0.25, 0.1, 0.49, 0.96);
  }

  .conditions-leave {
    z-index: 1;
    bottom: 0;
  }

  .conditions-leave.conditions-leave-active {
    ${/* bottom: -110vh; */ ''}
    transition: all .5s cubic-bezier(0.25, 0.1, 0.49, 0.96);
  }
`;
