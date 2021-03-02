import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

   :root {
    --white: #fff;


    --font: 'Montserrat', sans-serif;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;

    --border-radius: 3px;
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  html {
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  ::selection {
    background-color: var(--dark-gray);
    color: var(--white);
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: var(--white);
    color: var(--gray);
    font-family: var(--font);
    font-size: var(--fz-lg);
    line-height: 1.5;
  }

  main {
    margin: 0 auto;
    width: 100%;
    min-height: 100vh;
  }

`;

export default GlobalStyle;
