import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    --webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 16px Roboto, sans-serif;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.purpleDark};
  }
`
