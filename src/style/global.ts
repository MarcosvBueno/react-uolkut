import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --brand-color: #ED6D25 ;
    --dark-10: #4b4b4b;
    --dark-20: #B4AEAE;
    --dark-30: #FDFEFF;
    --dark-40: #FFFFFF;
    --bg-text: #EFF3F8;
    --message-color: #2962FF;
    --success-color: #0BB07B;
    --warning-color: #FFCE52;
    --error-color: #F03D3D;
    --information-color: #E0E0E0;
  }

  * {
    box-sizing: border-box;
    font-family: 'Roboto Flex',sans-serif;
    margin: 0;
    padding: 0;
  }
/* 
  @font-face {
  font-family: 'SF Pro Display Regular';
  src: url('../fonts/SFPRODISPLAYREGULAR.OTF') format('truetype');
  
} */


  body {
    background-color: #D9E6F7;
    margin: 0 auto ;
    color: #000;
    font-family: 'SF Pro Display Regular',sans-serif;
    
  }
`;