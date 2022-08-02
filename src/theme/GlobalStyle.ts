import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  *,html,body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Montserrat", sans-serif;
  }

  body, .__next {
    height: 100%;
  }

  h1,h2,h3,h4,h5,h6,p {
    color: ${(props) => props.theme.colors.gray.dark};
  }

`
