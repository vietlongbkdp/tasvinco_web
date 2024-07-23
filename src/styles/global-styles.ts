import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

  html,
  body {
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    font-family: "Inter", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-variation-settings:
    "slnt" 0;
  }

  #root {
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
  }
`;
