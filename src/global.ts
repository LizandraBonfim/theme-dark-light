import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    background: ${props => props.theme.color.background};
    color: ${props => props.theme.color.text};
    font-family: var(--font-roboto);
    box-sizing: border-box;
    transition: all 0.50s linear;
 
  }

  a { text-decoration: none; color: ${propx => propx.theme.color.svg}; }
  li{list-style: none;}

  svg > * {
    fill: ${props => props.theme.color.svg};

  }
  

  p{
      color: ${propx => propx.theme.color.svg};
  }

`;

export default GlobalStyle;