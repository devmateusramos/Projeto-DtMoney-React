import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #F0F2F5;
    --red: #E52E4D;
    --blue: #5429CC;

    --blue-light: #6933FF;

    --text-title: #363F5F;
    --text-body: #969CB3;

    --shape: #FFFFFF;

  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    // font-size: 16px (desktop) por isso essas alterações com % fazem mt sentido para aplicação usando rem pois ele é uma medida de equivalência ao tamanho da fonte, usando porcentagem ajuda na acessibilidade.
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%large; // 14px
    }
  }

  body {
    background: ---background;
    --webkit-font-smoothing: antialiased;
  }
  
  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
