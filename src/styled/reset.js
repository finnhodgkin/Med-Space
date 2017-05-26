import { injectGlobal } from 'styled-components';

// eslint-disable-next-line
injectGlobal`
  html {
    box-sizing: border-box;
    height: 100%;
  }
  ::-webkit-scrollbar {
    display: none;
    height: 0;
    width: 0;
    background-color: transparent;
  }

  *, *:before, *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
   font-family: Space Mono, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
   height: 100%;
  }

  #root {
    height: 100%;

    @media (min-width: 30em) {
      background: linear-gradient(to top right, #ddd, #fff);
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

  .welcome-enter {
    z-index: 1;
    bottom: 110vh;
  }

  .welcome-enter.welcome-enter-active {
    bottom: 0;
    transition: all .8s cubic-bezier(0.25, 0.1, 0.49, 0.96);
  }
    .welcome-leave {
    bottom: 0;
  }
    .welcome-leave.welcome-leave-active {
    bottom: 110vh;
    transition: all .8s cubic-bezier(0.25, 0.1, 0.45, 1.29);
  }

  .home-enter {
    z-index: 1;
    bottom: 110vh;
  }
  .home-enter.home-enter-active {
    bottom: 0;
    transition: all .8s cubic-bezier(0.25, 0.1, 0.49, 0.96);
  }
  .home-leave {
    bottom: 0;
  }
  .home-leave.home-leave-active {
    bottom: -110vh;
    transition: all .8s cubic-bezier(0.25, 0.1, 0.45, 1.29);
  }
`;
