import { createGlobalStyle, css } from 'styled-components'


const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Graphik';
    src: local('Graphik'), url(fonts/GraphikRegular.woff) format('woff');
    font-weight: normal;
  }

  @font-face {
    font-family: 'Graphik';
    src: local('Graphik'), url(fonts/GraphikBold.woff) format('woff');
    font-weight: bold;
  }
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &::before,
    &::after {
      box-sizing: border-box;
    }
  }

  select {
    // A reset of styles, including removing the default dropdown arrow
    /* styling */
    background-color: white;
    border-radius: 4px;
    display: inline-block;
    font: inherit;
    line-height: 1.5em;
    
    padding: 0.5em 3.5em 0.5em 1em;

    /* reset */

    margin: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
    outline: 0;
    border: 0;
    :focus{
      outline: none;
    }
  }

  select::-ms-expand {
    display: none;
  }

  ${({ theme }) => css`
    //scrollbar configuration
    ::-webkit-scrollbar {
      width: 0.5rem;
      height: 0.5rem;
    }
    ::-webkit-scrollbar-track {
      background: ${theme.colors.mainBg};
    }

    ::-webkit-scrollbar-thumb {
      background: ${theme.colors.primary};
      border-radius: 1rem;
    }

    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.fonts.primary.family}, sans-serif;
    }
    
  `}

`
export default GlobalStyles
