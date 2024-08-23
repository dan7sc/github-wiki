import  { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, body {
        margin: 0;
        padding: 0;
        border: 0;
    }

    body {
        background-color: #22272e;
        color: #FFFFFF;
    }
`

export default GlobalStyle;